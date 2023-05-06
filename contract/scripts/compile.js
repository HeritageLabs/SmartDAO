const { AeSdk, Node, MemoryAccount, CompilerHttp } = require('@aeternity/aepp-sdk');
const fs = require("fs");

const Token = fs.readFileSync("../contracts/Token.aes", encoding = "utf-8");
const DAO = fs.readFileSync("../contracts/FullDao.aes", encoding = "utf-8")
const SmartDao = fs.readFileSync("../contracts/FullSmartDao.aes", encoding = "utf-8");


(async () => {
    const node = new Node('https://testnet.aeternity.io') // ideally host your own node

    const aeSdk = new AeSdk({
        nodes: [{ name: 'testnet', instance: node }],
        onCompiler: new CompilerHttp('https://v7.compiler.stg.aepps.com'), // ideally host your own compiler
    })
    console.log("Compiling contracts...");
    const token = await aeSdk.initializeContract({ sourceCode: Token });
    const dao = await aeSdk.initializeContract({ sourceCode: DAO })
    const smartDao = await aeSdk.initializeContract({ sourceCode: SmartDao });
    fs.writeFileSync('../acis/Token.json', JSON.stringify(token._aci));
    fs.writeFileSync('../acis/Dao.json', JSON.stringify(dao._aci));
    fs.writeFileSync('../acis/SmartDao.json', JSON.stringify(smartDao._aci));
    console.log("Contracts ACIs saved");
})();
