/* eslint-disable react/style-prop-object */
import { BackgroundIcon } from "../components/common/BacgroundVector";
import CustomButton from "../components/common/button";
import Footer from "../components/footer";
import AuthLayout from "../components/layouts";
import Section from "../components/layouts/section";

const Home = () => (
  <div>
    <AuthLayout>
      <BackgroundIcon right="right-0" />
      <BackgroundIcon left="left-0" />
      <main className="block text-center" data-aos="zoom-out-up" data-aos-duration="3000">
        <div className="w-full">
          <h1 className="font-gilroyMd text-xxxl w-1/2 mx-auto">
            Organizational Operating System
          </h1>
          <p className="text-normal w-1/2 mx-auto mt-4">
            SmartDAO is home to hundreds of Decentralized Autonomous
            Organizations on NEAR Protocol. Start earning by contributing your
            skills or supercharge your own community with the power of web3.
          </p>
          <div className="mt-8 w-1/2 mx-auto relative">
            <CustomButton width="full">Launch App</CustomButton>
          </div>
        </div>
      </main>
      <section>
        <div className="flex mt-36 text-center items-center justify-between w-3/4 mx-auto">
          <div>
            <p className="font-gilroyBold text-xll">95</p>
            <p>Total DAOs</p>
          </div>
          <div className="h-16 w-px bg-white opacity-40"></div>
          <div>
            <p className="font-gilroyBold text-xll">50</p>
            <p>Total Proposals</p>
          </div>
          <div className="h-16 w-px bg-white opacity-40"></div>
          <div>
            <p className="font-gilroyBold text-xll">203+</p>
            <p>Active People</p>
          </div>
        </div>
      </section>
      <section>
        <Section />
      </section>
    </AuthLayout>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Home;
