import Slider from "react-slick";
const ClientsCommentsXL = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-sky-500 text-[22px] xl:text-[40px] TabContextFontSpan">
          Clients{" "}
          <strong className="text-sky-500 TabContextFontSpan2">Love</strong> Us
        </h1>
      </div>
      <div className="mb-[100px] w-[70vw] mx-auto">
        <Slider
          {...settings}
          className="pt-[0px]"
          autoplay={true} // Enables autoplay
          autoplaySpeed={3000} // Sets the autoplay speed in milliseconds (optional)
        >
          <div className="mb-[30px] xl:w-[100%]">
            <div className="card card-side shadow-xl xl:w-[70%] xl:mx-auto">
              <figure className="xl:w-[300px]">
                <img
                  src="../Mostafiz_Rana.jpeg"
                  alt="Mostafiz_Rana.jpeg"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px]"
                />
              </figure>
              <div className="card-body xl:max-w-[500px]">
                <p
                  className="pt-[80px] xl:text-[16px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  We wanted to design a website for our chauffeur business in
                  Austin city. eSaviour Limited designed a simple and
                  easy-to-use website for our company. We highly recommend them
                  for web development.”
                </p>
                <h2
                  className="relative font-bold left-[0px] top-[-60px] xl:text-[24px] text-sky-500"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontStyle: "normal",
                  }}
                >
                  Mostafiz Rana
                </h2>
                <span
                  className="relative left-[0px] top-[-70px] xl:text-[16px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  UnitedCarry Imports LLC
                </span>
              </div>
            </div>
          </div>
          <div className="mb-[30px] xl:w-[100%]">
            <div className="card card-side shadow-xl xl:w-[70%] xl:mx-auto">
              <figure className="xl:w-[300px]">
                <img
                  src="../Robert.jpeg"
                  alt="Robert.jpeg"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px]"
                />
              </figure>
              <div className="card-body xl:max-w-[500px]">
                <p
                  className="pt-[80px] xl:text-[16px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  eSaviour Limited helped us launch a new Amazon FBA product in
                  the pest repeller category. They handled product photography,
                  designed listing images, created EBC content, and also wrote
                  an SEO-optimized title and bullet points for our product. We
                  highly recommend them for Amazon FBA services.
                </p>
                <h2
                  className="relative font-bold left-[0px] top-[-60px] xl:text-[20px] text-sky-500"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontStyle: "normal",
                  }}
                >
                  Robert Cameron
                </h2>
                <span
                  className="relative left-[0px] top-[-70px] xl:text-[16px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  T3-R LLC
                </span>
              </div>
            </div>
          </div>
          <div className="mb-[30px] xl:w-[100%]">
            <div className="card card-side shadow-xl xl:w-[70%] xl:mx-auto">
              <figure className="xl:w-[300px]">
                <img
                  src="../Noor.jpeg"
                  alt="Noor"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px]"
                />
              </figure>
              <div className="card-body xl:max-w-[500px]">
                <p
                  className="pt-[80px] xl:text-[16px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  As a legal professional, I badly needed social media branding
                  and content management for my law firm ‘Noor & Co.’ eSaviour
                  Limited helped me build the entire brand design from scratch.
                </p>
                <h2
                  className="relative left-[0px] top-[-60px] xl:text-[24px] text-sky-500"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontStyle: "normal",
                  }}
                >
                  Barrister AKM NOOR A RABBI
                </h2>
                <span
                  className="relative left-[0px] top-[-70px] xl:text-[16px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  Noor & Co
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ClientsCommentsXL;
