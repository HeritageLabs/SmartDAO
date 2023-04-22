/* eslint-disable react/style-prop-object */
import CustomButton from "../components/common/button";
import { FeedsLayout } from "../components/layouts";
import AllDaos from "../components/daos/allDaos";
import { CREATE_DAO_URL } from "../utils/constants/pages";

const Feeds = () => (
    <FeedsLayout>
      <p className="border-b-2 border-quaternary w-fit ml-8 font-gilroyMd text-quaternary">My Feeds</p>
      <div className="h-px bg-[#EEEEEE]" />
      <div className="ml-8 pt-14 flex items-center w-3/12 justify-between">
        <h1>All DAOs</h1>
        <CustomButton bg="bg-bg" href={CREATE_DAO_URL}>Create new DAO</CustomButton>
      </div>
        <div className="mt-8 ml-8">
          <AllDaos />
        </div>
    </FeedsLayout>
);

export default Feeds;
