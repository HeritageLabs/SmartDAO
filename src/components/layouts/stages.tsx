import { DaoCreationStage, IDaoCreationStage } from "../../pages/create-dao/data";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { useNavigate } from "react-router-dom";

const Stages = () => {
    const { pathname } = useCurrentLocation();
    const navigate = useNavigate();
    return (
        <div className="fixed">
            <p className="mb-6">Where you are currently,</p>
            {DaoCreationStage.map((stage: IDaoCreationStage) => (
                <div onClick={() => { navigate(stage.url) }} key={stage.title} className="flex cursor-pointer">
                    <div className="">
                        <div className={`w-9 h-8 rounded-full bg-${pathname === stage.url ? 'quaternary' : 'grey'} text-white flex items-center justify-center font-gilroyBold trans`}>{stage.no}</div>
                        <div className={`h-10 border trans border-grey border-dashed w-px mx-auto my-3 ${DaoCreationStage[DaoCreationStage.length - 1].url === stage.url ? 'hidden' : 'flex'}`}></div>
                    </div>
                    <p className={`trans text-${pathname === stage.url ? 'dark font-gilroyMd' : 'grey font-gilroyLight'} ml-6 mt-1.5 text-normal`}>{stage.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Stages;