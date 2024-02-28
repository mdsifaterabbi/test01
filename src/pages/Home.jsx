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
import BrandSlider from "../components/BrandSlider";
import CreativeSlider from "../components/CreativeSlider";
import CreativeSliderSM from "../components/CreativeSliderSM";
import ClientsComments from "../components/ClientsComments";
import ClientsCommentsSM from "../components/ClientsCommentsSM";
import ClientsCommentsMD from "../components/ClientsCommentsMD";
import TabContextSM from "../components/TabContextSM";
import TabContextMD from "../components/TabContextMD";
import Footer1 from "../components/Footer1";

const Home = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <Hero />
      {/* ========================== section 3 starts from here ============================ */}
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
      {/* ========================== section 3 ended  here ============================ */}
      {/* ================== section 4 starts from here =================================*/}
      <div className="sm:hidden">
        <TabContext />
      </div>
      <div className="hidden sm:block md:hidden">
        <TabContextSM />
      </div>
      <div className="hidden md:block">
        <TabContextMD />
      </div>

      {/* ================== section 4 ends from here =================================*/}
      {/* ================== section 5 starts from here =================================*/}
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
      {/* ================== section 5 ended here =================================*/}

      {/* ================== section 6 (The Brands we have worked with) starts from here =====================*/}
      <div className="flex flex-wrap flex-col justify-center items-center mb-0">
        <div className="basis-1/1">
          <h1 className="text-center font-light py-[20px]">
            The Brands we have <br></br>
            <span className="text-sky-500 font-bold">worked with</span>
          </h1>
        </div>
      </div>
      <BrandSlider />
      {/* ================== section 6 (The Brands we have worked with) ended here =====================*/}
      {/* ================== section 7 (A Glimpse into our Creative Universe) starts from here =====================*/}
      <div className="flex flex-wrap flex-col justify-center items-center mb-0">
        <div className="basis-1/1">
          <h1 className="text-center font-light py-[20px]">
            A Glimpse into our <br></br>
            <span className="text-sky-500 font-bold">Creative Universe</span>
          </h1>
        </div>
      </div>
      <div className="sm:hidden">
        <CreativeSlider />
      </div>
      <div className="hidden sm:block">
        <CreativeSliderSM />
      </div>
      {/* ================== section 7 (A Glimpse into our Creative Universe) ended here here =====================*/}
      {/* ================== section 8 (Clients Comments) start from here =====================*/}
      <div className="sm:hidden">
        <ClientsComments />
      </div>
      <div className="hidden sm:block md:hidden">
        <ClientsCommentsSM />
      </div>
      <div className="hidden md:block">
        <ClientsCommentsMD />
      </div>

      {/* ================== section 8 (Clients Comments) ended here =====================*/}
      {/* ================== section 9 (Footer1) starts from here =====================*/}
      <Footer1 />
      {/* ================== section 9 (Footer1) ended here =====================*/}
    </>
  );
};

export default Home;
