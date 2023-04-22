/* eslint-disable react/style-prop-object */
import AllDaos from "../components/daos/allDaos";
import { FeedsLayout } from "../components/layouts";
import AllProposals from "../components/proposal/allProposals";

const Feeds = () => {
return (
    <FeedsLayout>
      <p className="border-b-2 border-quaternary w-fit ml-8 font-gilroyMd text-quaternary">My Feeds</p>
      <div className="h-px bg-[#EEEEEE]" />
        <div className="mt-8">
          <AllProposals />
        </div>
        <div className="mt-8">
          <AllDaos />
        </div>
    </FeedsLayout>
);
};

export default Feeds;
