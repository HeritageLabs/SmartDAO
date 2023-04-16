import { ReactNode } from "react";
import { Loader } from "../../../assets/svgs";

interface buttonProps {
  children: ReactNode;
  bg: string;
  isLoading: boolean;
  disabled: boolean;
  width: string;
}

const defaultProps: buttonProps = {
  children: "",
  bg: "bg-primary",
  isLoading: false,
  disabled: false,
  width: "fit-content"
};

const CustomButton = ({ children, bg, isLoading, disabled, width }: buttonProps) => (
  <button
    type="button"
    className={`${bg} px-4 py-3 rounded-lg hover:bg-[#FF4F5F] flex items-center trans disabled:opacity-50 w-${width} justify-center`}
    disabled={disabled}
  >
    {isLoading && Loader}
    {children}
  </button>
);

CustomButton.defaultProps = defaultProps;

export default CustomButton;
