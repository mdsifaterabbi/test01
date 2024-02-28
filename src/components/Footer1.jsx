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
      <div className="float float-row float-wraP">
        <div className="basis-3/5 bg-[#EEF7FF]">
          <p className="text-center text-[12px] px-[5px] py-[10px]">
            Our Professional Team has helped Hundreds of Sellers on Amazon to
            Avoid Failure and Maximize Potential Growth. Schedule a Free Meeting
            Now!
          </p>
          <div className="w-[120px] mx-auto py-[10px]">
            <button className="btn btn-sm rounded-none btn-active btn-neutral ml-[5px]">
              Schedule a meeting
            </button>
          </div>
        </div>
        <div className="basis-2/5">
          <div className="card w-[90%] bg-purple-100 shadow-xl mx-auto">
            <div className="bg-[#40b0fd] py-[20px]">
              {/* <div className="">
                <p className="text-center font-bold">
                  Or Direct
                  <span className="text-white font-light text-3xl">
                    {" "}
                    Message
                  </span>
                </p>
              </div> */}
              <div className="w-[90vw] text-center">
                <p className="inline text-[12px] font-bold">
                  Or Direct
                  <span className="text-white font-light text-xl">
                    &nbsp;Message&nbsp;&nbsp;&nbsp;
                  </span>
                </p>
                <a href="" className="mx-[2px]">
                  <img
                    src="./WHatsapp.png"
                    alt="WHatsapp"
                    className="inline w-[25px]"
                  ></img>
                </a>
                <a href="" className="mx-[2px]">
                  <img
                    src="./Facebook.png"
                    alt="Facebook"
                    className="inline w-[25px]"
                  ></img>
                </a>
                <a href="" className="mx-[2px]">
                  <img
                    src="./LinkedIn.png"
                    alt="LinkedIn"
                    className="inline w-[30px]"
                  ></img>
                </a>
              </div>
            </div>
            <div className="card-body items-center text-center bg-[#ebf6ff]">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
