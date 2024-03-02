import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
      <Slider
        {...settings}
        className="border border-t-[5px] border-b-[5px] py-[15px] border-[rgba(82, 83, 86,0.5)] md:w-[90vw] md:mx-auto xl:w-[100vw]"
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
    </>
  );
};

export default BrandSlider;
