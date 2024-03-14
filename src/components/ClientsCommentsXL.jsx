import Slider from "react-slick";
import "../MyShadow.css";

const ClientsCommentsXL = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="text-center border w-[60vw] mx-auto bg-[#40b0fd] relative top-0 left-0">
        <h1 className="text-white text-[22px] xl:text-[64px] xl:pt-[50px] xl:pb-[160px]">
          Clients Love Us
        </h1>
        <div className="absolute left-[-20px] top-[-20px] xl:w-[200px] xl:h-[200px]">
          <img src="../HomePageLogos/client.png" alt="client"></img>
        </div>
      </div>
      <div className="mb-[0px] w-[70vw] mx-auto relative xl:top-[-150px] xl:left-0 z-50">
        <Slider
          {...settings}
          className="pt-[0px]"
          autoplay={true} // Enables autoplay
          autoplaySpeed={3000} // Sets the autoplay speed in milliseconds (optional)
        >
          <div className="mb-[30px] xl:w-[100%]">
            <div className="card card-side bg-white xl:w-[70%] xl:mx-auto myShadowDiv xl:relative xl:top-0 xl:left-0">
              <div className="absolute xl:bottom-[20px] xl:left-0 xl:w-[50%] xl:h-[30%]">
                <img src="../HomePageLogos/client2.png" alt="client2"></img>
              </div>
              <div className="absolute xl:top-[20%] xl:left-[35%] xl:w-[200px] xl:h-[200px]">
                <img src="../HomePageLogos/client3.png" alt="client3"></img>
              </div>
              <figure className="xl:w-[300px]">
                <img
                  src="../Mostafiz_Rana.jpeg"
                  alt="Mostafiz_Rana.jpeg"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px] relative top-0 left-0"
                />
              </figure>
              <div className="card-body xl:max-w-[500px] relative">
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
            <div className="card card-side bg-white  xl:w-[70%] xl:mx-auto myShadowDiv xl:relative xl:top-0 xl:left-0">
              <div className="absolute xl:bottom-[20px] xl:left-0 xl:w-[50%] xl:h-[30%]">
                <img src="../HomePageLogos/client2.png" alt="client2"></img>
              </div>
              <div className="absolute xl:top-[20%] xl:left-[35%] xl:w-[200px] xl:h-[200px]">
                <img src="../HomePageLogos/client3.png" alt="client3"></img>
              </div>
              <figure className="xl:w-[300px]">
                <img
                  src="../Robert.jpeg"
                  alt="Robert.jpeg"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px] relative top-0 left-0"
                />
              </figure>
              <div className="card-body xl:max-w-[500px] relative">
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
            <div className="card card-side bg-white xl:w-[70%] xl:mx-auto myShadowDiv xl:relative xl:top-0 xl:left-0">
              <div className="absolute xl:bottom-[20px] xl:left-0 xl:w-[50%] xl:h-[30%]">
                <img src="../HomePageLogos/client2.png" alt="client2"></img>
              </div>
              <div className="absolute xl:top-[20%] xl:left-[35%] xl:w-[200px] xl:h-[200px]">
                <img src="../HomePageLogos/client3.png" alt="client3"></img>
              </div>
              <figure className="xl:w-[300px]">
                <img
                  src="../Noor.jpeg"
                  alt="Noor"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px] relative top-0 left-0"
                />
              </figure>
              <div className="card-body xl:max-w-[500px] relative">
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
