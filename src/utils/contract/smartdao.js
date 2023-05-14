import { AeSdkAepp, Node, BrowserWindowMessageConnection, walletDetector } from '@aeternity/aepp-sdk';
import smartdaoACI from './smartdao.json';
import daoACI from "./dao.json";

export const smartdaoAddress = "ct_2kzYfkreceHq41PjcdxZsxrG7eUpMbuhUNJhZTMFJeEdqfehqh";
// const SECRET_KEY = 'eba8786a506fd20e8b00f117e6d6598fd0943ff3d0bd926aea5e1c35802ce36a54584dc898d97866e538fb8a6bfa26db4ea60d69c87c68949b4531078aab2ea2';

const COMPILER_URL = 'https://compiler.aepps.com';
const node = new Node('https://testnet.aeternity.io')


const aeSdk = new AeSdkAepp({
    nodes: [{ name: 'testnet', instance: node }],
    onCompiler: COMPILER_URL,
    onNetworkChange: async ({ networkId }) => console.log("Network changed, new network id: ", networkId),
    onAddressChange: async ({ current }) => console.log("Address changed, new address: ", current[0]),
    onDisconnect: () => console.log("Aepp is disconnected")
})


export const scanForWallets = async () => {
    console.log("Scanning for wallets...")
    return new Promise((resolve) => {
        const handleWallets = async ({ wallets, newWallet }) => {
            try {
                console.log({ wallets, newWallet });
                newWallet = newWallet || Object.values(wallets)[0]
                stopScan()
                await aeSdk.connectToWallet(newWallet.getConnection())
                const { address: { current } } = await aeSdk.subscribeAddress('subscribe', 'connected')
                console.log("Connected wallet: ", Object.keys(current)[0]);
                resolve()
            } catch (err) {
                console.log(err);
            }
        }
        const scannerConnection = new BrowserWindowMessageConnection()
        const stopScan = walletDetector(scannerConnection, handleWallets)
    })
};

export const login = async () => {
    try {
        await scanForWallets();
    } catch (err) {
        console.log(err)
    }
    return aeSdk;
}


export async function logout() {
    await aeSdk.disconnectWallet();
    window.location.reload();
}