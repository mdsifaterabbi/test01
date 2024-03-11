const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[200px]">
        <div className="basis-1/1 md:basis-1/2 md:mx-[100px] lg:mt-[100px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1
            className="text-left font-bold pt-[20px] lg:text-[34px] xl:pl-[12%] xl:text-[38px] xl:leading-[50px] md:pt-[100px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
            }}
          >
            Worried About your Brand's<br></br>
            <span className="text-sky-500"> Marketing Strategy?</span>
          </h1>
          <p
            className="text-sm md:text-[14px] mt-[20px] mb-[10px] xl:pl-[12%] xl:text-[16px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Maximize Your Profits with Our Proven Digital Marketing Strategy.
            Our B2B digital marketing agency uses a customer-oriented approach
            and personalized strategies to ensure business Growth. Our
            comprehensive service portfolio shows our proven track record.
          </p>
          <div className="hidden xl:block xl:mt-[20px]">
            <div className="flex xl:flex-row">
              <div className="xl:basis-1/4 xl:pl-[12%]">
                <button className="btn btn-sm w-[120px] bg-[#000000] text-white rounded-none hover:none border-none">
                  Get a Free Quote!
                </button>
              </div>
              <div className="xl:basis-3/4">
                <p
                  className="xl:px-[20px] font-bold"
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
        <div className="basis-1/1 md:basis-1/2 flex justify-center items-center order-0 md:order-1 pt-[20px] md:mr-[50px] lg:mr-[150px] lg:mt-[100px] xl:text-center xl:pt-[10px] xl:mr-[200px]">
          <img src="../Speech_Bubble.png" alt="GSpeech_Bubble"></img>
        </div>
      </div>

      {/* ========================================================= */}

      <div className="flex flex-col md:flex-col bg-[#ffffff] py-[20px] w-[95vw] md:w-[80vw] mx-auto mt-[-150px] sm:mt-[-80px] xl:mt-[-140px] xl:w-[80vw] relative">
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

        <div className="absolute inset-0 bg-transparent z-0"></div>
        <div className="absolute inset-0 bg-transparent z-10 shadow-lg shadow-black/20"></div>
      </div>
    </>
  );
};

export default Hero;
