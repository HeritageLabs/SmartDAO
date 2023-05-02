import { ReactElement } from "react";
import CustomButton from "../button";

type ICard = {
  color: string;
  title: string;
  desc: string;
  icon: ReactElement;
  url: string;
};

const SelectTemplateCard = ({ ...prop }: ICard) => (
  <div className="shadow-card border border-lightBlue rounded-lg w-[280px] p-4 mr-2 hover:shadow-extra trans cursor-pointer mt-6">
    <div className={`py-5 bg-${prop.color} rounded-lg`}>{prop.icon}</div>
    <div className="my-5">
      <p className="font-gilroyBold text-lg">{prop.title}</p>
      <p className="text-sm my-2">{prop.desc}</p>
    </div>
    <div className="w-full my-2">
      <CustomButton width="w-full" href={prop.url} bg={`bg-${prop.color}`}>
        Proceed
      </CustomButton>
    </div>
  </div>
);

export default SelectTemplateCard;
