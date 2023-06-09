import FundGraph from "../fundGraph";

interface IFunds {

}

const Funds = ({ }: IFunds) => {
  return (
    <div className="w-4/6 rounded-lg shadow-medium py-7 p-2">
      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd">
          1W
        </div>
        <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd ml-2">
          1M
        </div>
        <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd ml-2">
          1Y
        </div>
        <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd ml-2">
          ALL
        </div>
      </div>
      <FundGraph />
    </div>
  );
};

export default Funds;

