import { useContext } from "react";
import { IContextType } from "../../../../types";
import DaoDetails from "../details";
import { UserContext } from "../../../../UserContext";
import { PeopleIcon } from "../../../../assets/svgs";

const DaoDetailsMembers = () => {
    const { allDaoMembers } = useContext(UserContext) as IContextType;
  return (
    <DaoDetails>
      <div className="w-4/6 rounded-lg shadow-medium py-7 px-4">
        <p className="font-gilroyBold">All members</p>
        {allDaoMembers.map((member, index) => (
            <div className="p-3 border rounded my-2 border-grey flex items-center">
                <p className="mr-2 text-grey">{PeopleIcon}</p>
                <p>{member}</p>
            </div>
        ))}
      </div>
    </DaoDetails>
  );
};

export default DaoDetailsMembers;
