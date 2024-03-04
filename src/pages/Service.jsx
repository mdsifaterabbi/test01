import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import ServiceHero from "../components/ServiceHero";
import ServiceTemplate from "../components/ServicePageComponents/ServiceTemplate";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";

const Service = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <ServiceHero />
      <h1 className="text-[22px] mt-[30px] xl:text-[40px] text-center xl:mt-[80px] mb-[20px]">
        Our Best
        <span className="text-sky-500 font-bold">&nbsp;Selling Services</span>
      </h1>
      <ServiceTemplate />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Service;
