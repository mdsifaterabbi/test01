import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginRight: "15px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginLeft: "15px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const TabContext = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="pb-[25px] pt-[25px] mt-[12px] text-center bg-[#cee9ff] w-[90vw] mx-auto">
        <span className="TabContextFontSpan text-[22px]">
          Our Best Selling&nbsp;
          <span className=" text-sky-500 TabContextFontSpan2">Services</span>
        </span>
      </div>

      <Tabs>
        
        <TabList className="flex justify-center bg-[#cee9ff] pb-[10px] TabContextTabFont text-[12px] w-[90vw] mx-auto">
          {["Amazon FBA", "Digital Marketing", "Graphics Design"].map(
            (tabName, index) => (
              <Tab
                key={tabName}
                className={`px-[10px] border-b-[2px] border-b-sky-300 cursor-pointer ${
                  selectedIndex === index
                    ? "bg-[#cee9ff] text-black font-bold border-b-[4px] border-b-sky-800"
                    : "border-b-[2px] border-b-sky-300"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tabName}
              </Tab>
            )
          )}
        </TabList>

        <TabPanel>
          <div className="slider-container pb-[0px] bg-[#cee9ff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonFBA2.png"
                      alt="AmazonFBA.png"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Amazon FBA
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      Consultancy
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonProduct2.png"
                      alt="AmazonProduct"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Amazon Product
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      Photography
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonProductListing2.png"
                      alt="AmazonProductListing"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Amazon Product
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      Listing Design
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="slider-container p-0 bg-[#cee9ff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonFBA2.png"
                      alt="AmazonFBA.png"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Digital Marketing
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      One
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonProductListing2.png"
                      alt="AmazonProductListing"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Digital Marketing
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      Two
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonProduct2.png"
                      alt="AmazonProduct"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Digital Marketing
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      Three
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="slider-container p-0 bg-[#cee9ff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonProduct2.png"
                      alt="AmazonProduct"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Graphics Design
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      One
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonProductListing2.png"
                      alt="AmazonProductListing"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Graphics Design
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      Two
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./AmazonProductListing2.png"
                      alt="AmazonProductListing"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Graphics Design
                    </h2>
                    <span className="text-white font-normal text-xl opacity-80">
                      Three
                    </span>
                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world's largest online marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </TabPanel>
        <div className="text-center bg-[#cee9ff] pb-[25px] w-[90vw] mx-auto">
          <button className="btn btn-sm btn-neutral rounded-none my-[10px]">
            View All Services
          </button>
        </div>
      </Tabs>
    </>
  );
};

export default TabContext;
