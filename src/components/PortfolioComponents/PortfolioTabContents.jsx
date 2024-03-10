import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";
import PortfolioGallery from "./PortfolioGallery";

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
  const settings_web_panel = {
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
                  "Product Package Design",
                  "Web Development",
                ].map((tabName, index) => (
                  <Tab
                    key={tabName}
                    className={`lg:px-[15px] lg:mx-[5px] rounded-md cursor-pointer ${
                      selectedIndex === index
                        ? "font-bold border-none bg-sky-500 text-white"
                        : "border-[1px] border-black"
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tabName}
                  </Tab>
                ))}
              </TabList>
              {/* ============ First Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff] py-[25px]">
                <div>
                  <h1 className="text-center text-[#31b3fb] xl:text-[32px] xl:font-semibold">
                    BRANDING DESIGN
                  </h1>
                  <p className="text-center xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    Crafting compelling and distinctive brand identities that
                    resonate with your audience. Our branding designs seamlessly
                    blend creativity andstrategy to visually communicate your
                    brand’s essence, fostering recognition, trust, and lasting
                    connections.
                  </p>
                </div>
                <div className="pb-[0px] xl:w-[70vw] xl:mx-auto hidden lg:block xl:block">
                  <PortfolioGallery />
                </div>
              </TabPanel>

              {/* ============ Social Media Design Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Social Media Design
                  </h1>
                  <p className="text-center lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamiclandscape of e-commerce and digital
                    presence. With a commitment to excellence and innovation, we
                    offer a suite of services that empowerbusinesses to thrive
                    in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0 bg-[#ffffff] lg:w-[90vw] xl:w-[70vw] lg:mx-auto xl:mx-auto">
                  <Slider {...settings}>
                    <div>
                      <div className="card card-compact lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
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
                      <div className="card card-compact lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
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
                      <div className="card card-compact lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
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
                      <div className="card card-compact lg:w-[20vw] xl:w-[15vw] bg-base-100  mx-auto shadow-xl h-auto">
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
              {/* ============ Listing Images Design Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Amazon Listing Image Design
                  </h1>
                  <p className="text-center lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
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
                      <div className="card card-compact w-[50vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_1.jpeg"
                            alt="Amazon_1"
                            className="xl:w-[100%] lg:w-[100%] lg:h-[450px] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[50vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_2.jpeg"
                            alt="Amazon_2"
                            className="xl:w-[100%] lg:w-[100%] lg:h-[450px] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[50vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_3.jpeg"
                            alt="Amazon_3"
                            className="xl:w-[100%] lg:w-[100%] lg:h-[450px] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact w-[50vw] xl:w-[50vw] lg:w-[90vw] bg-base-100 mx-auto shadow-xl lg:h-[450px] xl:h-[500px]">
                        <figure className="bg-[#f4f9fe] py-[0px]">
                          <img
                            src="../PortfolioImages/Amazon_4.jpeg"
                            alt="Amazon_4"
                            className="xl:w-[100%] lg:w-[100%] lg:h-[450px] xl:h-[500px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                  </Slider>
                </div>
              </TabPanel>
              {/* ============ Amazon A+ Content Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Amazon EBC Design
                  </h1>
                  <p className="text-center lg:px-[150px] lg:pt-[10px] lg:pb-[30px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and
                    digitalpresence. With a commitment to excellence and
                    innovation, we offer a suite of services that empower
                    businesses to thrive in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0  bg-[#ffffff] lg:w-[70vw] lg:mx-auto xl:w-[40vw] xl:mx-auto">
                  <Slider {...settings_fourth_panel}>
                    <div>
                      <div className="card card-compact lg:w-[35vw] xl:w-[20vw] bg-base-100 mx-auto">
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
                      <div className="card card-compact lg:w-[35vw] xl:w-[20vw] bg-base-100 mx-auto ">
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
                      <div className="card card-compact lg:w-[35vw] xl:w-[20vw] bg-base-100 mx-auto">
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
              {/* ============ Product Package Design Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] lg:text-[24px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Product packaging Design
                  </h1>
                  <p className="text-center lg:px-[100px] lg:pt-[10px] lg:pb-[25px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and digital
                    presence. With acommitment to excellence and innovation, we
                    offer a suite of services that empower businesses to thrive
                    in the digital era.
                  </p>
                </div>
                <div className="p-0 lg:w-[95vw] lg:mx-auto xl:w-[70vw] xl:mx-auto bg-[#ffffff]">
                  <div>
                    <div className="card card-compact lg:w-[95vw] xl:w-[70vw] bg-base-100 mx-auto">
                      <figure className="bg-[#ffffff] py-[0px]">
                        <img
                          src="../PortfolioImages/product_package_design.png"
                          alt="product_package_design.png"
                          className="lg:w-[80%] xl:w-[70%] mx-auto"
                        ></img>
                      </figure>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* ============ webdevelopment Tab panel starts from here ================ */}
              <TabPanel className="xl:bg-[#ffffff]">
                <div>
                  <h1 className="text-center text-[#31b3fb] lg:text-[26px] lg:font-semibold xl:text-[32px] xl:font-semibold">
                    Web Development
                  </h1>
                  <p className="text-center lg:px-[100px] lg:pt-[10px] lg:pb-[25px] lg:font-semibold lg:text-[14px] xl:px-[300px] xl:pt-[10px] xl:pb-[30px] xl:font-semibold xl:text-[16px]">
                    At Esaviour Limited, we are more than just a digital
                    business development company; we are your dedicated ally in
                    navigating the dynamic landscape of e-commerce and
                    digitalpresence. With a commitment to excellence and
                    innovation, we offer a suite of services that empower
                    businesses to thrive in the digital era.
                  </p>
                </div>
                <div className="slider-container p-0  bg-[#ffffff] xl:w-[40vw] xl:mx-auto">
                  <Slider {...settings_web_panel}>
                    <div>
                      <div className="card card-compact lg:w-[40vw] xl:w-[20vw] bg-base-100 mx-auto">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/web1.png"
                            alt="web1"
                            className="w-[90%] lg:h-[500px] xl:h-[550px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact lg:w-[40vw] xl:w-[20vw] mx-auto bg-base-100">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/web2.png"
                            alt="web2"
                            className="w-[90%] lg:h-[500px] xl:h-[550px]"
                          ></img>
                        </figure>
                      </div>
                    </div>
                    <div>
                      <div className="card card-compact lg:border lg:w-[40vw] xl:w-[20vw] mx-auto bg-base-100">
                        <figure className="bg-[#ffffff] py-[0px]">
                          <img
                            src="../PortfolioImages/web3.png"
                            alt="../PortfolioImages/web3"
                            className="w-[90%] lg:h-[500px] xl:h-[550px]"
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
