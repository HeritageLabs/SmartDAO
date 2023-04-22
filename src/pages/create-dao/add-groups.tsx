import AddGroupsForm from "../../components/forms/CreateDaoForm/AddGroupsForm";
import { FeedsLayout } from "../../components/layouts";

const AddGroups = () => {
  return (
    <FeedsLayout>
      <div className="px-16 pb-8">
        <div
          className="p-8 rounded-xl w-3/4 bg-white"
          style={{
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          }}
        >
          <AddGroupsForm />
        </div>
      </div>
    </FeedsLayout>
  );
};

export default AddGroups;
