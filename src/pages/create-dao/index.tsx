import DaoInfoForm from "../../components/forms/CreateDaoForm";
import { FeedsLayout } from "../../components/layouts";

const CreateDao = () => {
    return (
        <FeedsLayout>
            <div className="px-16">
                <div className="p-8 rounded-xl w-3/4 bg-white my-4" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="font-gilroyBold text-gl">DAO name and purpose</h1>
                        <h1 className="font-gilroyMd text-lg">1/<span className="text-grey">4</span></h1>
                    </div>
                    <div>
                        <DaoInfoForm />
                    </div>
                </div>
            </div>
        </FeedsLayout>
    )
};

export default CreateDao;