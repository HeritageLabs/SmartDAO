import { ReactElement } from "react";
import CustomButton from "../button";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

type ICard = {
  color: string;
  title: string;
  desc: string;
  icon: ReactElement;
  url: string;
  disable:boolean;
};

const SelectTemplateCard = ({ ...prop }: ICard) => {
  const navigate = useNavigate();
  const { setLocalStorage } = useLocalStorage();
  const handleClick = (type: string, url: string) => {
    setLocalStorage({ key: 'dao_type', value: type });
    navigate(url);
  }
return(
  <div className="shadow-card border border-lightBlue rounded-lg w-[280px] p-4 mr-2 hover:shadow-extra trans cursor-pointer mt-6">
    <div className={`py-5 ${prop.color} rounded-lg`}>{prop.icon}</div>
    <div className="my-5">
      <p className="font-gilroyBold text-lg">{prop.title}</p>
      <p className="text-sm my-2">{prop.desc}</p>
    </div>
    <div className="w-full my-2">
      <CustomButton width="w-full" bg={`${prop.color}`} handleClick={() => handleClick(prop.title, prop.url)} disabled={prop.disable}>
        Proceed
      </CustomButton>
    </div>
  </div>
);
};

export default SelectTemplateCard;
