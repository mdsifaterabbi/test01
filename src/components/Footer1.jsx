// import Carousel from "react-slick";
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
        className="pt-[50px] lg:w-[50vw] xl:w-[50vw] mx-auto"
        autoplay={false} // Enables autoplay
        autoplaySpeed={1000} // Sets the autoplay speed in milliseconds (optional)
      >
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] sm:min-h-[120px] xl:min-h-[200px]">
            <img
              src="./Clutch.png"
              alt="Clutch"
              className="w-[80px] mx-auto xl:w-[150px] mt-[15px] xl:mt-[35px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></img>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] xl:min-h-[200px] sm:min-h-[120px]">
            <img
              src="./Google.png"
              alt="Google"
              className="w-[80px] mx-auto xl:w-[150px] mt-[20px] xl:mt-[50px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></img>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] xl:min-h-[200px] sm:min-h-[120px]">
            <img
              src="./Trustppailot.png"
              alt="Trustppailot"
              className="w-[80px] mx-auto xl:w-[150px] mt-[20px] xl:mt-[50px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></img>
          </div>
        </div>
      </Slider>
      {/* ========== only for extra small device ============= */}
      <div className="w-[95vw] sm:hidden mx-auto overflow-x-hidden">
        <div className="flex flex-col sm:hidden mb-[30px]">
          <div className="basis-1/1 bg-[##EEF7FF] border">
            {/* #EEF7FF */}
            <p className="text-center text-[15px] px-[5px] py-[10px] section_3_span">
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

      {/* ============ For small and medium devices with large ============ */}
      <div className="hidden sm:block xl:hidden w-[95vw] mx-auto overflow-x-hidden">
        <div className="flex flex-col mb-[30px]">
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
      <div className="hidden xl:block xl:w-[70vw] xl:mx-auto overflow-x-hidden">
        <div className="flex flex-row">
          <div className="basis-3/5 bg-[#eef7ff]">
            <p
              className="text-center text-[12px] pt-[35px] px-[100px] pb-[30px] xl:text-[22px] xl:font-semibold"
              style={{
                fontFamily: "Futura PT, sans-serif",
                fontStyle: "normal",
              }}
            >
              Our Professional Team has helped Hundreds of Sellers on Amazon to
              Avoid Failure and Maximize Potential Growth. Schedule a Free
              Meeting Now!
            </p>
            <div className="pt-[5px] pb-[5px] text-center relative top-[-10px]">
              <a
                href="#"
                className="py-[5px] px-[10px] bg-black text-white"
                style={{
                  fontFamily: "Futura PT, sans-serif",
                  fontStyle: "normal",
                }}
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="basis-1/1 bg-[#40b0fd] text-center w-[80%] mx-auto xl:w-[90%]">
                <div className="flex flex-row">
                  <div className="basis-1/2 py-[20px]">
                    <p className="font-bold text-md section_3_span">
                      <span className="text-[#40b0fd]">........</span>Or Direct
                    </p>
                    <p className="font-light text-2xl text-[white] tracking-widest pr-[10px] section_3_span">
                      Message
                    </p>
                  </div>
                  <div className="basis-1/2 py-[20px] text-center">
                    <a href="#" className="mx-[5px]">
                      <img
                        src="./WHatsapp.png"
                        alt="WHatsapp"
                        className="w-[60px] inline"
                      ></img>
                    </a>
                    <a href="#" className="mx-[5px]">
                      <img
                        src="./Facebook.png"
                        alt="Facebook.png"
                        className="w-[60px] inline"
                      ></img>
                    </a>
                    <a href="#" className="mx-[5px]">
                      <img
                        src="./LinkedIn.png"
                        alt="LinkedIn.png"
                        className="w-[60px] inline "
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              {/* bg-[#eef7ff]  */}
              <div className="basis-1/1 mt-[0px] w-[80%] mx-auto xl:w-[90%]">
                <div className="bg-[#eef7ff] relative top-[20px] left-[0px] h-[80px]">
                  <div className="bg-purple-500 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <label className="input flex items-center rounded-none">
                      <input
                        type="text"
                        className="grow placeholder-slate-600 py-[50px] w-[350px]"
                        placeholder="Email"
                      />
                      <button className="btn bg-[#40b0fd] btn-sm rounded-sm text-white">
                        Submit
                      </button>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
