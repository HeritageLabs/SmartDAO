import React from "react";
import Loading from "../../assets/svgs/page-loader.svg";

interface PageLoaderProp {
  loaderText: string;
}

const defaultProps: PageLoaderProp = {
  loaderText: "Loading page...",
};

const PageLoader = ({ loaderText }: PageLoaderProp) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <div className="flex flex-col gap-[5px] items-center">
        <div>
          <img src={Loading} width="70px" alt="gear spinning icon" />
        </div>
        <span className="font-bold text-[22px] text-white">
          {loaderText || "Loading page..."}
        </span>
      </div>
    </div>
  );
};

PageLoader.defaultProps = defaultProps;

export default PageLoader;
