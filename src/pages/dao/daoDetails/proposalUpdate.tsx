import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/common/button";
import { PROPOSALS } from "../../../utils/constants/pages";

interface IMessage {
    msgHeading: string;
    message: string;
}

const defaultProps: IMessage = {
    msgHeading: 'New Proposal Alert!',
    message: 'The proposed changes in DAO Config will affect the other proposals. Further updates might get rewritten if the current proposal won"t get resolved before.',
}

const ProposalUpdate = ({ msgHeading, message }: IMessage) => {
    const navigate = useNavigate();
    return (
        <div className="flex bg-primary my-8 rounded-lg w-full py-6 px-4 items-center justify-between">
            <div className="w-7/12 text-sm">
                <p className="font-gilroyMd text-dark text-lg">{msgHeading}</p>
                <p>{message}</p>
            </div>
            <CustomButton bg="bg-dark" color="primary" handleClick={() => { navigate(PROPOSALS) }}>View Proposal</CustomButton>
        </div>
    )
};

ProposalUpdate.defaultProps = defaultProps;

export default ProposalUpdate;