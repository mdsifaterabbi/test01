import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
};

const Footer1 = () => {
  return (
    <>
      <Slider
        {...settings}
        className="py-[15px] border-[rgba(82, 83, 86,0.5)] w-[95vw] xl:w-[50vw] xl:mb-[50px] mx-auto"
      >
        <div className="xl:bg-[#f8fcff] border h-[100px] w-[150px] md:w-[200px] md:h-[150px]">
          <img
            src="./Clutch.png"
            alt="clutch"
            className="w-[80px] xl:w-[150px] relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          ></img>
        </div>
        <div className="xl:bg-[#f8fcff] border h-[100px] w-[150px] md:w-[200px] md:h-[150px] ">
          <img
            src="./Trustppailot.png"
            alt="Trustppailot.png"
            className="w-[80px] xl:w-[150px] relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          ></img>
        </div>
        <div className="xl:bg-[#f8fcff] border h-[100px] w-[150px] md:w-[200px] md:h-[150px]">
          <img
            src="./Google.png"
            alt="Google.png"
            className="w-[80px] xl:w-[150px] relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          ></img>
        </div>
        <div className="xl:bg-[#f8fcff] border h-[100px] w-[150px] md:w-[200px] md:h-[150px]">
          <img
            src="./Clutch.png"
            alt="clutch"
            className="w-[80px] xl:w-[150px] relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          ></img>
        </div>
      </Slider>
      {/* ========== only for extra small device ============= */}
      <div className="sm:hidden w-[95vw] mx-auto">
        <div className="flex flex-col sm:hidden mb-[30px]">
          <div className="basis-1/1 bg-[#EEF7FF]">
            <p className="text-center text-[12px] px-[5px] py-[10px] section_3_span">
              Our Professional Team has helped Hundreds of Sellers on Amazon to
              Avoid Failure and Maximize Potential Growth. Schedule a Free
              Meeting Now!
            </p>
            <div className="pt-[10px] pb-[20px] text-center">
              <a href="#" className="py-[5px] px-[10px] bg-black text-white">
                Schedule a Meeting
              </a>
            </div>
          </div>
          <div className="basis-1/1">
            <div className="flex flex-row">
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <p className="font-bold text-sm section_3_span">Or Direct</p>
                <p className="font-light text-xl text-[white] tracking-widest pr-[10px] section_3_span">
                  Message
                </p>
              </div>
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <a href="#" className="mx-[5px]">
                  <img
                    src="./WHatsapp.png"
                    alt="WHatsapp"
                    className="w-[30px] inline"
                  ></img>
                </a>
                <a href="#" className="mx-[5px]">
                  <img
                    src="./Facebook.png"
                    alt="Facebook.png"
                    className="w-[30px] inline"
                  ></img>
                </a>
                <a href="#" className="mx-[5px]">
                  <img
                    src="./LinkedIn.png"
                    alt="LinkedIn.png"
                    className="w-[35px] inline "
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="basis-1/1 bg-[#ddf1ff] py-[10px]">
            <label className="input input-bordered flex items-center border-none rounded-none w-[90%] mx-auto">
              <input
                type="text"
                className="grow placeholder-slate-600 "
                placeholder="Email"
              />
              <button className="btn bg-[#40b0fd] btn-sm rounded-sm section_3_span text-white relative left-[-30px]">
                Submit
              </button>
            </label>
          </div>
        </div>
      </div>
      {/* ============ only for extra large device ============= */}
      <div className="hidden xl:block xl:w-[80vw] xl:mx-auto">
        <div className="flex flex-row">
          <div className="basis-1/2 bg-[#eef7ff]">
            <p className="text-center text-[12px] pt-[50px] px-[50px] pb-[10px] section_3_span">
              Our Professional Team has helped Hundreds of Sellers on Amazon to
              Avoid Failure and Maximize Potential Growth. Schedule a Free
              Meeting Now!
            </p>
            <div className="pt-[10px] pb-[20px] text-center">
              <a href="#" className="py-[5px] px-[10px] bg-black text-white">
                Schedule a Meeting
              </a>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col">
              <div className="basis-1/1 bg-[#40b0fd] text-center w-[80%] mx-auto">
                <div className="flex flex-row">
                  <div className="basis-1/2 py-[15px]">
                    <p className="font-bold text-sm section_3_span">
                      Or Direct
                    </p>
                    <p className="font-light text-xl text-[white] tracking-widest pr-[10px] section_3_span">
                      Message
                    </p>
                  </div>
                  <div className="basis-1/2 py-[15px] text-center">
                    <a href="#" className="mx-[5px]">
                      <img
                        src="./WHatsapp.png"
                        alt="WHatsapp"
                        className="w-[30px] inline"
                      ></img>
                    </a>
                    <a href="#" className="mx-[5px]">
                      <img
                        src="./Facebook.png"
                        alt="Facebook.png"
                        className="w-[30px] inline"
                      ></img>
                    </a>
                    <a href="#" className="mx-[5px]">
                      <img
                        src="./LinkedIn.png"
                        alt="LinkedIn.png"
                        className="w-[35px] inline "
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="basis-1/1 my-[20px] bg-[#eef7ff] w-[80%] mx-auto">
                <label className="input input-bordered flex items-center rounded-none w-[95%] mx-auto my-[15px] py-[20px]">
                  <input
                    type="text"
                    className="grow placeholder-slate-600"
                    placeholder="Email"
                  />
                  <button className="btn bg-[#40b0fd] btn-sm rounded-sm">
                    Submit
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
