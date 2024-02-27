const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[200px]">
        <div className="basis-1/1 md:basis-1/2 md:mx-[100px] order-1 md:order-0 px-[10px]">
          <h1 className="text-left pt-[20px] font-bold">
            Worried About your Brand's<br></br>
            <span className="text-sky-500"> Marketing Strategy?</span>
          </h1>
          <p className="text-sm md:text-[14px] mt-[20px] mb-[10px]">
            Maximize Your Profits with Our Proven Digital Marketing Strategy.
            Our B2B digital marketing agency uses a customer-oriented approach
            and personalized strategies to ensure business Growth. Our
            comprehensive service portfolio shows our proven track record.
          </p>
          {/* <button className="btn btn-sm btn-neutral rounded-none mt-[20px] md:mt-[25px] md:ml-[20px] md:mr-[10px]">
            Get Free Quote!
          </button> */}
          <span className="text-[11px] italic md:text-[14px]">
            Get Free Quote! Over 3 Years of Experience in Digital Business
            Development.Helped 27+ Brands to Achieve Success.<br></br>
          </span>
          <button className="btn btn-sm btn-neutral rounded-none my-[20px] md:my-[25px] md:mr-[10px]">
            Get Free Quote!
          </button>
        </div>
        <div className="basis-1/1 md:basis-1/2 flex justify-center items-center order-0 md:order-1 pt-[20px]">
          <img src="../Speech_Bubble.png" alt="GSpeech_Bubble"></img>
        </div>
      </div>
      <div className="flex flex-col md:flex-col bg-[#ffffff] py-[20px] w-[95vw] md:w-[90vw] mx-auto mt-[-150px] md:mt-[-80px] relative">
        <div className="basis-1/1 md:basis-1/1 text-center text-black px-[5px]">
          <span className="text-sm text-slate-600">
            eSaviour Limited has achieved fame internationally recognized by the
            world leaders.
          </span>
        </div>
        <div className="basis-1/1 md:basis-1/1 flex flex-wrap items-center justify-center mx-auto">
          <div className="basis-1/2 md:basis-1/5">
            <img
              src="../meta.png"
              alt="meta"
              className="w-[80px] mx-auto"
            ></img>
          </div>
          <div className="basis-1/2 md:basis-1/5">
            <img
              src="../Amazon-Ads 1.png"
              alt="mAmazon-Ads 1.pngta"
              className="w-[80px] h-[100px] mx-auto"
            ></img>
          </div>
          <div className="basis-1/2 md:basis-1/5">
            <img
              src="../Google_Ads_logo.png"
              alt="Google_Ads_logo.png"
              className="w-[50px] mx-auto"
            ></img>
          </div>
          <div className="basis-1/2 md:basis-1/5">
            <img
              src="../Group 210.png"
              alt="Group 210.png"
              className="w-[80px] mx-auto"
            ></img>
          </div>
          {/* <img
            src="../meta.png"
            alt="meta"
            className="w-[50px] mx-[5px] md:mx-1"
          ></img>
           <img
            src="../Amazon-Ads 1.png"
            alt="mAmazon-Ads 1.pngta"
            className="w-[50px] mx-[5px] md:mx-1"
          ></img>
          <img
            src="../Google_Ads_logo.png"
            alt="Google_Ads_logo.png"
            className="w-[50px] mx-[5px] md:mx-1"
          ></img>
          <img
            src="../Group 210.png"
            alt="Group 210.png"
            className="w-[50px] mx-[5px] md:mx-1"
          ></img> */}
        </div>
        <div className="absolute inset-0 bg-transparent z-0"></div>
        <div className="absolute inset-0 bg-transparent z-10 shadow-lg shadow-black/20"></div>
      </div>
    </>
  );
};

export default Hero;
