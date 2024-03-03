import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import ServiceHero from "../components/ServiceHero";
import ServicePageCard from "../components/ServicePageCard";

const Service = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <ServiceHero />
      <h1 className="text-[40px] text-center xl:mt-[80px]">
        Our Best{" "}
        <span className="text-sky-500 font-bold">Selling Services</span>
      </h1>
      <ServicePageCard />
    </>
  );
};

export default Service;
