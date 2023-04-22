import { useEffect, useState } from "react";
import TextInput from "../../common/input/TextInput";

const DaoInfoForm = () => {
    const [daoName, setDaoName] = useState<string>('');
    const [daoAddress, setDaoAddress] = useState<string>(`${daoName}.smartdaov2.testnet`);
    useEffect(() => {
        setDaoAddress(`${daoName}.smartdaov2.testnet`)
    }, [daoName]);
    return (
        <div>
            <TextInput label="DAO name:" placeholder="Enter DAO name" onChange={(e) => setDaoName(e.target.value)} value={daoName} />
            <TextInput label="DAO Address (auto filled):" placeholder="Enter DAO name" value={daoAddress} onChange={(e) => setDaoAddress(e.target.value)} />
        </div>
    )
};

export default DaoInfoForm;