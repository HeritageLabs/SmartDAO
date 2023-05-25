/* eslint-disable react/style-prop-object */
import { useNavigate } from "react-router-dom";
import { FeedsLayout } from "../components/layouts";
import CustomButton from "../components/common/button";
import { CREATE_DAO_URL } from "../utils/constants/pages";
import MyDaosOnly from "../components/daos/myDaosOnly";

const MyDao = () => {
  const navigate = useNavigate()
  return (
    <FeedsLayout>
      <p className="border-b-2 border-quaternary w-fit ml-8 font-gilroyMd text-quaternary">All My DAOs</p>
      <div className="h-px bg-[#EEEEEE]" />
      <div className="ml-8 pt-14 flex items-center w-3/12 justify-between">
        <h1>DAOs you're member of</h1>
      </div>
      <div className="mt-8">
        <MyDaosOnly />
      </div>
    </FeedsLayout>
  )
};

export default MyDao;
