// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ReactNode, useContext, useEffect, useState } from "react";
import NewProposalTemp from "../../../components/common/newProposalTemp";
import { FeedsLayout } from "../../../components/layouts";
import { SideBar } from "./data";
import DetailsNav from "./detailsNav";
import ProposalUpdate from "./proposalUpdate";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import { IContextType } from "../../../types";
import PageLoader from "../../../components/PageLoader";
import AllProposals from "../../../components/proposal/allProposals";

interface IDaoDetails {
  children: ReactNode;
  hasProposal: boolean;
}

const DaoDetails = ({ children, hasProposal }: IDaoDetails) => {
  const navigate = useNavigate();
  const { daoId } = useParams();
  const [dao, setDao] = useState<any>();
  const [enableCreateProposal, setEnableCreateProposal] = useState(false);
  const { getDAO, aeSdk, amoutDonated, handleSetAllDaoMembers } = useContext(UserContext) as IContextType;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    daoId &&
      getDAO(daoId)
        .then((res: any) => {
          setDao(res);
          SideBar[0].value = (Number(res.balance) / 1e18).toFixed(2) + "AE";
          SideBar[1].value = Number(res.activeProposals).toString();
          SideBar[2].value = Number(res.proposals).toString();
          setIsLoading(false);
          handleSetAllDaoMembers(res?.members);
        })
        .catch((error) => {
          if (error.name === "NodeInvocationError") navigate("/daos");
          setIsLoading(false);
        })
  }, [aeSdk, amoutDonated]);

  return isLoading ? (
    <PageLoader />
  ) : (
    <FeedsLayout>
      {dao ? (
        <DetailsNav setEnableCreateProposal={setEnableCreateProposal} dao={dao}>
          {enableCreateProposal && (
            <NewProposalTemp dao={dao.contractAddress} />
          )}
          {hasProposal && (<ProposalUpdate />)}
          <div className="flex justify-between mb-8">
            {children}
            <div className="w-4/12 ml-8">
              {SideBar.map((val) => (
                <div
                  className="px-4 py-5 shadow-medium rounded-lg cursor-pointer mb-7 hover:border hover:border-grey border border-white trans"
                  key={val.title}
                >
                  <div className="flex justify-between text-sm">
                    <p className="text-grey">{val.title}</p>
                    <p className="text-quaternary font-gilroyMd">
                      {val.percent}%
                    </p>
                  </div>
                  <h2 className="font-gilroyBold mt-2">{val.value}</h2>
                </div>
              ))}
            </div>
          </div>
          <AllProposals dao={dao} />
        </DetailsNav>
      ) : (
        <PageLoader />
      )}
    </FeedsLayout>
  );
};

export default DaoDetails;
