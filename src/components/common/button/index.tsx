import { ReactNode } from "react";
import { Loader } from "../../../assets/svgs";
import { useNavigate } from "react-router-dom";

interface buttonProps {
  children: ReactNode;
  bg: string;
  isLoading: boolean;
  disabled: boolean;
  width: string;
  href: string;
  color: string;
  handleClick: (arg0: any) => any;
  borderColor: string;
}

const defaultProps: buttonProps = {
  children: "",
  bg: "bg-primary",
  isLoading: false,
  disabled: false,
  width: "w-fit-content",
  href: "#",
  color: "white",
  handleClick: (e) => { },
  borderColor: 'border-none'
};

const  CustomButton = ({ children, bg, isLoading, disabled, width, href, color, handleClick, borderColor }: buttonProps) => {
  const navigate = useNavigate();

  return (
    // <div onClick={() => { navigate(href) }} className="flex justify-center">
    <div className="flex justify-center">
      <button
        type="button"
        className={`${bg} px-4 py-3 rounded-lg hover:opacity-80 flex items-center trans disabled:opacity-50 disabled:cursor-not-allowed ${width} justify-center text-${color} border ${borderColor}`}
        disabled={disabled}
        onClick={handleClick}
      >
        {isLoading && Loader}
        {children}
      </button>
    </div>
  )
};

CustomButton.defaultProps = defaultProps;

export default CustomButton;
