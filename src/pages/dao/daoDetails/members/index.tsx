import { useContext } from "react";
import { IContextType } from "../../../../types";
import DaoDetails from "../details";
import { UserContext } from "../../../../UserContext";

const DaoDetailsMembers = () => {
    const { allDaoMembers } = useContext(UserContext) as IContextType;
    console.log(allDaoMembers);
  return (
    <DaoDetails hasProposal={false}>
      <div className="w-4/6 rounded-lg shadow-medium py-7 px-4">
        <p className="font-gilroyBold">All members</p>
        {allDaoMembers.map((member, index) => (
            <div className="p-3 border rounded my-2 border-grey flex">
                <p className="mr-2 text-grey">{index + 1}.</p>
                <p>{member}</p>
            </div>
        ))}
      </div>
    </DaoDetails>
  );
};

export default DaoDetailsMembers;
