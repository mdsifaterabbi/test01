import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import Hero from "../components/Hero";
import "../App.css";
import { ServiceCard } from "../components/ServiceCard";
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
import Footer2 from "../components/Footer2";
import "../Font.css";
import TabContextXL from "../components/TabContextXL";
import CreativeSliderXL from "../components/CreativeSliderXL";
import ClientsCommentsXL from "../components/ClientsCommentsXL";

const Home = ({ title }) => {
  const cardContents = [
    {
      id: 1,
      image: "./expert2.png",
      heading: "Expert Guidance",
      paragraph:
        "The best b2b digital marketing agency provides you with strategic insights to navigate the complexities of online retail, ensuring your products or brands stand out in the competitive marketplace.",
    },
    {
      id: 2,
      image: "./DigitalMarketing1.png",
      heading: "Digital Marketing Mastery",
      paragraph:
        "Unleash the power of our Digital Marketing services to reach your target audience effectively. From SEO to social media campaigns, we drive results that matter.",
    },
    {
      id: 3,
      image: "./Creative_1.png",
      heading: "Creative Excellence",
      paragraph:
        "Elevate your brand with our Graphics Design services, where creativity meets strategy. Our team transforms concepts into captivating visuals that leave a lasting impression",
    },
    {
      id: 4,
      image: "./LearnAndGrow1.png",
      heading: "Learn and Grow",
      paragraph:
        "Explore our courses in Graphics Design, UI/UX Design, Website Design and Development, and SEO. Empower yourself with the skills needed to thrive in the digital era.",
    },
    {
      id: 5,
      image: "./Solutions1.png",
      heading: "Web Solutions That Work",
      paragraph:
        "Experience seamless Website Development that not only looks stunning but also functions flawlessly. We create responsive, user-friendly websites tailored to your unique business needs.",
    },
    {
      id: 6,
      image: "./EndTOEnd1.png",
      heading: "End-to-End Solutions",
      paragraph:
        "From concept to execution, we offer end-to-end solutions to streamline your digital journey. Trust us to handle every aspect, ensuring a seamless and hassle-free experience.",
    },
  ];

  return (
    <div className="w-[100vw] lg:w-[98vw] xl:w-[98vw] mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <Hero />
      {/* ========================== section 3 starts from here ============================ */}
      <div className="flex flex-col md:flex-row flex-wrap xl:w-[90vw] overflow-x-hidden">
        <div className="basis-1/1 md:basis-1/2 flex justify-center items-center">
          <img src="../Arrow_2.png" alt="Arrow_2"></img>
        </div>
        <div
          className="basis-1/1 md:basis-1/2 text-left xl:py-[100px]"
          style={{
            fontFamily: "Futura PT, sans-serif",
            fontWeight: "bold",
            fontStyle: "normal",
          }}
        >
          <span className="text-[70px] pr-[5px] pl-[5px] xl:text-[128px]">
            Who
          </span>
          <span className="text-sky-500 text-[34px] pr-[5px] xl:text-[70px]">
            We
          </span>
          <span className="text-[20px] xl:text-[34px] font-bold">Are?</span>
          <p
            className="text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[1px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            eSaviour Limited is an industry leader in the digital marketing
            sector and offers B2B enterprises a wide range of services that help
            them dominate international markets
          </p>
          <p
            className="text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[1px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            Our specialty lies in the novelty experience we offer to our clients
            and partners. We are fixated on staying transparent in our work and
            communication, willing to negotiate on the best deals you’ll find in
            the market today and habituated to producing the most sustained
            results for you.
          </p>
          <p
            className="text-[16px] font-semibold sm:text-[16px] md:text-[16px] xl:text-[16px] pb-[20px] pl-[10px] pr-[20px] sm:px-[10px] text-black leading-[16px] xl:tracking-[1px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            We confidently assure you of a proper blend of innovation,
            professionalism, expertise and productivity in our projects. All we
            need now is your trust to complete the recipe and create magic
            together!
          </p>

          <button className="btn btn-sm btn-danger rounded-none my-[20px] bg-[#000000] text-white font-medium ml-[10px]">
            Learn More
          </button>
        </div>
      </div>
      {/* ========================== section 3 ended  here ============================ */}
      {/* ================== section 4 starts from here =================================*/}
      <div className="sm:hidden overflow-x-hidden">
        <TabContext />
      </div>
      <div className="hidden sm:block md:hidden overflow-x-hidden">
        <TabContextSM />
      </div>
      <div className="hidden md:block xl:hidden overflow-x-hidden">
        <TabContextMD />
      </div>
      <div className="hidden xl:block overflow-x-hidden">
        <TabContextXL />
      </div>

      {/* ================== section 4 ends from here =================================*/}
      {/* ================== section 5 starts from here =================================*/}
      <div className="my-[25px] text-center w-[98vw] mx-auto">
        <span className="TabContextFontSpan text-[24px] xl:text-[40px]">
          Why Choose Esaviour Limited to
          <span className=" text-sky-500 TabContextFontSpan2">
            <br></br> Builds Your Brand?
          </span>
        </span>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row w-[90vw] xl:w-[80%] xl:mx-auto md:w-[90vw] md:mx-auto mx-auto overflow-x-hidden">
        {cardContents.map((c) => (
          <div key={c.id} className="basis-1/1 sm:basis-1/2">
            <ServiceCard props={c} />
          </div>
        ))}
      </div>
      {/* ================== section 5 ended here =================================*/}

      {/* ================== section 6 (The Brands we have worked with) starts from here =====================*/}
      <div className="flex flex-wrap flex-col justify-center items-center mb-0 py-[20px] overflow-x-hidden">
        <div className="basis-1/1">
          <h1 className="text-center py-[20px] TabContextFontSpan text-[24px] xl:text-[40px]">
            The Brands we have <br></br>
            <span className="text-sky-500 TabContextFontSpan2">
              worked with
            </span>
          </h1>
        </div>
        <div className="basis-1/1">
          <div className="relative top-0 left-0 xl:h-[220px] pt-[50px] overflow-hidden">
            <BrandSlider />
            <div className="bg-sky-500 w-[300px] h-[90px] absolute top-[30px] left-[-140px] transform rotate-45 -z-10 hidden xl:block"></div>
            <div className="bg-sky-500 w-[300px] h-[90px] absolute top-[30px] right-[-100px] transform rotate-45 -z-10 hidden xl:block"></div>
          </div>
        </div>
      </div>
      {/* <BrandSlider /> */}
      {/* ================== section 6 (The Brands we have worked with) ended here =====================*/}
      {/* ================== section 7 (A Glimpse into our Creative Universe) starts from here =====================*/}
      <div className="flex flex-wrap flex-col justify-center items-center mb-0 overflow-x-hidden">
        <div className="basis-1/1">
          <h1 className="text-center py-[20px] TabContextFontSpan text-[24px] xl:text-[40px]">
            A Glimpse into our <br></br>
            <span className="text-sky-500 TabContextFontSpan2">
              Creative Universe
            </span>
          </h1>
        </div>
      </div>
      <div className="sm:hidden overflow-x-hidden">
        <CreativeSlider />
      </div>
      <div className="hidden sm:block md:hidden overflow-x-hidden">
        <CreativeSliderSM />
      </div>
      <div className="hidden xl:block overflow-x-hidden">
        <CreativeSliderXL />
      </div>
      {/* ================== section 7 (A Glimpse into our Creative Universe) ended here here =====================*/}
      {/* ================== section 8 (Clients Comments) start from here =====================*/}
      <div className="sm:hidden overflow-x-hidden">
        <ClientsComments />
      </div>
      <div className="hidden sm:block md:hidden overflow-x-hidden">
        <ClientsCommentsSM />
      </div>
      <div className="hidden md:block xl:hidden overflow-x-hidden">
        <ClientsCommentsMD />
      </div>
      <div className="hidden xl:block overflow-x-hidden">
        <ClientsCommentsXL />
      </div>

      {/* ================== section 8 (Clients Comments) ended here =====================*/}
      {/* ================== section 9 (Footer1) starts from here =====================*/}
      <div className="w-[98vw] mx-auto overflow-x-hidden">
        <Footer1 />
      </div>

      {/* ================== section 9 (Footer1) ended here =====================*/}
      {/* ================== section 10 (Footer2) started from here =====================*/}
      <Footer2 />
      {/* ================== section 9 (Footer2) ended here =====================*/}
    </div>
  );
};

export default Home;
