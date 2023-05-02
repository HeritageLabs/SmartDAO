import ProposalCreationForm from "../../components/forms/CreateDaoForm/ProposalCreationForm";
import { CreateDaoLayout } from "../../components/layouts";

const ProposalCreation = () => {
  return (
    <CreateDaoLayout>
        <div
          className="p-8 rounded-xl w-full bg-white trans shadow-card"
        >
          <ProposalCreationForm />
        </div>
    </CreateDaoLayout>
  );
};

export default ProposalCreation;
