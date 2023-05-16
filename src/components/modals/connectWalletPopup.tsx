/* eslint-disable jsx-a11y/anchor-is-valid */
import { closeModal, CoinbaseLogo, MetamaskLogo } from "../../assets/svgs";

interface props {
  setOpenModal: (arg0: boolean) => void;
  handleMetamaskConnect: () => void;
}

const ConnectWalletPopup = ({ setOpenModal, handleMetamaskConnect: handleSuperHeroConnect }: props) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-[#000000] opacity-70"
          onClick={() => setOpenModal(false)}
        ></div>
        <div
          className="flex items-center min-h-screen px-4 py-8"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex justify-between items-center">
              <p className="font-gilroyBold text-md">Connect Wallet</p>
              <div
                className="cursor-pointer border w-10 h-10 border-quaternary rounded-lg text-quaternary hover:bg-quaternary hover:text-white flex items-center trans"
                onClick={() => setOpenModal(false)}
              >
                {closeModal}
              </div>
            </div>
            <div className="h-px bg-[#EEEEEE] my-4" />
            <div>
              <p className="text-normal text-grey">
                Connect with one of our available wallet providers or create a
                new one.
              </p>
            </div>
            <ul className="my-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-[#F4FFF1] hover:bg-grey-100 group hover:shadow-md dark:bg-gray dark:hover:bg-grey dark:text-white trans"
                  onClick={handleSuperHeroConnect}
                >
                  {/* {MetamaskLogo} */}
                  <span className="flex-1 ml-3 whitespace-nowrap font-gilroyBold">
                    Superhero Wallet
                  </span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-medium text-white bg-quaternary rounded">
                    Popular
                  </span>
                </a>
              </li>

              {/* <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-[#F4FFF1] hover:bg-grey-100 group hover:shadow-md dark:bg-gray dark:hover:bg-grey dark:text-white trans"
                >
                  {CoinbaseLogo}
                  <span className="flex-1 ml-3 whitespace-nowrap font-gilroyBold">
                    Coinbase Wallet
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWalletPopup;
