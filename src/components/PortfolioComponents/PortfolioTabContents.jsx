import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";

// import "../../MyTabOverlay.css";
// import OrderForm from "../OrderForm";

const PortfolioTabContents = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings_third_panel = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings_fourth_panel = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="w-[100vw] bg-[#ffffff]">
        <div className="tab-container bg-[#ffffff] px-4 py-8 xl:w-[80vw] xl:mx-auto mb-[100px]">
          {/* Tab list container */}
          <div className="tab-list bg-[#ffffff] pb-4">
            <Tabs>
              <TabList className="flex justify-center mb-[50px]">
                {[
                  "Branding Design",
                  "Social Media Design",
                  "Listing Images Design",
                  "Amazon A+ Content",
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
              {/* ============ First Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff] py-[25px]">
                <div className="slider-container pb-[0px] bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                  <Slider {...settings}>
                    <div>
                      <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                        <figure className="bg-[#ffffff] py-[40px]">
                          <img
                            src="../updated/Fba_Consultancy.png"
                            alt="Fba_Consultancy"
                            className="w-[50%]"
                          ></img>
                        </figure>
                        <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                          <h2
                            className="text-black text-xl opacity-80"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                              fontWeight: "bold",
                              fontStyle: "normal",
                            }}
                          >
                            Amazon FBA Consultancy
                          </h2>

                          <p
                            className="text-[12px] text-black opacity-70 xl:text-[14px]"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                              fontWeight: 400,
                              fontStyle: "normal",
                            }}
                          >
                            Maximize Your E-commerce Potential Unlock the full
                            potential of your Amazon FBA business with Esaviour
                            Limited. Our consultancy services are designed to
                            optimize your product listings, enhance visibility,
                            and boost sales.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                        <figure className="bg-[#ffffff] py-[20px]">
                          <img
                            src="../updated/PPC.png"
                            alt="PPC"
                            className="w-[50%]"
                          ></img>
                        </figure>
                        <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                          <h2
                            className="text-black text-xl opacity-80"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                              fontWeight: "bold",
                              fontStyle: "normal",
                            }}
                          >
                            PPC Campaigns
                          </h2>

                          <p
                            className="text-[12px] text-black opacity-70 xl:text-[14px]"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                              fontWeight: 400,
                              fontStyle: "normal",
                            }}
                          >
                            Pay-per-click (PPC) advertising (Sponsored Ads) is a
                            common tool for e-commerce merchants. However, if
                            you lack the necessary skills and experience, you
                            can jeopardize your whole business instead.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[20vw] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                        <figure className="bg-[#ffffff] py-[20px]">
                          <img
                            src="../updated/Product_Sorcing.png"
                            alt="Product_Sorcing.png"
                            className="w-[50%]"
                          ></img>
                        </figure>
                        <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                          <h2
                            className="text-black text-xl opacity-80"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                              fontWeight: "bold",
                              fontStyle: "normal",
                            }}
                          >
                            Product Sourcing
                          </h2>

                          <p
                            className="text-[12px] text-black opacity-70 xl:text-[14px]"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                              fontWeight: 400,
                              fontStyle: "normal",
                            }}
                          >
                            Leave some of your major concerns to us, like
                            choosing the right supplier for your products. As
                            FBA specialists, we will source from the most
                            reliable and affordable suppliers in the market for
                            you at a competitive price.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </TabPanel>
              {/* ============ Second Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] xl:text-[32px] xl:font-semibold">
                    Social Media Design
                  </h1>
                  <p className="text-center xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamiclandscape of e-commerce and digital
                    presence. With a commitment to excellence and innovation, we
                    offer a suite of services that empowerbusinesses to thrive
                    in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0 bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                  <Slider {...settings}>
                    <div>
                      <div className="card card-compact w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/merry_christmas.png"
                            alt="merry_christmas"
                            className="w-[100%]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/happy_new_year.png"
                            alt="happy_new_year.png"
                            className="w-[100%]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/digital_marketing.png"
                            alt="digital_marketing"
                            className="w-[100%]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/build_your_brand.png"
                            alt="build_your_brand.png"
                            className="w-[100%]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                  </Slider>
                </div>
              </TabPanel>
              {/* ============ Third Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] xl:text-[32px] xl:font-semibold">
                    Amazon Listing Image Design
                  </h1>
                  <p className="text-center xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamiclandscape of e-commerce and digital
                    presence. With a commitment to excellence and innovation, we
                    offer a suite of services that empowerbusinesses to thrive
                    in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0  bg-[#ffffff] xl:w-[50vw] xl:mx-auto">
                  <Slider {...settings_third_panel}>
                    <div className="">
                      <div className="card card-compact w-[50vw] bg-base-100 mx-auto shadow-xl xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_1.jpeg"
                            alt="Amazon_1"
                            className="xl:w-[100vw] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[50vw] bg-base-100 mx-auto shadow-xl xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_2.jpeg"
                            alt="Amazon_2"
                            className="xl:w-[100vw] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[50vw] bg-base-100 mx-auto shadow-xl xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_3.jpeg"
                            alt="Amazon_3"
                            className="xl:w-[100vw] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[50vw] bg-base-100 mx-auto shadow-xl xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_4.jpeg"
                            alt="Amazon_4"
                            className="xl:w-[100vw] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                  </Slider>
                </div>
              </TabPanel>
              {/* ============ Fourth Tab panel starts from here #f4faff ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] xl:text-[32px] xl:font-semibold">
                    Amazon EBC Design
                  </h1>
                  <p className="text-center xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and
                    digitalpresence. With a commitment to excellence and
                    innovation, we offer a suite of services that empower
                    businesses to thrive in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0  bg-[#ffffff] xl:w-[40vw] xl:mx-auto">
                  {/* <div>
                  <h1 className="text-center text-[#31b3fb] xl:text-[32px] xl:font-semibold">
                    Amazon EBC Design
                  </h1>
                  <p className="text-center xl:px-[200px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and
                    digitalpresence. With a commitment to excellence and
                    innovation, we offer a suite of services that empower
                    businesses to thrive in the digital era.
                  </p>
                </div> */}
                  <Slider {...settings_fourth_panel}>
                    <div>
                      <div className="card card-compact w-[20vw] bg-base-100 mx-auto">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/amazon_ap_1.png"
                            alt="amazon_ap_1"
                            className="w-[80%] h-[900px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[20vw] bg-base-100 mx-auto ">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/amazon_ap_2.png"
                            alt="amazon_ap_2"
                            className="w-[80%] h-[900px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[20vw] bg-base-100 mx-auto">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/amazon_ap_3.png"
                            alt="../PortfolioImages/amazon_ap_3"
                            className="w-[80%] h-[900px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                  </Slider>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioTabContents;
