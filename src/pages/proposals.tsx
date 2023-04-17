/* eslint-disable react/style-prop-object */
import Filters from "../components/common/filter";
import AllProposals from "../components/proposal/allProposals";
import { FeedsLayout } from "../components/layouts";

const Daos = () => (
    <FeedsLayout>
      <p className="border-b-2 border-quaternary w-fit ml-8 font-gilroyMd text-quaternary">My Feeds</p>
      <div className="h-px bg-[#EEEEEE]" />
      <div className="ml-8 pt-14">
        <Filters />
        <div className="mt-8">
          <AllProposals />
        </div>
      </div>
    </FeedsLayout>
);

export default Daos;
