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

const Footer1 = () => {
  return (
    <>
      <Slider
        {...settings}
        className="border border-t-[5px] border-b-[5px] py-[15px] border-[rgba(82, 83, 86,0.5)]"
      >
        <div>
          <h3 className="text-center">
            <img
              src="./Clutch.png"
              alt="clutch"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./Trustppailot.png"
              alt="Trustppailot.png"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./Google.png"
              alt="Google.png"
              className="w-[80px] mx-auto"
            ></img>
          </h3>
        </div>
      </Slider>
      <div className="flex flex-col sm:hidden mb-[50px]">
        <div className="basis-1/1 bg-[#EEF7FF]">
          <p className="text-center text-[12px] px-[5px] py-[10px]">
            Our Professional Team has helped Hundreds of Sellers on Amazon to
            Avoid Failure and Maximize Potential Growth. Schedule a Free Meeting
            Now!
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
              <p className="font-bold text-sm">Or Direct</p>
              <p className="font-light text-xl text-[white] tracking-widest pr-[10px]">
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
        <div className="basis-1/1 bg-[#eef7ff] py-[10px]">
          <label className="input input-bordered flex items-center rounded-none w-[95%] mx-auto">
            <input
              type="text"
              className="grow placeholder-slate-600"
              placeholder="Email"
            />
            <button className="btn btn-success btn-sm rounded-sm">
              Submit
            </button>
          </label>
        </div>
      </div>
      {/* ============ for small to upper device ============= */}
      <div className="hidden sm:block">
        <div className="flex flex-row">
          <div className="basis-1/2 border bg-[#eef7ff]">
            <p className="text-center text-[12px] px-[5px] py-[10px]">
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
              <div className="basis-1/1 border bg-[#40b0fd] text-center">
                <div className="flex flex-row">
                  <div className="basis-1/2 py-[15px]">
                    <p className="font-bold text-sm">Or Direct</p>
                    <p className="font-light text-xl text-[white] tracking-widest pr-[10px]">
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
              <div className="basis-1/1 border my-[5px] bg-[#eef7ff]">
                <label className="input input-bordered flex items-center rounded-none w-[95%] mx-auto my-[15px]">
                  <input
                    type="text"
                    className="grow placeholder-slate-600"
                    placeholder="Email"
                  />
                  <button className="btn btn-success btn-sm rounded-sm">
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
