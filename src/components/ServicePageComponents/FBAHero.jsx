import { useEffect, useRef, useState } from "react";
// import "../MyShadow.css";
// import "../Hero.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

const FBAHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col xl:flex-row pb-[200px] sm:pb-[100px] md:pb-[100px] bg-[#b3d9f8] relative top-0 left-0">
        {/* Watermark of hero section */}
        <div className="absolute bottom-[-50px] left-0 text-white md:w-[100vw] md:h-[100%] xl:w-[50vw] hidden md:block">
          <img
            src="/watermarks/xl_home_water_1.png"
            alt="xl_home_water_1"
          ></img>
        </div>
        <div className="absolute bottom-[40px] left-0 md:w-[200px] md:h-[150px] xl:w-[200px] xl:h-[150px] hidden md:block">
          <img
            src="/watermarks/xl_home_water_2.png"
            alt="xl_home_water_2"
          ></img>
        </div>
        <div className="basis-1/1 md:basis-1/1 xl:basis-1/2 md:mx-[100px] lg:mt-[100px] order-1 md:order-1 xl:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left font-extrabold pt-[20px] text-[25px] lg:text-[34px] xl:pl-[12%] xl:text-[38px] xl:leading-[50px] md:pt-[50px]">
            Struggling with your Amazon Sales? Maximize your Profits with
            Professional Amazon FBA Consultant
          </h1>
          <p
            className="text-[15px] font-bold md:text-[14px] mt-[20px] mb-[10px] xl:pl-[12%] xl:text-[16px] tracking-[1px] md:text-justify"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            Whether you are trying to break into the Amazon marketplace for the
            first time or a regular seller there already, our amazon FBA
            consultant will assist you through several well-tested service
            packages once you avail them.
          </p>

          {/* ============== Only For XL devices ============= */}
          <div className="basis-1/1 hidden xl:block">
            <div className="flex flex-row gap-3">
              <div className="basis-1/4 h-[100px] xl:text-end mt-[15px]">
                <button className="btn rounded-none xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear">
                  Get Free Audit
                </button>
              </div>
              <div className="basis-3/4 h-[100px] mt-[25px]">
                <p className="relative xl:text-[16px] xl:top-[20px]">
                  Over 3 Years of Experience in Amazon FBA Consultancy. Helped
                  50+ Brands to Achieve Success.
                </p>
              </div>
            </div>
          </div>

          {/* =================== Only For XSM ,SM, MD, lg devices =================== */}
          <div className="basis-1/1 block xl:hidden mt-[30px]">
            <div className="flex flex-row gap-1">
              <div
                className="basis-1/4 bg-black text-white text-center hover:text-black hover:bg-orange-500 cursor-pointer relative
              top-0 left-0 transition duration-300 ease-linear"
              >
                <button
                  className="btn border-none w-full rounded-none text-[12px] sm:text-[12px] xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
                  onClick={() =>
                    document.getElementById("getQuoteModal").showModal()
                  }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4">
                <p className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[5px] lg:px-[50px] md:hidden">
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+ Brands to <br></br>Achieve Success.
                </p>
                <p className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[10px] lg:px-[50px] hidden md:block">
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+<br></br> Brands to Achieve Success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/1 md:basis-1/1 xl:basis-1/2 flex justify-center items-center order-0 md:order-0 xl:order-1 pt-[20px] md:mr-[50px] lg:mt-[50px] lg:mb-[-100px] xl:text-center xl:pt-[10px] xl:mb-[50px]">
          <img
            src="../FBAservice/AmazonFBA.png"
            alt="Amazon FBA"
            className="w-[200px] sm:w-[250px] lg:w-[300px]"
          ></img>
        </div>
      </div>

      {/* ========================================================= */}

      <div className="flex flex-col md:flex-col bg-[#ffffff] py-[20px] w-[95vw] md:w-[80vw] mx-auto mt-[-150px] sm:mt-[-80px] xl:mt-[-80px] xl:w-[80vw] relative myShadowDiv">
        <div className="basis-1/1 md:basis-1/1 text-center text-black px-[5px]">
          <h1 className="text-[24px] font-extrabold text-black xl:text-[42px] xl:font-extrabold">
            Amazon FBA
          </h1>

          <p
            className="text-[16px] xl:text-[25px] text-[#5bbafd] font-extrabold"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            Maximize Your Potential on the World's Largest Marketplace
          </p>
        </div>
        {/* ===================For extra small devices only====================== */}
        <div className="basis-1/1 sm:hidden flex flex-wrap items-center justify-center mx-auto">
          <p
            className="text-[14px] leading-[18px] text-justify px-[5px] opacity-80"
            style={{
              fontFamily: "Futura PT, sans-serif",
              fontWeight: 600,
            }}
          >
            Unlock the full power of Amazon FBA with Esaviour Limited’s expert
            consultancy services. Whether you’re a seasoned seller or just
            starting, our team of experienced professionals is dedicated to
            optimizing your product listings, enhancing visibility, and driving
            sales.
          </p>
        </div>

        {/* =============For small and medium devices only============ */}
        <div className="hidden sm:block lg:hidden">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto">
            <div className="basis-1/4">
              <img
                src="../meta.png"
                alt="meta"
                className="w-[80px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Amazon-Ads 1.png"
                alt="mAmazon-Ads 1.pngta"
                className="w-[80px] h-[100px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Google_Ads_logo.png"
                alt="Google_Ads_logo.png"
                className="w-[50px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Group 210.png"
                alt="Group 210.png"
                className="w-[80px] mx-auto"
              ></img>
            </div>
          </div>
        </div>
        {/* =============For large devices only============ */}
        <div className="hidden lg:block xl:hidden">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto w-[60%]">
            <div className="basis-1/4">
              <img
                src="../meta.png"
                alt="meta"
                className="w-[80px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Amazon-Ads 1.png"
                alt="mAmazon-Ads 1"
                className="w-[250px] h-[100px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Google_Ads_logo.png"
                alt="Google_Ads_logo.png"
                className="w-[50px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Group 210.png"
                alt="Group 210.png"
                className="w-[80px] mx-auto"
              ></img>
            </div>
          </div>
        </div>
        {/* =============For Extra large devices only============ */}
        <div className="hidden xl:block">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto mt-[0px]">
            <p
              className="xl:text-[16px] text-center xl:px-[200px] font-semibold"
              style={{
                fontFamily: "Futura PT, sans-serif",
              }}
            >
              Unlock the full power of Amazon FBA with Esaviour Limited’s expert
              consultancy services. Whether you’re a seasoned seller or just
              starting, our team of experienced professionals is dedicated to
              optimizing your product listings, enhancing visibility, and
              driving sales.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FBAHero;
