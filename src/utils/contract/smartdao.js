import { AeSdkAepp, Node, BrowserWindowMessageConnection, walletDetector } from '@aeternity/aepp-sdk';

export const smartdaoAddress = "ct_JkJEkXw82t1boPmb9ogNhxn3L2dHL9yALGEnu2D9fNKmaVsAu"
// const SECRET_KEY = 'eba8786a506fd20e8b00f117e6d6598fd0943ff3d0bd926aea5e1c35802ce36a54584dc898d97866e538fb8a6bfa26db4ea60d69c87c68949b4531078aab2ea2';

const COMPILER_URL = 'https://compiler.aepps.com';
const node = new Node('https://testnet.aeternity.io')
// stool wealth bike lucky tennis fuel thing august quote action sustain fiction

export const aeSdk = new AeSdkAepp({
    nodes: [{ name: 'testnet', instance: node }],
    onCompiler: COMPILER_URL,
    onNetworkChange: async ({ networkId }) => console.log("Network changed, new network id: ", networkId),
    onAddressChange: async ({ current }) => console.log("Address changed, new address: ", current[0]),
    onDisconnect: () => console.log("Aepp is disconnected")
})


export const scanForWallets = async () => {
    return new Promise((resolve) => {
        const handleWallets = async ({ wallets, newWallet }) => {
            try {
                newWallet = newWallet || Object.values(wallets)[0]
                stopScan()
                await aeSdk.connectToWallet(newWallet.getConnection())
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