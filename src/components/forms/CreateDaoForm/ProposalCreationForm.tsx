import {
  CREATE_DAO_URL_ADD_GROUPS,
} from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import CreateDaoHeader from "./CreateDaoheader";

const ProposalCreationForm = () => {

  return (
    <div className="w-full">
      <form className="w-full">
        <CreateDaoHeader header="Proposal Creation" currentStage="4" />


        <div className="flex justify-between w-full">
          <div className="w-2/5">
            <CustomButton
              borderColor="border-grey"
              color="gray"
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
              href={CREATE_DAO_URL_ADD_GROUPS}
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
