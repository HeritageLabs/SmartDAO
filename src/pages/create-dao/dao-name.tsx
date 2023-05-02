import DaoInfoForm from "../../components/forms/CreateDaoForm";
import { CreateDaoLayout } from "../../components/layouts";

const CreateDaoName = () => {
  return (
    <CreateDaoLayout>
        <div
          className="p-8 rounded-xl bg-white shadow-card trans"
        >
          <DaoInfoForm />
        </div>
    </CreateDaoLayout>
  );
};

export default CreateDaoName;
