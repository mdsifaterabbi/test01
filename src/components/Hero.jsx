import "../MyShadow.css";

const Hero = () => {
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
          <h1 className="text-left font-extrabold pt-[20px] text-[20px] lg:text-[34px] xl:pl-[12%] xl:text-[38px] xl:leading-[50px] md:pt-[50px]">
            Worried About your Brand's<br></br>
            <span className="text-sky-500"> Marketing Strategy?</span>
          </h1>
          <p
            className="text-sm font-bold md:text-[14px] mt-[20px] mb-[10px] xl:pl-[12%] xl:text-[16px] tracking-[1px] md:text-justify"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            eSaviour Limited is the best b2b digital marketing agency that is
            dedicated to propelling your business to new heights in the creative
            digital marketing landscape. Our comprehensive b2b digital marketing
            services is crafted to elevate your brand, drive sales, and
            establish a strong online presence.
          </p>
          <div className="block xl:mt-[20px]">
            <div className="flex flex-row">
              <div className=" basis-1/4  xl:basis-1/4 xl:pl-[12%] mt-[40px] sm:mt-[35px]">
                <button className="btn btn-sm btn-info w-[120px] bg-[#000000] text-[10px] xl:text-[12px] text-white rounded-none hover:none border-none">
                  Get a Free Quote!
                </button>
              </div>
              <div className="basis-3/4 xl:basis-3/4 mt-[30px] sm:mt-[35px]">
                <p
                  className="xl:px-[20px] font-semibold text-[12px] sm:text-[14px] sm:px-[2px] px-[2px] text-justify xl:text-[14px] xl:tracking-[1px] leading-[12px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+ Brands to Achieve Success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/1 md:basis-1/1 xl:basis-1/2 flex justify-center items-center order-0 md:order-0 xl:order-1 pt-[20px] md:mr-[50px] lg:mt-[50px] lg:mb-[-100px] xl:text-center xl:pt-[10px] xl:mb-[50px]">
          <img
            src="../Speech_Bubble.png"
            alt="GSpeech_Bubble"
            className="w-[200px] sm:w-[250px] lg:w-[300px]"
          ></img>
        </div>
      </div>

      {/* ========================================================= */}

      <div className="flex flex-col md:flex-col bg-[#ffffff] py-[20px] w-[95vw] md:w-[80vw] mx-auto mt-[-150px] sm:mt-[-80px] xl:mt-[-80px] xl:w-[80vw] relative myShadowDiv">
        <div className="basis-1/1 md:basis-1/1 text-center text-black px-[5px] section_3_span">
          <span
            className="text-sm text-slate-600 xl:text-3xl"
            style={{
              fontFamily: "Futura PT, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            eSaviour Limited has achieved fame internationally recognized by the
            world leaders.
          </span>
        </div>
        {/* ===================For extra small devices only====================== */}
        <div className="basis-1/1 sm:hidden flex flex-wrap items-center justify-center mx-auto">
          <div className="basis-1/2">
            <img
              src="../meta.png"
              alt="meta"
              className="w-[80px] mx-auto"
            ></img>
          </div>
          <div className="basis-1/2">
            <img
              src="../Amazon-Ads 1.png"
              alt="mAmazon-Ads 1.pngta"
              className="w-[80px] h-[100px] mx-auto"
            ></img>
          </div>
          <div className="basis-1/2">
            <img
              src="../Google_Ads_logo.png"
              alt="Google_Ads_logo.png"
              className="w-[50px] mx-auto"
            ></img>
          </div>
          <div className="basis-1/2">
            <img
              src="../Group 210.png"
              alt="Group 210.png"
              className="w-[80px] mx-auto"
            ></img>
          </div>
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
            <div className="basis-1/4">
              <img
                src="./meta.png"
                alt="meta"
                className="w-auto h-[100px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="./Amazon-Ads 1.png"
                alt="Amazon-Ads 1.png"
                className="w-auto h-[150px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="./Google_Ads_logo.png"
                alt="Google_Ads_logo.png"
                className="w-[80px] h-auto mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="./Group 210.png"
                alt="meta"
                className="w-[100px] h-[50px] mx-auto"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
