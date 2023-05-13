import { AeSdkAepp, Node, BrowserWindowMessageConnection, walletDetector } from '@aeternity/aepp-sdk';
import smartdaoACI from './smartdao.json';
import daoACI from "./dao.json";

export const smartdaoAddress = "ct_2oGBsuUBsyoNRKPMmjC5ws7Atk756YyowLG74zZqotxAHpF6tj";
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

// dao {
//     name: "name of the DAO",
//     description: "String: Purpose of the dao",
//     tokenSymbol: "String: Symbol of DAO membership token",
//     initialMembers: "Array of addresses: initial members of the DAO",
//     startingBalance: "number: initial balance of the DAO"
// }
export async function createDAO(dao) {
    const contract = await window.client.initializeContract({ aci: smartdaoACI, address: smartdaoAddress });
    const res = await contract.createDAO(dao.name, dao.description, dao.tokenSymbol, dao.initialMembers, dao.startingBalance);
}


//

export async function getDA0(id) {
    const contract = await aeSdk.initializeContract({ aci: smartdaoACI, contractAddress: smartdaoAddress })
    const res = await contract.getDAO(id);
    const dao = res.decodedResult;
    return dao;
}


export async function getDA0s() {
    const contract = await aeSdk.initializeContract({ aci: smartdaoACI, contractAddress: smartdaoAddress })
    const res = await contract.getDAOs();
    const daos = res.decodedResult;
    return daos;
}

export async function getMyDAOs() {
    //TBD
}

// DAO functions


// proposal {
//     proposalType: 'String: can be "transfer", "add", "remove", "quorum" or "voteTime"',
//     description: 'String: describe what the proposal is for',
//     value: 'number: value of the proposal'
//     target: 'address: target address for proposal'
// }

export async function createProposal(DAOAddress, proposal) {
    const contract = await window.client.initializeContract({ aci: daoACI, contractAddress: DAOAddress });
    const res = await contract.createProposal(proposal.proposalType, proposal.description, proposal.value, proposal.target);
}

export async function voteForProposal(DAOAddress, proposalId) {
    const contract = await window.client.initializeContract({ aci: daoACI, contractAddress: DAOAddress });
    const res = await contract.voteFor(proposalId);
}

export async function voteAgainstProposal(DAOAddress, proposalId) {
    const contract = await window.client.initializeContract({ aci: daoACI, contractAddress: DAOAddress });
    const res = await contract.voteAgainst(proposalId);
}

export async function executeProposal(DAOAddress, proposalId) {
    const contract = await window.client.initializeContract({ aci: daoACI, contractAddress: DAOAddress });
    const res = await contract.executeProposal(proposalId);
}

export async function getProposal(DAOAddress, id) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, contractAddress: DAOAddress })
    const res = await contract.getProposal(id);
    const proposal = res.decodedResult;
    return proposal;
}

export async function getProposals(DAOAddress) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, contractAddress: DAOAddress })
    const res = await contract.getProposals();
    const proposals = res.decodedResult;
    return proposals;
}

export async function getActiveProposals(DAOAddress) {
    const contract = await aeSdk.initializeContract({ aci: daoACI, contractAddress: DAOAddress })
    const res = await contract.getActiveProposals();
    const proposals = res.decodedResult;
    return proposals;
}



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