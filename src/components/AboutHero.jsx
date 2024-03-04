const AboutHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[150px] md:pb-[150px] md:pt-[50px] lg:pb-[50px]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 lg:mt-[50px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left pt-[20px] sm:text-[26px] md:text-xl lg:text-2xl xl:pl-[20%] xl:text-[30px] xl:leading-[50px] md:pt-[50px] md:pl-[5%] md:font-extrabold sm:pl-[5%] xl:pt-[50px] font-sans font-bold">
            A Powerhouse In The Fast-Paced World Of Digital Marketing,
            Generating Solutions To Every One Of Your Digital Business Needs
          </h1>
          <p className="text-[12px] sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[14px] md:pl-[5%] mt-[20px] mb-[10px] xl:pl-[20%] xl:pr-[200px] xl:leading-[25px] font-sans font-bold xl:font-semibold">
            We are committed to help you dominate the industry with a dynamic
            variety of services and solutions from our end.
          </p>
          <div className="xl:pl-[20%]">
            <div className="inline-block w-[80px] relative top-[-10px]">
              <a className="w-[80px] text-[10px] py-[10px] px-[5px] bg-[#000000] text-white rounded-none border-none hover:bg-[#40b0fd] hover:cursor-pointer">
                Get Free Quote!
              </a>
            </div>
            <div className="inline-block text-[8px] w-[65vw] xl:w-[565px] xl:text-[12px] xl:ml-[10px] xl:mt-[40px] xl:leading-[15px] relative left-[5px]">
              <p className="font-sans font-thin xl:font-normal">
                If you want to make a mark with your business on the global
                stage, get in touch with us for a tailored approach to your
                endeavors and a chance to crack the international market!
              </p>
              
            </div>
          </div>
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center items-center order-0 md:order-1 pt-[20px] lg:mt-[50px] xl:text-center xl:pt-[0px]">
          <img
            src="../AboutPageLogos/About_Digital_Marketing.png"
            alt="About_Digital_Marketing"
            className="w-[280px] xl:w-[50%]"
          ></img>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
