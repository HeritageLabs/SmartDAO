import CustomButton from "../../../components/common/button";
import { PROPOSALS } from "../../../utils/constants/pages";

const ProposalUpdate = () => {
    return (
        <div className="flex bg-primary mt-8 rounded-lg w-full py-6 px-4 items-center justify-between">
            <div className="w-7/12 text-sm">
                <p className="font-gilroyMd text-dark text-lg">New Proposal Alert!</p>
                <p>The proposed changes in DAO Config will affect the other proposals. Further updates might get rewritten if the current proposal won't get resolved before.</p>
            </div>
            <CustomButton bg="bg-dark" color="primary" href={PROPOSALS}>View Proposal</CustomButton>
        </div>
    )
};

export default ProposalUpdate;