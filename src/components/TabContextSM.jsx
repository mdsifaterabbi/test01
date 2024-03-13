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
        marginRight: "38px",
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
        marginLeft: "38px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const TabContextSM = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="mt-[12px] text-center bg-[#faf7f5] w-[100vw] mx-auto pt-[20px] pb-[20px]">
        <span className="font-thin text-2xl">
          Our Best Selling B2B Digital Marketing{" "}
          <span className="text-[#40b0fd] font-extrabold text-[22px]">
            Services
          </span>
        </span>
      </div>
      <Tabs>
        <TabList className="flex justify-center bg-[#f4faff] py-[30px] TabContextTabFont text-[12px] w-[90vw] mx-auto">
          {[
            "Amazon FBA",
            "Digital Marketing",
            "Graphics Design",
            "Web Development",
          ].map((tabName, index) => (
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
          ))}
        </TabList>

        <TabPanel>
          <div className="slider-container pb-[0px] bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/amazon_fba_consultancy.png"
                      alt="amazon_fba_consultancy"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">Amazon FBA</h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Consultancy
                    </span> */}
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/PPC.png"
                      alt="PPC"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      PPC Campaigns
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Photography
                    </span> */}
                    <p className="text-[12px] text-white opacity-70">
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Product_Sorcing.png"
                      alt="Product_Sourcing"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Product Sourcing
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Listing Design
                    </span> */}
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
          <div className="slider-container p-0 bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Facebook_Ads.png"
                      alt="Facebook_Ads"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Facebook Ads Campaigns
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      One
                    </span> */}
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Google_Ads.png"
                      alt="Google_Ads"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Google Ads Campaigns
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Two
                    </span> */}
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Local_SEO.png"
                      alt="Local_SEO"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Amazon Product Listing Design
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Three
                    </span> */}
                    <p className="text-[12px] text-white opacity-70">
                      Professional guidance to optimize your product listings to
                      enhance the visibility on Amazon. The best e-commerce
                      optimization techniques we are providing.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
        {/* ============= 3rd panel for graphics design =============== */}
        <TabPanel>
          <div className="slider-container p-0  bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/amazon_product_listing_design.png"
                      alt="amazon_product_listing_design"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Amazon Product Listing Design
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      One
                    </span> */}
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/product_package_design.png"
                      alt="product_package_design"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Product Package Design
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Two
                    </span> */}
                    <p className="text-[12px] text-white opacity-70">
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/social_media_post_design.png"
                      alt="social_media_post_design"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Social Media Post Design
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Three
                    </span> */}
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
        {/* 4th Tabpanel for Web Development */}
        <TabPanel>
          <div className="slider-container p-0  bg-[#f4faff] w-[90vw] mx-auto">
            <Slider {...settings}>
              <div>
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/Wordpress_website2.png"
                      alt="Wordpress_website2"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Wordpress Website
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      One
                    </span> */}
                    <p className="text-[12px] text-white opacity-70">
                      You must take approval for your brand name and trademark
                      from amazon and it’s essential if you want to create your
                      private label products and build a brand on Amazon.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/MERN-logo-1.png"
                      alt="MERN-logo-1"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      MERN Stack Development
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Two
                    </span> */}
                    <p className="text-[12px] text-white opacity-70">
                      If the technical aspects like UPC/FNSKU are not handled
                      properly, you can face serious troubles to the extent of
                      registry suspension. We make sure your UPC and FNSKU
                      labels are correct and comply with Amazon’s guidelines.
                    </p>
                    {/* ===================== Order Placement Modal starts from here =============================== */}
                    <button
                      className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mx-auto"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
                <div className="card card-compact w-[40vw] h-[450px] bg-[#ffffff] shadow-xl mx-auto">
                  <figure>
                    <img
                      src="../updated/shopify_store.png"
                      alt="shopify"
                      className="w-[200px] mx-auto my-[20px]"
                    ></img>
                  </figure>
                  <div className="card-body bg-sky-500 rounded-lg">
                    <h2 className="font-bold text-white text-xl">
                      Shopify Store
                    </h2>
                    {/* <span className="text-white font-normal text-xl opacity-80">
                      Three
                    </span> */}
                    <p className="text-[12px] text-white opacity-70">
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
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Order Now
                    </button>

                    <dialog id="my_modal_4" className="modal">
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
        <div className="text-center bg-[#f4faff] w-[90vw] mx-auto">
          <button className="btn btn-sm btn-neutral rounded-none my-[10px]">
            View All Services
          </button>
        </div>
      </Tabs>
    </>
  );
};

export default TabContextSM;
