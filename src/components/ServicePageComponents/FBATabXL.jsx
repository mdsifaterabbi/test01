import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Slider from "react-slick";
import { useState } from "react";

const FBATabXL = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
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
      <div className="tab-container bg-[#f4faff] px-4 py-8 xl:w-[50vw] xl:mx-auto">
        <h2 className="font-normal xl:text-[32px] xl:font-thin text-center mb-4">
          Amazon FBA&nbsp;
          <span className="text-[#40b0fd] font-extrabold xl:text-[32px]">
            Services
          </span>
        </h2>

        {/* Tab list container */}
        <div className="tab-list bg-[#f4faff] pb-4">
          <Tabs>
            <TabList className="flex justify-center mb-[50px]">
              {[
                "Research and Analysis",
                "Creative Writing",
                "Design to Grow Your Brand",
                "FBA Marketing",
              ].map((tabName, index) => (
                <Tab
                  key={tabName}
                  className={`xl:text-[14px] font-bold lg:px-[30px] border-b-[2px] border-b-sky-300 cursor-pointer ${
                    selectedIndex === index
                      ? "bg-[#f4faff] text-sky-500 font-bold border-b-[4px] border-b-sky-800 outline-none"
                      : "border-b-[2px] border-b-sky-300"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tabName}
                </Tab>
              ))}
            </TabList>

            <TabPanel className="xl:bg-[#f4faff] py-[25px]">
              <div className="slider-container pb-[0px] bg-[#f4faff] xl:w-[50vw] xl:mx-auto">
                <div
                  {...settings}
                  className="flex flex-row flex-wrap gap-3 justify-center"
                >
                  <div className="basis-1/3">
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[40px]">
                        <img
                          src="../FBAservice/Brand_Name.png"
                          alt="Brand_Name"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Brand Name/Category Approval
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
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
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3">
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[40px]">
                        <img
                          src="../FBAservice/Product_Research_Selection.png"
                          alt="Product_Research_Selection"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Product research & selectoin
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Have our experts write flashy product titles with SEO
                          in order. This one is guaranteed to get more clicks on
                          your products, and eventually lead to conversion.
                        </p>

                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3">
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/UPC_FNSKE.png"
                          alt="UPC_FNSKE"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          UPC/FNSKE Issues
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          If the technical aspects like UPC/FNSKU are not
                          handled properly, you can face serious troubles to the
                          extent of registry suspension. We make sure your UPC
                          and FNSKU labels are correct and comply with Amazon’s
                          guidelines.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3">
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Product_Listing_Optimization.png"
                          alt="Product_Listing_Optimization"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Product Listing Optimization
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
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
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3">
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Product Sourcing.png"
                          alt="Product Sourcing"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Product Sourcing
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Leave some of your major concerns to us, like choosing
                          the right supplier for your products. As FBA
                          specialists, we will source from the most reliable and
                          affordable suppliers in the market for you at a
                          competitive price.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3">
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Shipment.png"
                          alt="Shipment"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Product QC and Shipment
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          our reputation stands on the quality and timely
                          delivery of your products. At eSaviour Limited, we
                          promise to assure you that the quality meets Amazon
                          standards even before the products are shipped.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0 bg-[#f4faff] xl:w-[50vw] xl:mx-auto">
                <div
                  {...settings}
                  className="flex flex-row flex-wrap gap-3 justify-center"
                >
                  <div>
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Product_Title_Optimiation.png"
                          alt="Product_Title_Optimiation"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px]font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Product Title Optimization
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Have our experts write flashy product titles with SEO
                          in order. This one is guaranteed to get more clicks on
                          your products, and eventually lead to conversion.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/USP Bullet.png"
                          alt="USP Bullet.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          USP Targeted Bullet Points
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Your potential customers are not interested in the
                          details when checking out your products. They want to
                          know what’s really special about them right away. Our
                          writers are skilled in listing out USP or Unique
                          Selling Points of your products in the most concise
                          yet effective format so a sale is imminent in your
                          near future
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/EBC.png"
                          alt="EBC"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Enhanced Brand Content (EBC)
                        </h2>

                        <p
                          className="text-[16x] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          EBC is a feature to allow Amazon sellers like you to
                          present your brand in a more elegant manner. Our
                          content specialists work on significantly improving
                          both descriptive (product description etc.) and
                          multimedia (images, videos etc.) content associated
                          with your product so they catch your customers’
                          attention at the first glance.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100  mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Brand_Story.png"
                          alt="Brand_Story"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Brand Story
                        </h2>

                        <p
                          className="text-[16x] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Customers often connect with a brand on an emotional
                          level. This is where you tell and sell your side of
                          the story to the world. Get our FBA consultants’ help
                          in crafting a compelling and unique story for your
                          brand and gain acceptance among the crowd.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0  bg-[#f4faff] xl:w-[50vw] xl:mx-auto">
                <div
                  {...settings}
                  className="flex flex-row flex-wrap gap-3 justify-center"
                >
                  <div>
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Amazon_FBA_Listing_Images.png"
                          alt="Amazon_FBA_Listing_Images"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80 "
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Amazon FBA Listing Images
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          If you are not sure how to make your listing images
                          better, consult our FBA experts and designers.
                          Following Amazon guidelines, we can design for you
                          high quality product images, infographics, featured
                          images and other visually appealing elements that will
                          turn heads of your prospective customers for a
                          possible sale.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Amazon_A_+.png"
                          alt="Amazon_A_+"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className=" text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Amazon A+/EBC Content
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Business has a lot to do with presentation as well.
                          Channel our artistic energy and skills into producing
                          not only compelling high-end visuals but a classy
                          brand story too. Our designer team excels in Enhanced
                          Brand Content or A+ content and in elevating the
                          customer experience with them for better marketing.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Amazon_StoreFront_Design.png"
                          alt="Amazon_StoreFront_Design"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className=" text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Amazon Storefront Design
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Your Amazon storefront is the real-time equivalent to
                          an actual shop. Design your storefront with us and let
                          your prospective customers on a journey through what
                          your brand stands for and what it brings to the table.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Product_Package_Design.png"
                          alt="Product_Package_Design"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className=" text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Product Package Design
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Customers often connect with a brand on an emotional
                          level. This is where you tell and sell your side of
                          the story to the world. Get our FBA consultants’ help
                          in crafting a compelling and unique story for your
                          brand and gain acceptance among the crowd.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../FBAservice/Product-Inserts.png"
                          alt="Product-Inserts.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className=" text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Product Inserts
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Certain aesthetics are involved when it comes to
                          Amazon transactions. Our designers can build a brand
                          identity for you with some simple yet profound
                          gestures inside your product package like promotional
                          coupons, warranty cards, and instruction manuals.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            {/* ================ */}
            <TabPanel className="xl:bg-[#f4faff]">
              <div className="slider-container p-0  bg-[#f4faff] xl:w-[50vw] xl:mx-auto">
                <div
                  {...settings}
                  className="flex flex-row flex-wrap gap-3 justify-center"
                >
                  <div>
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto bshadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/Wordpress_website2.png"
                          alt="Wordpress_website2.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          PPC Campaigns
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Pay-per-click (PPC) advertising (Sponsored Ads) is a
                          common tool for e-commerce merchants. However, if you
                          lack the necessary skills and experience, you can
                          jeopardize your whole business instead. Our Sponsored
                          Ad campaign guarantees you a decent click-through and
                          conversion rate within a convenient price range.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/MERN-logo-1.png"
                          alt="MERN-logo-1.png"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Coupon Ads
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Want to reach your target audience on special
                          occasions and drive some extra sales on the side?
                          Coupon ads are a great way to make it happen and we
                          are up for it if you are. Our coupon ads package can
                          increase traffic to your Amazon store and boost sales
                          and promotion more efficiently.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/shopify_store.png"
                          alt="shopify"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Amazon MCF (Multi-Channel Fulfillment) Management
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Amazon MCF (Multi-Channel Fulfillment) Management
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/shopify_store.png"
                          alt="shopify"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Amazon Attribution
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Customers often connect with a brand on an emotional
                          level. This is where you tell and sell your side of
                          the story to the world. Get our FBA consultants’ help
                          in crafting a compelling and unique story for your
                          brand and gain acceptance among the crowd.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/shopify_store.png"
                          alt="shopify"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Inventory Management
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Your Amazon storefront is the real-time equivalent to
                          an actual shop. Design your storefront with us and let
                          your prospective customers on a journey through what
                          your brand stands for and what it brings to the table.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
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
                    <div className="card card-compact w-[20vw] xl:h-[400px] bg-base-100 mx-auto shadow-xl shadow-[#cee6f8] h-[350px]">
                      <figure className="bg-[#ffffff] py-[20px]">
                        <img
                          src="../updated/shopify_store.png"
                          alt="shopify"
                          className="w-[50%]"
                        ></img>
                      </figure>
                      <div className="card-body bg-[#f2f8ff] rounded-lg myCardBody">
                        <h2
                          className="text-black text-[25px] pb-[10px] font-extrabold opacity-80"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Websites and Landing Page Design
                        </h2>

                        <p
                          className="text-[16px] font-semibold text-justify text-black opacity-80  xl:text-[14px]"
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          Customers often connect with a brand on an emotional
                          level. This is where you tell and sell your side of
                          the story to the world. Get our FBA consultants’ help
                          in crafting a compelling and unique story for your
                          brand and gain acceptance among the crowd.
                        </p>
                        {/* ===================== Order Placement Modal starts from here =============================== */}
                        <button
                          className="btn btn-neutral btn-sm z-50 w-[100px] mb-[50px] rounded-none mx-auto"
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          Order Now
                        </button>

                        <dialog id="my_modal_2" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <div>{/* <OrderForm /> */}</div>
                            <p className="py-4">
                              Press ESC key or click on ✕ button to close
                            </p>
                          </div>
                        </dialog>
                        {/* ================== Order placement Model ended here ============== */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default FBATabXL;
