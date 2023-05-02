import SocialsInfoForm from "../../components/forms/CreateDaoForm/Socials";
import { CreateDaoLayout } from "../../components/layouts";

const CreateDao = () => {
  return (
    <CreateDaoLayout>
        <div
          className="p-8 rounded-xl w-full bg-white trans shadow-card"
        >
          <SocialsInfoForm />
        </div>
    </CreateDaoLayout>
  );
};

export default CreateDao;
