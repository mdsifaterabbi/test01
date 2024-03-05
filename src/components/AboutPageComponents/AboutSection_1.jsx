const AboutSection_1 = () => {
  return (
    <>
      <div className="xl:w-[70vw] xl:mx-auto">
        <div className="flex flex-col xl:flex-row py-[50px]">
          <div className="basis-1/1 xl:basis-2/5 order-0">
            <img
              src="../AboutPageLogos/Mainul_Islam.png"
              alt="Mainul_Islam.png"
              className="mx-auto w-[70%] xl:w-auto"
            ></img>
          </div>
          <div className="basis-1/1 xl:basis-3/5 order-1">
            <h1 className="font-bold text-[20px] px-[10px] xl:font-bold xl:text-[34px] xl:px-[50px]">
              How It All Started?
            </h1>
            <h1 className="font-bold text-[20px] px-[10px] xl:font-bold xl:text-[34px] text-[#40b0fd] xl:px-[50px]">
              Let’s Hear It From The Boss
            </h1>
            <p
              className="text-[14px] px-[10px] pt-[20px] xl:text-[18px] xl:px-[50px] xl:opacity-100 xl:pt-[20px]"
              style={{
                fontFamily: "Futura PT, sans-serif",
                fontWeight: 500,
              }}
            >
              As a lifelong Amazon FBA Consultant and Digital Marketing Analyst,
              I’ve been observing significant gaps in the digital business arena
              in Bangladesh and all around the world. Whenever someone seeks to
              hire an expert for their businesses, they almost always encounter
              some substantial challenges. This is the very reason we embarked
              on our journey as a full fledged Digital Marketing Agency in 2023.
              Our company motto is “Care to be Aware” - which justifies our
              sincere efforts to provide the best possible solutions to grow
              your business.
            </p>
            <div className="text-center xl:text-left">
              <h3 className="text-[16px] ] font-bold px-[5px] mt-[10px] xl:font-extrabold xl:text-[18px] bg-[#def1fe] inline-block xl:px-[5px] xl:ml-[50px] xl:mt-[30px]">
                Mainul Islam
              </h3>
              <h3
                className="text-[14px]  px-[5px] xl:text-[20px] xl:font-semibold xl:ml-[50px]"
                style={{
                  fontFamily: "Futura PT, sans-serif",
                }}
              >
                Managing Director
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_1;
