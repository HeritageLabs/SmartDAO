const { AeSdk, Node, MemoryAccount, CompilerHttp } = require('@aeternity/aepp-sdk');
const fs = require("fs");

const SmartDao = fs.readFileSync("../contracts/FullSmartDao.aes", encoding = "utf-8")

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
})();
