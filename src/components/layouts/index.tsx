import { ReactNode } from "react";
import Navbar from "../nav";
import AuthNav from "../nav/authNav";
import SideBar from "../sidebar";
import Stages from "./stages";

interface layoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: layoutProps) => (
  <div className="bg-bg text-lightGrey">
    <Navbar />
    <div className="pt-28 px-20">{children}</div>
  </div>
);

export const FeedsLayout = ({ children }: layoutProps) => (
  <div className=" text-dark">
    <AuthNav />
    <div className="flex pt-16 px-12 w-full">
      <SideBar />
      <div className="w-full ml-72 mt-16 oveflow-scroll">
        {children}
      </div>
    </div>
  </div>
);

export const CreateDaoLayout = ({ children }: layoutProps) => (
  <div className=" text-dark">
    <AuthNav />
    <div className="flex pt-16 px-12 w-full">
      <SideBar />
      <div className="w-full ml-72 my-16 oveflow-scroll flex justify-between">
        <div className="w-8/12 pl-12">{children}</div>
        <div className="w-3/12">
          <Stages />
        </div>
      </div>
    </div>
  </div>
);
