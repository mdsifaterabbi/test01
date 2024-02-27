import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import Hero from "../components/Hero";
import {
  ServiceCard,
  ServiceCard2,
  ServiceCard3,
  ServiceCard4,
  ServiceCard5,
  ServiceCard6,
} from "../components/ServiceCard";
import TabContext from "../components/TabContext";

const Home = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <Hero />
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="basis-1/1 md:basis-1/2 flex justify-center items-center">
          <img src="../Arrow_2.png" alt="Arrow_2"></img>
        </div>
        <div className="basis-1/1 md:basis-1/2 text-center">
          <span className="text-[40px] pr-[5px]">Who</span>
          <span className="text-sky-500 text-[30px] pr-[5px]">We</span>
          <span className="text-sm text-[20px]">Are?</span>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] pb-[20px] px-[10px] sm:px-[10px] md:text-slate-600">
            eSaviour Limited is an industry leader in the digital marketing
            sector and offers B2B enterprises a wide range of services that help
            them dominate international markets
          </p>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] pb-[20px] px-[10px] sm:px-[10px] md:text-slate-600">
            Esaviour Limited is not just a service provider; we are your
            strategic ally in navigating the dynamic landscape of digital
            business. With a team of dedicated professionals, we bring a wealth
            of experience in diverse fields, including digital marketing, web
            development, and Amazon FBA consultancy.
          </p>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] px-[10px] sm:px-[10px] md:text-slate-600">
            Esaviour Limited is not just a service provider; we are your
            strategic ally in navigating the dynamic landscape of digital
            business. With a team of dedicated professionals, we bring a wealth
            of experience in diverse fields, including digital marketing, web
            development, and Amazon FBA consultancy.
          </p>
        </div>
      </div>
      {/* =======================  Why Choose Esaviour Limited to 
Builds Your Brand? =============================== */}
      <div className="my-[25px] text-center">
        <span className="">
          Why Choose Esaviour Limited to
          <span className=" text-sky-500 font-bold">
            <br></br> Builds Your Brand?
          </span>
        </span>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row">
        <div className="basis-1/1 sm:basis-1/2">
          <ServiceCard />
        </div>
        <div className="basis-1/1 sm:basis-1/2">
          <ServiceCard2 />
        </div>
        <div className="basis-1/1 sm:basis-1/2">
          <ServiceCard3 />
        </div>
        <div className="basis-1/1 sm:basis-1/2">
          <ServiceCard4 />
        </div>
        <div className="basis-1/1 sm:basis-1/2">
          <ServiceCard5 />
        </div>
        <div className="basis-1/1 sm:basis-1/2">
          <ServiceCard6 />
        </div>
      </div>
      {/* =============================Tab with Context change=============================== */}

      <TabContext />
    </>
  );
};

export default Home;
