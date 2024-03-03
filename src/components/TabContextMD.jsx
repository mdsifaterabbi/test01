import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";

const TabContextMD = () => {
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
      <div className="pb-[25px] mt-[12px] text-center bg-[#cee9ff] w-[90vw] mx-auto">
        <span className="font-thin text-xl">
          Our Best Selling&nbsp;
          <span className=" text-sky-500 font-bold">Services</span>
        </span>
      </div>
      <Tabs>
        {/* <TabList className="bg-[#cee9ff] pb-[10px]">
          <Tab>Amazon FBA</Tab>

          <Tab>Digital Marketing</Tab>

          <Tab>Graphics Design</Tab>
        </TabList> */}
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
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="../updated/Fba_Consultancy.png"
                      alt="Fba_Consultancy"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Amazon FBA Consultancy
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      MMaximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited.We are here for helping you.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="../updated/PPC.png"
                      alt="PPC"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      PPC Campaigns
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Pay-per-click (PPC) advertising (Sponsored Ads) is a
                      common tool for e-commerce merchants. However, if you lack
                      the necessary skills and experience, you can jeopardize
                      your whole business instead.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="../updated/Product_Sorcing.png"
                      alt="Product_Sorcing.png"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Product Sourcing
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Leave some of your major concerns to us, like choosing the
                      right supplier for your products. As FBA specialists, we
                      will source from the most reliable and affordable
                      suppliers at a competitive price.
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
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="../updated/Facebook_Ads.png"
                      alt="Facebook_Ads"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Facebook Ads Campaigns
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      We will research highly profitable products for your
                      brands that will have low competition and high demand in
                      the market. We will find out the unique selling
                      proposition for your product.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="../updated/Google_Ads.png"
                      alt="Google_Ads"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Google Ads Campaigns
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      We will research highly profitable products for your
                      brands that will have low competition and high demand in
                      the market. We will find out the unique selling
                      proposition for your product and it will be different.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="../updated/Local_SEO.png"
                      alt="Local_SEO"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Amazon Product Listing Design
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Professional guidance to optimize your product listings to
                      enhance the visibility on Amazon. The best e-commerce
                      optimization techniques we are providing.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="slider-container p-0  bg-[#cee9ff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                {/* <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="./AmazonProduct2.png"
                      alt="AmazonProduct"
                      className="w-[200px] rounded-md "
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Amazon Product Listing
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                    the overalll business.
                    </p>
                  </div>
                </div> */}
                
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                     src="./AmazonProduct2.png"
                     alt="AmazonProduct"
                     className="h-[150px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Amazon Product Listing
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      the overalll business.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="../updated/Social_Media_Design.png"
                      alt="Social_Media_Design"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Spcial Media post Again
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Social media is all about visuals and drawing the
                      attention of a huge customer base. Our social media
                      package includes graphics design for posts, creating page
                      layouts, making infographics and graphics for video
                      content.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[27vw] bg-base-100 shadow-xl mx-auto">
                  <figure className="bg-[#cee9ff] pt-[20px]">
                    <img
                      src="./updated/Product_package_Design2.png"
                      alt="Product_package_Design2.png"
                      className="w-[250px] rounded-md"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Product Package Design
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Your product package tells a lot about your brand and your
                      representation. Our designers are well-equipped to create
                      smart, responsive, and lucrative packages for your Amazon
                      product.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </TabPanel>
      </Tabs>
      <div className="text-center bg-[#cee9ff] w-[90vw] mx-auto">
        <button className="btn btn-sm btn-neutral rounded-none my-[50px]">
          View All Services
        </button>
      </div>
    </>
  );
};

export default TabContextMD;
