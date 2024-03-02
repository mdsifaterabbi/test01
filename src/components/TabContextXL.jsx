import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";

import "../MyTabOverlay.css";

const TabContextXL = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="tab-container bg-[#f4faff] px-4 py-8 xl:w-[80vw] xl:mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">
          Our Best Selling Services
        </h2>

        {/* Tab list container */}
        <div className="tab-list bg-[#f4faff] pb-4">
          <Tabs>
            <TabList className="flex justify-center mb-[50px]">
              {[
                "Amazon FBA",
                "Digital Marketing",
                "Graphics Design",
                "Web Development",
              ].map((tabName, index) => (
                <Tab
                  key={tabName}
                  className={`lg:px-[50px] border-b-[2px] border-b-sky-300 cursor-pointer ${
                    selectedIndex === index
                      ? "bg-[#f4faff] text-black font-bold border-b-[4px] border-b-sky-800"
                      : "border-b-[2px] border-b-sky-300"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tabName}
                </Tab>
              ))}
            </TabList>
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container pb-[0px] bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonFBA2.png"
                          alt="AmazonFBA.png"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Amazon Hover on me
                        </h2>
                        {/* <span className="text-white font-normal text-xl opacity-80">
                          Consultancy
                        </span> */}
                        <span className="text-black font-normal text-xl opacity-80">
                          Consultancy
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProduct2.png"
                          alt="AmazonProduct"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Amazon Product
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Photography
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProductListing2.png"
                          alt="AmazonProductListing"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Amazon Product
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Listing Design
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </TabPanel>
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0 bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonFBA2.png"
                          alt="AmazonFBA.png"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Digital Marketing
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          One
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProductListing2.png"
                          alt="AmazonProductListing"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Digital Marketing
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Two
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProduct2.png"
                          alt="AmazonProduct"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Digital Marketing
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Three
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </TabPanel>
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0  bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProduct2.png"
                          alt="AmazonProduct"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Graphics Design
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          One
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProductListing2.png"
                          alt="AmazonProductListing"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Graphics Design
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Two
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProductListing2.png"
                          alt="AmazonProductListing"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Graphics Design
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Three
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </TabPanel>
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0  bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProduct2.png"
                          alt="AmazonProduct"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Web Development
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          One
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProductListing2.png"
                          alt="AmazonProductListing"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Web Development
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Two
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl mx-auto">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./AmazonProductListing2.png"
                          alt="AmazonProductListing"
                          className="w-[300px] rounded-md"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-3xl opacity-80">
                          Web Development
                        </h2>
                        <span className="text-black font-normal text-xl opacity-80">
                          Three
                        </span>
                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="text-center bg-[#f4faff] xl:w-[80vw] xl:mx-auto">
        <button className="btn btn-sm btn-neutral rounded-none my-[50px]">
          View All Services
        </button>
      </div>
    </>
  );
};

export default TabContextXL;
