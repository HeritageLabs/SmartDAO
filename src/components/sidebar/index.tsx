import useCurrentLocation from "../../hooks/useCurrentLocation";
import { CREATE_DAO_URL } from "../../utils/constants/pages";
import { Creation, SidebarLinks } from "./data";

const SideBar = () => {
  const { pathname } = useCurrentLocation();
  return (
    <div className="border-r border-[#EEEEEE] text-normal h-screen w-1/5 fixed">
      <div className="px-4 pt-8">
        {SidebarLinks.map((sidebar) => (
          <a href={sidebar.url} key={sidebar.title}>
            <div
              className={`flex py-2 hover:bg-[#F4FFF1] px-4 border cursor-pointer w-56 hover:border rounded-lg trans my-4 hover:text-quaternary items-center ${
                pathname === sidebar.url || pathname.includes(sidebar.url)
                  ? "bg-[#F4FFF1] border border-quaternary text-quaternary"
                  : "border-lightGrey"
              }`}
              key={sidebar.title}
            >
              {(pathname === sidebar.url || pathname.includes(sidebar.url)) ? sidebar.activeIcon : sidebar.icon}
              <p className="ml-4 font-gilroyMd">{sidebar.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="h-px bg-[#EEEEEE] my-4" />
      <div className="px-4">
        {Creation.map((create) => (
          <a href={CREATE_DAO_URL} key={create.title}>
            <div
              className={`flex py-2 hover:bg-[#F4FFF1] px-4 border cursor-pointer w-56 hover:border rounded-lg trans my-4 hover:text-quaternary items-center ${
                pathname === create.url || pathname.includes(create.url)
                  ? "bg-[#F4FFF1] border border-quaternary text-quaternary"
                  : "border-lightGrey"
              }`}
              key={create.title}
            >
              <div className={`rounded border p-1 ${pathname === create.url || pathname.includes(create.url) ? 'border-quaternary' : 'border-grey'}`}>
                {create.icon}
              </div>
              <p className="ml-4 font-gilroyMd">{create.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
