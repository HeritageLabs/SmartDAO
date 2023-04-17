import { ExternalLink } from "../common/ExternalLink.tsx";
import { AllDaosData } from "./data";

const AllDaos = () => (
    <div className="flex flex-wrap w-full py-4 cursor-pointer justify-between px-12">
        {AllDaosData.map((dao) => (
            <div className="p-8 rounded-xl w-5/12 bg-white my-4" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }} key={dao.id}>
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="h-20 w-20 rounded-full border border-grey flex items-center justify-center">
                            <img width={40} src={dao.img} alt="logo" />
                        </div>
                        <div className="ml-4">
                            <h1 className="font-gilroyBold text-bg text-xl">CarsMart</h1>
                            <p className="text-grey text-normal">{dao.dao_url}</p>
                        </div>
                    </div>
                    <ExternalLink url={dao.dao_addr} />
                </div>
                <div className="my-6">
                    <p>The DAO was created to secure investments in advanced space exploration.</p>

                    <div className="flex px-3 my-11 justify-between">
                        <div className="text-center">
                            <p className="text-sm text-grey">DAO funds</p>
                            <p className="font-gilroyBold text-lg">{dao.dao_funds}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-grey">Memeber/Groups</p>
                            <p className="font-gilroyBold text-lg">{dao.dao_member}/1</p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="flex items-center justify-center">
                            <h1 className="font-gilroyBold text-lx">{dao.dao_total}</h1>
                            <p className="ml-2 text-lg">active proposal</p>
                        </div>
                        <p className="text-center text-gilroyBold text-grey text-sm">{dao.active_dao} proposals in total</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default AllDaos;
