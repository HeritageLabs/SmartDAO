import { ReactNode } from "react";
import Navbar from "../nav";
import AuthNav from "../nav/authNav";
import SideBar from "../sidebar";

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
    <div className="flex pt-16 px-12">
      <SideBar />
      <div className="w-4/5 ml-72 mt-16 oveflow-scroll">{children}</div>
    </div>
  </div>
);
