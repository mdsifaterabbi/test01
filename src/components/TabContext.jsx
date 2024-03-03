import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";
import OrderForm from "./OrderForm";

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
                      className="w-[90vw] mx-auto"
                      src="../updated/Fba_Consultancy.png"
                      alt="Fba_Consultancy"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-[16px]">
                      Amazon FBA Consultancy
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/PPC.png"
                      alt="PPC"
                      className="w-[90vw] mx-auto"
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
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Product_Sorcing.png"
                      alt="Product_Sorcing.png"
                      className="w-[90vw] mx-auto"
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
                      suppliers in the market for you at a competitive price.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
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
                      src="../updated/Facebook_Ads.png"
                      alt="Facebook_Ads"
                      className="w-[90vw] mx-auto"
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
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Google_Ads.png"
                      alt="Google_Ads"
                      className="w-[90vw] mx-auto"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Google Ads Campaigns
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      We will research highly profitable products for your
                      brands that will have low competition and high demand in
                      the market. We will find out the unique selling
                      proposition for your product and it will be different from
                      your competitor.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Local_SEO.png"
                      alt="Local_SEO"
                      className="w-[90vw] mx-auto"
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
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
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
                      Amazon Product Listing
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Maximize Your E-commerce Potential Unlock the full
                      potential of your Amazon FBA business with Esaviour
                      Limited. Our consultancy services are designed to optimize
                      your product listings, enhance visibility, and boost
                      sales. Trust our expertise to navigate the intricacies of
                      the world’s largest online marketplace.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      className="w-[90vw] mx-auto"
                      src="../updated/Social_Media_Design.png"
                      alt="Social_Media_Design.png"
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
                      content. Highlight your products by customizing your
                      social media plan with our graphics design team.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
                  </div>
                </div>
              </div>
              <div>
                <div className="card card-compact w-[90vw] bg-base-100 shadow-xl mx-auto">
                  <figure>
                    <img
                      src="./updated/Product_package_Design2.png"
                      alt="Product_package_Design2.png"
                      className="w-[50%]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-3xl">
                      Product Package Design
                    </h2>

                    <p className="text-[12px] text-white opacity-70">
                      Your product package tells a lot about your brand and your
                      representation. Our designers are well-equipped to create
                      smart, responsive, and lucrative packages for your Amazon
                      product.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderForm />
                        </div>
                        {/* <p className="py-4">
                          Press ESC key or click on ✕ button to close
                        </p> */}
                      </div>
                    </dialog>
                    {/* ================== Order placement Model ended here ============== */}
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
