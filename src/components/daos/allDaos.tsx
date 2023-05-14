import { useContext, useEffect, useState } from "react";
import { DAOS } from "../../utils/constants/pages";
import { ExternalLink } from "../common/ExternalLink.tsx";
import { AllDaosData } from "./data";
import { UserContext } from "../../UserContext";
import { IContextType } from "../../types";


const AllDaos = () => {
    const [daos, setDaos] = useState<any>();
    const { getDAOs, aeSdk } = useContext(UserContext) as IContextType;

    const getAllDAOs = async () => {
        getDAOs().then((res: any) => {
            console.log(res)
            for (let i = 0; i < res.length; i++) {
                let dao = res[i];
                for (let key in dao) {
                    if (typeof dao[key] == "bigint") {
                        dao[key] = Number(dao[key]);
                    }
                }
            }
            setDaos(res);
        })
    }
    useEffect(() => {
        if (aeSdk) {
            getAllDAOs();
        }
    }, [aeSdk]);
    return (
        <div className="flex flex-wrap w-full py-4 cursor-pointer justify-between px-12">
            {daos && daos.map((dao: any) => (
                <a href={`${DAOS}/${dao.name}`} className="p-8 rounded-xl w-5/12 bg-white my-4" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }} key={dao.name}>
                    <div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="h-20 w-20 rounded-full border border-grey flex items-center justify-center">
                                    <img width={40} src={dao.image} alt="logo" />
                                </div>
                                <div className="ml-4">
                                    <h1 className="font-gilroyBold text-bg text-xl">{`${dao.name[0].toUpperCase()}${dao.name.slice(1)}`}</h1>
                                    <p className="text-grey text-normal">{`${window.location.origin}${DAOS}/${dao.name}`}</p>
                                </div>
                            </div>
                            <ExternalLink url={dao.socials} />
                        </div>
                        <div className="my-6">
                            <p>{dao.description}</p>

                            <div className="flex px-3 my-11 justify-between">
                                <div className="text-center">
                                    <p className="text-sm text-grey">DAO funds</p>
                                    <p className="font-gilroyBold text-lg">{(dao.balance / 1e18).toFixed(2)} AE</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-grey">Memeber/Groups</p>
                                    <p className="font-gilroyBold text-lg">{dao.members.length}/1</p>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex items-center justify-center">
                                    <h1 className="font-gilroyBold text-lx">{dao.activeProposals}</h1>
                                    <p className="ml-2 text-lg">active proposal</p>
                                </div>
                                <p className="text-center text-gilroyBold text-grey text-sm">{dao.proposals} proposals in total</p>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
};

export default AllDaos;
