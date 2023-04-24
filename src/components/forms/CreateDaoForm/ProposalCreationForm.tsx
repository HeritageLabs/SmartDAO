import { ProposalCreationData } from "../../../utils/constants/data";
import { CREATE_DAO_URL_ADD_GROUPS, CREATE_DAO_URL_CHECKOUT } from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import CreateDaoHeader from "./CreateDaoheader";

const ProposalCreationForm = () => {
  return (
    <div className="w-full">
      <form className="w-full">
        <CreateDaoHeader header="Proposal Creation" currentStage="4" hasStage />
        <p className="-mt-5 text-normal text-grey mb-8">Choose what creation rights you give DAO groups. This can be changed in settings later</p>

        <div className="relative overflow-x-auto mb-9">
          <table className="w-full text-sm text-left">
            <thead className="text-xs font-gilroyBold bg-[#F4FFF1]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  
                </th>
                <th scope="col" className="px-6 py-3">
                  All
                </th>
                <th scope="col" className="px-6 py-3">
                  Council
                </th>
              </tr>
            </thead>
            <tbody>
              {ProposalCreationData.map((create) => (                
                <tr className="bg-light" key={create.th}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium flex"
                  >
                    <div className="mr-1">{create.thIcon}</div>
                    {create.th}
                  </th>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" disabled />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CreateDaoHeader header="Voting Permissions" currentStage="5" />
        <p className="-mt-5 text-normal text-grey mb-8">Choose what voting rights you give DAO groups.</p>

        <div className="relative overflow-x-auto mb-9">
          <table className="w-full text-sm text-left">
            <thead className="text-xs font-gilroyBold bg-[#F4FFF1]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  
                </th>
                <th scope="col" className="px-6 py-3">
                  All
                </th>
                <th scope="col" className="px-6 py-3">
                  Council
                </th>
              </tr>
            </thead>
            <tbody>
              {ProposalCreationData.map((create) => (                
                <tr className="bg-light" key={create.th}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium flex"
                  >
                    <div className="mr-1">{create.thIcon}</div>
                    {create.th}
                  </th>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" disabled />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between w-full">
          <div className="w-2/5">
            <CustomButton
              borderColor="border-grey"
              color="grey3"
              bg="bg-none"
              width="w-full"
              href={CREATE_DAO_URL_ADD_GROUPS}
            >
              Back
            </CustomButton>
          </div>
          <div className="w-2/5">
            <CustomButton
              bg="bg-quaternary"
              width="w-full"
              href={CREATE_DAO_URL_CHECKOUT}
            >
              Next
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProposalCreationForm;
