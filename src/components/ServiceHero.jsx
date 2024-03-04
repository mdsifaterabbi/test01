const ServiceHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[150px] md:pb-[150px] md:pt-[50px]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 lg:mt-[50px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left pt-[20px] font-bold sm:text-[26px] md:text-xl lg:text-2xl xl:pl-[20%] xl:text-[30px] xl:leading-[50px] md:pt-[50px] md:pl-[5%] md:font-extrabold sm:pl-[5%] lg:pt-[0px] xl:pt-[50px]">
            Welcome to Esaviour Limited <br></br>Your Optimal Solutions for
            <br></br>Exceptional Services
          </h1>
          <p className="text-[12px] sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[14px] md:pl-[5%] mt-[20px] mb-[10px] section_3_span xl:pl-[20%] xl:pr-[200px] xl:leading-[25px]">
            Esaviour Services: Your go-to solution for seamless, efficient, and
            innovative services. We simplify your needs with a touch of
            excellence, ensuring convenience and satisfaction in every
            experience.
          </p>
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center items-center order-0 md:order-1 pt-[20px] lg:mt-[50px] xl:text-center xl:pt-[0px]">
          <img
            src="../ServicePageLogos/Service_Logo.png"
            alt="Service Logo"
            className="w-[40%] sm:w-[30%] md:w-[50%] lg:w-[50%] xl:w-[35%]"
          ></img>
        </div>
      </div>

      {/* ========================================================= */}

      <div className="flex flex-col md:flex-col bg-[#ffffff] py-[10px] w-[90vw] mt-[-100px] md:w-[80vw] mx-auto md:mt-[-70px] sm:mt-[-80px] xl:mt-[-100px] xl:w-[80vw] relative">
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
        <div className="hidden sm:block lg:hidden bg-purple-400]">
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

export default ServiceHero;
