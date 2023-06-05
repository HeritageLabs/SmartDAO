/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { DAOS } from "../../utils/constants/pages";
import { ExternalLink } from "../common/ExternalLink.tsx";
import { UserContext } from "../../UserContext";
import { IContextType } from "../../types";
import PageLoader from "../PageLoader";
import { useNavigate } from "react-router-dom";

const AllDaos = () => {
  const [daos, setDaos] = useState<any>();
  const [allDaos, setAllDaos] = useState<any>();
  const { getDAOs, aeSdk, searchValue } = useContext(
    UserContext
  ) as IContextType;
  const navigate = useNavigate();

  const getAllDAOs = async () => {
    getDAOs().then((res: any) => {
      for (let i = 0; i < res.length; i++) {
        let dao = res[i];
        for (let key in dao) {
          if (typeof dao[key] == "bigint") {
            dao[key] = Number(dao[key]);
          }
        }
      }
      setAllDaos(res);
      setDaos(res);
    });
  };
  useEffect(() => {
    if (aeSdk) {
      getAllDAOs();
    }
  }, [aeSdk]);

  useEffect(() => {
    if (searchValue) {
      const filterDao = allDaos.filter((dao: any) =>
        dao?.name?.toLowerCase().includes(searchValue?.toLowerCase())
      );
      setDaos(filterDao);
    } else {
      setDaos(allDaos);
    }
  }, [searchValue]);

  return (
    <div>
      <>
        {daos?.length === 0 ? (
          <div className="w-full mx-auto flex justify-center items-center h-[50vh]">
            <div className="">
              <img src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1685382903/empty-folder_iscmxl.png" alt="" width={150} />
              <p className="text-grey">oops! No result shown</p>
            </div>
            </div>
        ) : (
          <div>
            {daos ? (
              <div className="flex flex-wrap w-full py-4 cursor-pointer justify-between px-12">
                {daos &&
                  daos?.map((dao: any) => (
                    <div
                      onClick={() => navigate(`${DAOS}/${dao.name}`)}
                      className="p-8 rounded-xl w-5/12 bg-white my-4"
                      style={{
                        boxShadow:
                          "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
                      }}
                      key={dao.name}
                    >
                      <div>
                        <div className="flex items-center">
                          <div className="flex">
                            <div className="h-14 w-14 rounded-full border border-grey flex items-center justify-center">
                              <img width={30} src={dao.image} alt="logo" />
                            </div>
                            <div className="ml-4">
                              <h1 className="font-gilroyBold text-bg text-lg">{`${dao.name[0].toUpperCase()}${dao.name.slice(
                                1
                              )}`}</h1>
                              <div className="flex items-center">
                                <p className="text-grey text-sm">{`${window.location.origin}${DAOS}/${dao.name}`}</p>
                                <ExternalLink url={dao.socials} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-6">
                          <p>{dao.description}</p>

                          <div className="flex px-3 my-11 justify-between">
                            <div className="text-center">
                              <p className="text-sm text-grey">DAO funds</p>
                              <p className="font-gilroyBold text-lg">
                                {(dao.balance / 1e18).toFixed(2)} AE
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-grey">
                                Member/Groups
                              </p>
                              <p className="font-gilroyBold text-lg">
                                {dao.members.length}/1
                              </p>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex items-center justify-center">
                              <h1 className="font-gilroyBold text-lx">
                                {dao.activeProposals}
                              </h1>
                              <p className="ml-2 text-lg">active proposal</p>
                            </div>
                            <p className="text-center text-gilroyBold text-grey text-sm">
                              {dao.proposals} proposals in total
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <PageLoader />
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default AllDaos;
