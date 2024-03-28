import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";
import OrderFormXSM from "./OrderFormXSM";
//import OrderForm from "./OrderForm";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginRight: "35px",
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
        marginLeft: "35px",
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
      <div className="pb-[25px] pt-[25px] mt-[12px] text-center w-[90vw] mx-auto">
        <span className="TabContextFontSpan text-[30px]">
          Our Best Selling B2B Digital Marketing{" "}
          <span className="text-[#40b0fd] font-extrabold text-[30px] tracking-tighter">
            Services
          </span>
        </span>
      </div>

      <Tabs>
        <TabList className=" pb-[10px] TabContextTabFont text-[18px] w-[50vw] mx-auto text-center">
          {[
            "Amazon FBA",
            "Digital Marketing",
            "Graphics Design",
            "Web Development",
          ].map((tabName, index) => (
            <Tab
              key={tabName}
              className={`px-[10px] border-b-[2px] border-b-sky-300 my-[15px] cursor-pointer ${
                selectedIndex === index
                  ? "bg-[#faf7f5] text-sky-500 font-bold border-b-[4px] border-b-sky-800"
                  : "border-b-[2px] border-b-sky-300"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tabName}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="slider-container pt-[20px] pb-[0px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      className="w-[60vw] mx-auto my-[20px]"
                      src="../updated/amazon_fba_consultancy.png"
                      alt="amazon_fba_consultancy"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Amazon FBA Consultancy
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
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
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/PPC.png"
                      alt="PPC"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      PPC Campaigns
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      Pay-per-click (PPC) advertising (Sponsored Ads) is a
                      common tool for e-commerce merchants. However, if you lack
                      the necessary skills and experience, you can jeopardize
                      your whole business instead. Our Sponsored Ad campaign
                      guarantees you a decent click-through and conversion rate
                      within a convenient price range.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Product_Sorcing.png"
                      alt="Product_Sorcing.png"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Product Sourcing
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      Leave some of your major concerns to us, like choosing the
                      right supplier for your products. As FBA specialists, we
                      will source from the most reliable and affordable
                      suppliers in the market for you at a competitive price.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
          <div className="slider-container pt-[20px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Facebook_Ads.png"
                      alt="Facebook_Ads"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Facebook Ads Campaigns
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      We will research highly profitable products for your
                      brands that will have low competition and high demand in
                      the market. We will find out the unique selling
                      proposition for your product.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Google_Ads.png"
                      alt="Google_Ads"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Google Ads Campaigns
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
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
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Local_SEO.png"
                      alt="Local_SEO"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Amazon Product Listing Design
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      Professional guidance to optimize your product listings to
                      enhance the visibility on Amazon. The best e-commerce
                      optimization techniques we are providing.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
        {/* ============= 3rd panel for graphics design =============== */}
        <TabPanel>
          <div className="slider-container pt-[20px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/amazon_product_listing_design.png"
                      alt="amazon_product_listing_design"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Amazon Product Listing Design
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
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
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      className="w-[60vw] mx-auto my-[20px]"
                      src="../updated/product_package_design.png"
                      alt="product_package_design.png"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Product Package Design
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      Your product package tells a lot about your brand and your
                      representation. Our designers are well-equipped to create
                      smart, responsive, and lucrative packages for your Amazon
                      product. Leave the technical aspects of how the package
                      looks to us so you can concentrate on more important areas
                      like the delivery and product quality.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/social_media_post_design.png"
                      alt="social_media_post_design"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Social Media Post Design
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
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
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
        {/* 4th Tap panel for web development */}
        <TabPanel>
          <div className="slider-container pt-[20px] bg-[#ffffff] w-[100vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Wordpress_website2.png"
                      alt="Wordpress_website2"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Wordpress Website
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      You must take approval for your brand name and trademark
                      from amazon and it’s essential if you want to create your
                      private label products and build a brand on Amazon.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      className="w-[60vw] mx-auto my-[20px]"
                      src="../updated/MERN-logo-1.png"
                      alt="MERN-logo-1"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      MERN Stack Development
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      If the technical aspects like UPC/FNSKU are not handled
                      properly, you can face serious troubles to the extent of
                      registry suspension. We make sure your UPC and FNSKU
                      labels are correct and comply with Amazon’s guidelines.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
                <div className="card card-compact w-[70vw] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/shopify_store.png"
                      alt="shopify"
                      className="w-[60vw] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="text-white text-[20px] pb-[10px]">
                      Shopify Store
                    </h2>

                    <p className="text-[15px] text-white opacity-70">
                      We will research highly profitable products for your
                      brands that will have low competition and high demand in
                      the market. We will find out the unique selling
                      proposition for your product and it will be different from
                      others.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_xsm").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_xsm" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <OrderFormXSM />
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
        <div className="text-center bg-[#ffffff] pb-[25px] w-[100vw] mx-auto">
          <button className="btn btn-sm btn-neutral rounded-none my-[10px]">
            View All Services
          </button>
        </div>
      </Tabs>
    </>
  );
};

export default TabContext;
