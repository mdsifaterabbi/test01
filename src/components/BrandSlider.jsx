import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../MyShadow.css";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};

const BrandSlider = () => {
  return (
    <>
      <div className="">
        <Slider
          {...settings}
          className="myShadowDiv py-[15px] border-[rgba(82, 83, 86,0.5)] w-[95vw] md:w-[95vw] mx-auto xl:w-[95vw] bg-[#ffffff]"
          autoplay={true}
          autoplaySpeed={2000}
        >
          <div>
            <h3 className="text-center">
              <img
                src="./t3r-logo.png"
                alt="t3r-logo"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./virtusale-logo.png"
                alt="virtusale-logo.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./bugwomp-logo.png"
                alt="bugwomp-logo"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./Victor.png"
                alt="Victor"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./Noor.png"
                alt="Noor.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./Austin.png"
                alt="Austin"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./Import.png"
                alt="Import.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./Agro.png"
                alt="Agro.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px]"
              ></img>
            </h3>
          </div>
        </Slider>
        {/* <div className="absolute left-[-100px] top-0 bg-[#28acf8] xl:w-[250px] xl:h-[100px] transform rotate-45 -z-40 overflow-x-hidden"></div>
        <div className="absolute right-[-100px] top-0 bg-[#28acf8] xl:w-[250px] xl:h-[100px] transform rotate-45 -z-40 overflow-x-hidden"></div> */}
      </div>
    </>
  );
};

export default BrandSlider;
