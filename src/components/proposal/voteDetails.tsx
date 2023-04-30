import { CheckMark, LikeIcon } from "../../assets/svgs";

const VoteDetails = () => (
  <div>
    <h1 className="font-gilroyMd text-lx">Votes</h1>
    <div>
      <div className="flex items-center">
        <div className="bg-primary rounded-full h-8 w-9 items-center justify-center flex">
          {CheckMark}
        </div>
        <div className="flex items-center bg-[#F4FFF1] border h-8 w-9 rounded-full border-quaternary hover:bg-light trans">
          {LikeIcon}
        </div>
        <div className="w-full border-grey border-dotted border"></div>
        <div className="bg-primary rounded-full h-8 w-9" />
      </div>
    </div>
    <div className="flex m-8 items-center w-full">
        <div className="flex items-cneter">
            <div className="bg-[#F4FFF1] px-2 py-px rounded-full text-dark font-gilroyBold"><p>Council</p></div>
            <div className="h-5 w-px bg-grey mx-5" />
            <p className="text-sm">1/2 voices</p>
            <div className="h-5 w-px bg-grey mx-5" />
            <p className="text-sm font-gilroyBold">50%</p>
        </div>
        <div>

<div className="w-full bg-dark rounded-full h-3">
  {/* <div className={`bg-quaternary h-2.5 rounded-full w-[${30}]`} style={{ width: '45%' }}></div> */}
</div>

        </div>
    </div>
  </div>
);

export default VoteDetails;
