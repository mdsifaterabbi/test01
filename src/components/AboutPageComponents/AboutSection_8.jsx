import Slider from "react-slick";
import "./AboutCustomCSS.css";

const AboutSection_8 = () => {
  var settings = {
    dots: false,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centeredItem: true,
  };
  var settings_2 = {
    dots: false,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centeredItem: true,
  };
  var settings_3 = {
    //for small devices
    dots: false,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centeredItem: true,
  };
  var settings_4 = {
    //for medium devices
    dots: false,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centeredItem: true,
  };
  var settings_5 = {
    //for large devices
    dots: false,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centeredItem: true,
  };

  return (
    <>
      {/* For Extra large Devices */}
      <div className="xl:w-[80vw] mx-auto xl:mt-[250px] hidden xl:block">
        <div>
          <Slider {...settings}>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Wahidur.png"
                    alt="Wahidur"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Nazma.png"
                    alt="Nazma.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* For extra small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] block sm:hidden">
        <div>
          <Slider {...settings_2}>
            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Wahidur.png"
                    alt="Wahidur"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Nazma.png"
                    alt="Nazma.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* For small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden sm:block md:hidden">
        <div>
          <Slider {...settings_3}>
            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Wahidur.png"
                    alt="Wahidur"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Nazma.png"
                    alt="Nazma.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* For medium Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden md:block lg:hidden">
        <div>
          <Slider {...settings_4}>
            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Wahidur.png"
                    alt="Wahidur"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Nazma.png"
                    alt="Nazma.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* For large Devices */}
      <div className="w-[80vw] mx-auto mt-[50px] hidden lg:block xl:hidden">
        <div>
          <Slider {...settings_5}>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Wahidur.png"
                    alt="Wahidur"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Nazma.png"
                    alt="Nazma.png"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Yeasin_Ali.png"
                    alt="Yeasin_Ali"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <img
                    src="../AboutPageLogos/Abu_Naeem_Rabbi.png"
                    alt="Abu_Naeem_Rabbi"
                    className="pt-[30px]"
                  />
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white text-[17px] xl:font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <img
                      src="../AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AboutSection_8;
