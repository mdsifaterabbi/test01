
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const BrandSlider = () => {
  
  return (
    <>
     
      <Slider {...settings} className="border border-t-[5px] border-b-[5px] py-[15px] border-[rgba(82, 83, 86,0.5)]">
        <div>
          <h3 className="text-center">
            <img
              src="./t3r-logo.png"
              alt="t3r-logo"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./virtusale-logo.png"
              alt="virtusale-logo.png"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./bugwomp-logo.png"
              alt="bugwomp-logo"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./t3r-logo.png"
              alt="t3r-logo"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./virtusale-logo.png"
              alt="virtusale-logo.png"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./bugwomp-logo.png"
              alt="bugwomp-logo"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
      </Slider>
    </>
  );
};

export default BrandSlider;
