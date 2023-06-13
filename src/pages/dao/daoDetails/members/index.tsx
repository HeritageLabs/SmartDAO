import { PeopleIcon } from "../../../../assets/svgs";

interface IDaoMembers {
  members: string[]
}


const DaoMembers = ({ members }: IDaoMembers) => {
  return (
    <div className="w-4/6 rounded-lg shadow-medium py-7 px-4">
      <p className="font-gilroyBold">All members</p>
      {members.map((member, index) => (
        <div className="p-3 border rounded my-2 border-grey flex items-center">
          <p className="mr-2 text-grey">{PeopleIcon}</p>
          <p>{member}</p>
        </div>
      ))}
    </div>
  );
};

export default DaoMembers;
