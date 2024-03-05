import Slider from "react-slick";

const AboutSectionSliderXL = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-[90vw] mx-auto">
        <Slider {...settings}>
          <div className="">
            <div className="w-[300px] h-[300px] border-[1px] border-black mx-auto rounded-2xl flex items-center">
              <div className="mx-auto">
                <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  500+
                </h1>
                <p className="font-bold text-[18px] text-center">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[300px] border-[1px] border-black mx-auto rounded-2xl flex items-center">
              <div className="mx-auto">
                <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  27+
                </h1>
                <p className="font-bold text-[18px] text-center">
                  Brains to Support
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[300px] border-[1px] border-black mx-auto rounded-2xl flex items-center">
              <div className="mx-auto">
                <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  100+
                </h1>
                <p className="font-bold text-[18px] text-center">
                  Website Developed
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[300px] border-[1px] border-black mx-auto rounded-2xl flex items-center">
              <div className="mx-auto">
                <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  300+
                </h1>
                <p className="font-bold text-[18px] text-center">
                  Package Design
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[300px] border-[1px] border-black mx-auto rounded-2xl flex items-center">
              <div className="mx-auto">
                <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  150+
                </h1>
                <p className="font-bold text-[18px] text-center">
                  Product Design
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[300px] border-[1px] border-black mx-auto rounded-2xl flex items-center">
              <div className="mx-auto">
                <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  500+
                </h1>
                <p className="font-bold text-[18px] text-center">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[300px] border-[1px] border-black mx-auto rounded-2xl flex items-center">
              <div className="mx-auto">
                <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  300+
                </h1>
                <p className="font-bold text-[18px] text-center">
                  Package Design
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutSectionSliderXL;
