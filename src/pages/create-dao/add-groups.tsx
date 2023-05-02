import AddGroupsForm from "../../components/forms/CreateDaoForm/AddGroupsForm";
import { CreateDaoLayout } from "../../components/layouts";

const AddGroups = () => {
  return (
    <CreateDaoLayout>
        <div
          className="p-8 rounded-xl w-full bg-white trans shadow-card"
        >
          <AddGroupsForm />
        </div>
    </CreateDaoLayout>
  );
};

export default AddGroups;
