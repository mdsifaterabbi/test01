import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";

import "../MyTabOverlay.css";
import OrderForm from "./OrderForm";

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
            <TabPanel className="xl:bg-[#f4faff] py-[25px]">
              <div className="slider-container pb-[0px] bg-[#f4faff] xl:w-[70vw] xl:mx-auto">
                <Slider {...settings}>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 shadow-xl shadow-[#cee6f8] mx-auto h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Fba_Consultancy.png"
                          alt="Fba_Consultancy"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Amazon FBA Consultancy
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world's largest online marketplace.
                        </p>

                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
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
                        <h2 className="font-bold text-black text-xl opacity-80">
                          PPC Campaigns
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          Pay-per-click (PPC) advertising (Sponsored Ads) is a
                          common tool for e-commerce merchants. However, if you
                          lack the necessary skills and experience, you can
                          jeopardize your whole business instead. Our Sponsored
                          Ad campaign guarantees you a decent click-through and
                          conversion rate within a convenient price range.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
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
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Product Sourcing
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          Leave some of your major concerns to us, like choosing
                          the right supplier for your products. As FBA
                          specialists, we will source from the most reliable and
                          affordable suppliers in the market for you at a
                          competitive price.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
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
                    <div className="card card-compact w-[20vw] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Facebook_Ads.png"
                          alt="Facebook_Ads"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Facebook Ads Campaigns
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          We will research highly profitable products for your
                          brands that will have low competition and high demand
                          in the market. We will find out the unique selling
                          proposition for your product and it will be different
                          from your competitor and help you to grow as a brand.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Google_Ads.png"
                          alt="Google_Ads.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Google Ads Campaigns
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          We will research highly profitable products for your
                          brands that will have low competition and high demand
                          in the market. We will find out the unique selling
                          proposition for your product and it will be different
                          from your competitor and help you to grow as a brand.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Local_SEO.png"
                          alt="Local_SEO.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Local & Technical SEO
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          Professional guidance to optimize your product
                          listings to enhance the visibility on Amazon that will
                          attract new customers and drive more sales. The best
                          e-commerce optimization techniques such as keyword
                          research and optimization, crafting compelling product
                          descriptions and images, and pricing and promotions to
                          convert the clicks to sales.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
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
                    <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Product_Listing.png"
                          alt="Product_Listing.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Amazon Product Listing Design
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          Maximize Your E-commerce Potential Unlock the full
                          potential of your Amazon FBA business with Esaviour
                          Limited. Our consultancy services are designed to
                          optimize your product listings, enhance visibility,
                          and boost sales. Trust our expertise to navigate the
                          intricacies of the world’s largest online marketplace.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="./updated/Product_package_Design2.png"
                          alt="Product_package_Design2.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Product package Design
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          Your product package tells a lot about your brand and
                          your representation. Our designers are well-equipped
                          to create smart, responsive, and lucrative packages
                          for your Amazon product. Leave the technical aspects
                          of how the package looks to us so you can concentrate
                          on more important areas like the delivery and product
                          quality.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Social_Media_Design.png"
                          alt="Social_Media_Design.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Social Media Post Design
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          Social media is all about visuals and drawing the
                          attention of a huge customer base. Our social media
                          package includes graphics design for posts, creating
                          page layouts, making infographics and graphics for
                          video content. Highlight your products by customizing
                          your social media plan with our graphics design team.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
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
                    <div className="card card-compact w-[20vw] bg-base-100 mx-auto bshadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Wordpress_website2.png"
                          alt="Wordpress_website2.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Wordpress Website
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          As a brand, you must take approval for your brand name
                          from amazon and it’s essential if you want to create
                          your private label products and build a brand on
                          Amazon. We can help you to navigate the complex
                          process of obtaining brand registry and trademark
                          approval on Amazon, which will protect your
                          intellectual property and build a strong brand
                          identity.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/MERN-logo-1.png"
                          alt="MERN-logo-1.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          MERN Stack Development
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          If the technical aspects like UPC/FNSKU are not
                          handled properly, you can face serious troubles to the
                          extent of registry suspension. We make sure your UPC
                          and FNSKU labels are correct and comply with Amazon’s
                          guidelines.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card card-compact w-[20vw] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/shopify.png"
                          alt="shopify"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2 className="font-bold text-black text-xl opacity-80">
                          Shopify Store
                        </h2>

                        <p className="text-[12px] text-black opacity-70">
                          We will research highly profitable products for your
                          brands that will have low competition and high demand
                          in the market. We will find out the unique selling
                          proposition for your product and it will be different
                          from your competitor and help you to grow as a brand.
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
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
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