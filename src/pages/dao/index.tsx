/* eslint-disable react/style-prop-object */
import { FeedsLayout } from "../../components/layouts";
import AllDaos from "../../components/daos/allDaos";

const Feeds = () => {
  return (
    <FeedsLayout>
      <p className="border-b-2 border-quaternary w-fit ml-8 font-gilroyMd text-quaternary">My Feeds</p>
      <div className="h-px bg-[#EEEEEE]" />
      <div className="ml-8 pt-14 flex items-center w-3/12 justify-between">
        <h1>All DAOs</h1>
      </div>
      <div className="mt-8">
        <AllDaos />
      </div>
    </FeedsLayout>
  );
};

export default Feeds;
