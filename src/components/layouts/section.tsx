import Mgt from "../../assets/icons/mgt.png";
import Governance from "../../assets/icons/governance.png";
import Verify from "../../assets/icons/verify.png";

const Section = () => (
    <div className="mt-32">
    <h1 className="font-gilroyBold text-xlll text-center" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
      DAO Build Differently
    </h1>

    <div className="flex items-center w-full mx-auto justify-between px-36" data-aos="zoom-in-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
      <img src={Mgt} alt="management" className="" />
      <div className="w-2/4">
        <h2 className="font-gilroyMd text-lx text-primary">
          Treasury Management
        </h2>
        <p className="text-normal w-4/5">
          Your DAO address can store fungible tokens, NFTs, and NEAR. It
          acts like any other wallet so you can do DeFi, ReFi, or use dApps
          as a group.
        </p>
      </div>
    </div>

    <div className="flex items-center w-full mx-auto justify-between px-36" data-aos="fade-down-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
      <div className="w-2/4">
        <h2 className="font-gilroyMd text-lx text-primary">
            Flexible Governance
        </h2>
        <p className="text-normal">
            Use groups to establish who can create proposals and who can vote on them. Add users to a group based on NFT ownership or any other on chain activity. Create a DAO with only other DAOs in voting seats or partner with other DAOs by adding each other as members.
        </p>
      </div>
      <img src={Governance} alt="management" className="" />
    </div>

    <div className="flex items-center w-full mx-auto justify-between px-36" data-aos="zoom-in-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
      <img src={Verify} alt="management" className="h-80" />
      <div className="w-2/4">
        <h2 className="font-gilroyMd text-lx text-primary">
            Verify Participants
        </h2>
        <p className="text-normal w-4/5">
            Optional soulbound KYC keeps your DAO operating within legal jurisdiction. Combine on and off chain activates to have a better picture of your contributors.
        </p>
      </div>
    </div>

    <div className="flex items-center w-full mx-auto justify-between px-36" data-aos="fade-down-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
      <div className="w-2/4">
        <h2 className="font-gilroyMd text-lx text-primary">
            Increase Engagement
        </h2>
        <p className="text-normal">
            Use groups to establish who can create proposals and who can vote on them. Add users to a group based on NFT ownership or any other on chain activity. Create a DAO with only other DAOs in voting seats or partner with other DAOs by adding each other as members.
        </p>
      </div>
      <img src={Governance} alt="management" className="" />
    </div>
  </div>
);

export default Section;