const { AeSdk, Node, MemoryAccount, CompilerHttp } = require('@aeternity/aepp-sdk');
const fs = require("fs");

const SmartDao = fs.readFileSync("../contracts/FullSmartDao.aes", encoding = "utf-8");
const DAO = fs.readFileSync("../contracts/FullDao.aes", encoding = "utf-8");
const Token = fs.readFileSync("../contracts/Token.aes", encoding = "utf-8");

const SECRET_KEY = 'eba8786a506fd20e8b00f117e6d6598fd0943ff3d0bd926aea5e1c35802ce36a54584dc898d97866e538fb8a6bfa26db4ea60d69c87c68949b4531078aab2ea2';

(async () => {
    const node = new Node('https://testnet.aeternity.io') // ideally host your own node
    const account = new MemoryAccount(SECRET_KEY)

    const aeSdk = new AeSdk({
        nodes: [{ name: 'testnet', instance: node }],
        accounts: [account],
        onCompiler: new CompilerHttp('https://v7.compiler.stg.aepps.com'), // ideally host your own compiler
    })
    await aeSdk.addAccount(account, { select: true });
    console.log("Compiling SmartDao...");
    const contract = await aeSdk.initializeContract({ sourceCode: SmartDao });
    const aci = await contract._aci
    fs.writeFileSync('../acis/SmartDao.json', JSON.stringify(aci));
    console.log("SmartDao ACI saved")
    console.log("Deploying SmartDao...")
    const smartdao = await contract.$deploy([])
    console.log("SmartDao deployed to", smartdao.address)
    console.log("Creating a dao...");
    const myDao = (await contract.createDAO("Hexdee DAO", "My personal DAO", "HXD", "https://twitter.com/i_am_hexdee", ["https://tse3.mm.bing.net/th?id=OIP.NtaJNxfrjFBLd5fNGM0-sgHaI5"], [], 100, { amount: 100 })).decodedResult;
    console.log({ myDao });
    console.log((await contract.getDAO("Hexdee DAO")).decodedResult);
    const daos = (await contract.getDAOs()).decodedResult;
    console.log({ daos });

    //DAO
    const daoContract = await aeSdk.initializeContract({ sourceCode: DAO });
    const daoACI = await daoContract._aci
    const daoInstance = await aeSdk.initializeContract({ aci: daoACI, address: daos[0].contractAddress })

    const proposalId = (await daoInstance.createProposal("transfer", "Pay Hexdee", "10", account.address)).decodedResult;
    console.log((await daoInstance.getProposal(proposalId)).decodedResult);
    const proposals = (await daoInstance.getProposals()).decodedResult;
    console.log({ proposals });

    await daoInstance.voteFor(proposalId);
    console.log((await daoInstance.getProposal(proposalId)).decodedResult);

    // Token
    // const tokenContract = await aeSdk.initializeContract({ sourceCode: Token });
    // const tokenAci = await tokenContract._aci
    // const tokenInstance = await aeSdk.initializeContract({ aci: tokenAci, address: daos[0].token })
    // console.log((await tokenInstance.balances()).decodedResult)

})();
