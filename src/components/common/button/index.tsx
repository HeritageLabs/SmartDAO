import { ReactNode } from "react";
import { Loader } from "../../../assets/svgs";

interface buttonProps {
  children: ReactNode;
  bg: string;
  isLoading: boolean;
  disabled: boolean;
  width: string;
  href: string;
  color: string;
}

const defaultProps: buttonProps = {
  children: "",
  bg: "bg-primary",
  isLoading: false,
  disabled: false,
  width: "fit-content",
  href: "",
  color: "white"
};

const CustomButton = ({ children, bg, isLoading, disabled, width, href, color }: buttonProps) => (
  <a href={href}>
    <button
      type="button"
      className={`${bg} px-4 py-3 rounded-lg hover:opacity-80 flex items-center trans disabled:opacity-50 w-${width} justify-center text-${color}`}
      disabled={disabled}
    >
      {isLoading && Loader}
      {children}
    </button>
  </a>
);

CustomButton.defaultProps = defaultProps;

export default CustomButton;
