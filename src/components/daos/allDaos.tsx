/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { DAOS } from "../../utils/constants/pages";
import { ExternalLink } from "../common/ExternalLink.tsx";
import { UserContext } from "../../UserContext";
import { IContextType } from "../../types";
import PageLoader from "../PageLoader";
import { useNavigate } from "react-router-dom";

const AllDaos = () => {
  const { daos } = useContext(
    UserContext
  ) as IContextType;
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log({ daos })
  // }, [daos]);

  return (
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
  );
};

export default AllDaos;
