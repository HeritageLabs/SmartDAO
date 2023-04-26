import { ReactElement, ReactNode, useState } from "react";
import { SettingsIcon } from "../../../assets/svgs";

interface props {
    children: ReactNode;
    icon: ReactElement;
};

const initialProps: props = {
  children: '',
  icon: SettingsIcon,
};

const DropdownMenu = ({ children, icon }: props) => {
  const [showEl, setShowEl] = useState(false);

  return (
    <div 
        onMouseEnter={() => setShowEl(true)} 
        onMouseLeave={() => setShowEl(false)}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        className="hover:bg-[#CDFFC0] px-2 py-2 rounded-full"
      >
        {icon}
      </button>
      <div
        id="dropdown"
        className={`z-10 ${
          showEl ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
            {children}
        </ul>
      </div>
    </div>
  );
};

DropdownMenu.defaultProps = initialProps

export default DropdownMenu;
