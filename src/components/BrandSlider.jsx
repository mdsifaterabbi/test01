import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../MyShadow.css";
import "./brand-slider.css";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: false,
};

//const BRAND_SLIDER_ANIMATION_DURATION = "15s"; // Adjust animation duration

// var settings = {
//   dots: false,
//   infinite: true,
//   speed: 500, // Adjust speed if needed
//   slidesToShow: 4, // Show only one slide at a time
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 2000, // Not strictly necessary for continuous scrolling
//   cssEase: "linear", // Use linear easing for constant speed
//   pauseOnHover: false,
//   pauseOnFocus: false,
//   beforeChange: (currentSlide, nextSlide) => {
//     const slideWidth = this.slider.slickList.offsetWidth; // Get slider width
//     const translateX = -(nextSlide * slideWidth); // Calculate translateX value
//     const animationClass = `brand-slider-animation transform translateX(${translateX}px)`;
//     this.slider.slickList.classList.remove("brand-slider-animation"); // Remove previous animation class
//     setTimeout(() => {
//       this.slider.slickList.classList.add(animationClass);
//     }, 100); // Adjust delay if needed
//   },
// };

const BrandSlider = () => {
  return (
    <>
      <div className="relative top-0 left-0">
        <Slider
          {...settings}
          className="myShadowDiv py-[15px] border-[rgba(82, 83, 86,0.5)] w-[98vw] md:w-[95vw] mx-auto xl:w-[95vw] bg-[#ffffff]"
          autoplay={true}
          autoplaySpeed={2000}
        >
          <div>
            <h3 className="text-center">
              <img
                src="./t3r-logo.png"
                alt="t3r-logo"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[100px] xl:pt-[10px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./virtusale-logo.png"
                alt="virtusale-logo.png"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px] xl:pt-[10px]"
              ></img>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              <img
                src="./bugwomp-logo.png"
                alt="bugwomp-logo"
                className="w-[50px] sm:w-[80px] mx-auto xl:w-[150px] xl:pt-[10px]"
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
        <div className="absolute left-[0px] top-[0px] bg-[#28acf8] xl:w-[300px] xl:h-[100px] transform -rotate-45 -z-40 overflow-x-hidden"></div>
        <div className="absolute right-[0px] top-[0px] bg-[#28acf8] xl:w-[300px] xl:h-[100px] transform rotate-45 -z-40 overflow-x-hidden"></div>
      </div>
    </>
  );
};

export default BrandSlider;
