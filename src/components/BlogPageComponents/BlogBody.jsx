import blogModuleCSS from "./BlogBody.module.css";
import { FaSearch } from "react-icons/fa";

const BlogBody = () => {
  return (
    <>
      <div className="w-[90vw] xl:w-[80vw] mx-auto my-[30px] xl:my-[70px]">
        <div className="flex flex-col md:flex-row xl:flex-row flex-wrap">
          <div className="basis-1/1 md:basis-4/6 xl:basis-3/5">
            <div className="flex flex-col flex-wrap">
              <div className="basis-1/1 md:w-[98%] border bg-[#cee9ff]">
                <div className="xl:text-[24px] breadcrumbs font-bold xl:font-semibold pl-[10px]">
                  <ul>
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="basis-1/1 mt-[10px] xl:mt-[30px]">
                <div className="flex flex-col md:flex-row xl:flex-row flex-wrap">
                  <div className="basis-1/1 md:basis-[48%] xl:basis-1/3 my-[10px]">
                    <div>
                      <div className="card md:h-[400px] xl:w-[266px] bg-[#e8f5ff] shadow-xl relative top-0 left-0">
                        <div className="absolute top-[5px] left-[10px] bg-[#40b0fd] text-white text-sm py-[5px] px-[10px] rounded-md">
                          Digital Marketing
                        </div>
                        <figure>
                          <img
                            src="../../../BlogPageIcons/best-digital-marketer-in-bangladesh.jpg"
                            alt="best-digital-marketer-in-bangladesh"
                            className="max-h-[300px] w-[100%] md:h-[150px] xl:h-[150px] xl:w-[100%] rounded-t-md"
                          />
                        </figure>
                        <div className="card-body pt-[15px] pl-[10px] m-0">
                          <div className="border-b-[1px] border-b-[#40b0fd]">
                            <h2 className="font-extrabold p-0 m-0 md:text-[14px] xl:text-[18px]">
                              Best Digital Marketer in Bangladesh{" "}
                            </h2>
                          </div>

                          <p
                            className="font-semibold md:text-[14px] xl:text-[14px] xl:pt-[15px]"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                            }}
                          >
                            Meet eSavior Limited, the Best Multinational B2B
                            Digital Marketing Agency in Bangladesh. We started
                            our
                          </p>
                          <div className="card-actions justify-start border-b-[1px] border-b-[#40b0fd]">
                            <button className="btn btn-sm rounded-md bg-[#40b0fd] text-white hover:bg-[#e8f5ff] hover:text-black my-[15px] xl:my-[15px]">
                              Read More
                            </button>
                          </div>
                          <div>
                            <h1
                              className="md:text-[12px] xl:text-[13px] font-bold tracking-widest"
                              style={{
                                fontFamily: "Futura PT, sans-serif",
                              }}
                            >
                              March 6, 2024
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/1 md:basis-[48%] xl:basis-1/3 my-[10px] md:mx-[5px]">
                    <div>
                      <div className="card md:h-[400px] xl:w-[266px] bg-[#e8f5ff] shadow-xl relative top-0 left-0">
                        <div className="absolute top-[5px] left-[10px] bg-[#40b0fd] text-white text-sm py-[5px] px-[10px] rounded-md">
                          Amazon FBA
                        </div>
                        <figure>
                          <img
                            src="../../../BlogPageIcons/amazon-FBA-3.jpg"
                            alt="amazon-FBA"
                            className="max-h-[300px] w-[100%] md:h-[150px] xl:h-[150px] xl:w-[100%] rounded-t-md"
                          />
                        </figure>
                        <div className="card-body pt-[15px] pl-[10px] m-0">
                          <div className="border-b-[1px] border-b-[#40b0fd]">
                            <h2 className="font-extrabold p-0 m-0 md:text-[14px] xl:text-[18px]">
                              Unleashing the Power of Amazon FBA: A
                            </h2>
                          </div>

                          <p
                            className="font-semibold md:text-[14px] xl:text-[14px] xl:pt-[15px]"
                            style={{
                              fontFamily: "Futura PT, sans-serif",
                            }}
                          >
                            In the dynamic landscape of e-commerce, Amazon
                            stands tall as the undisputed giant. With millions
                          </p>
                          <div className="card-actions justify-start border-b-[1px] border-b-[#40b0fd]">
                            <button className="btn btn-sm rounded-md bg-[#40b0fd] text-white hover:bg-[#e8f5ff] hover:text-black my-[15px] xl:my-[15px]">
                              Read More
                            </button>
                          </div>
                          <div>
                            <h1
                              className="md:text-[12px] xl:text-[13px] font-bold tracking-widest"
                              style={{
                                fontFamily: "Futura PT, sans-serif",
                              }}
                            >
                              February 1, 2024
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/1 md:basis-2/6 xl:basis-2/5">
            <div className="flex flex-col flex-wrap">
              <div className="basis-1/1 bg-[#e8f5ff] w-[100%] xl:w-[75%] mx-auto">
                <div className="bg-[#fff] w-[95%] mx-auto mt-[20px] pb-[20px] rounded-md">
                  <div className="w-[100%] h-[50px] pt-[20px] pb-[10px] relative top-[10px] left-0">
                    <input
                      type="search"
                      placeholder="Search..."
                      className={`border w-[90%] py-[5px] pl-[5px] ${blogModuleCSS.blogPlaceholder} font-semibold absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ${blogModuleCSS.rounded_top_right} ${blogModuleCSS.rounded_bottom_right} ${blogModuleCSS.blogInputField_rounded_top_bottom_left} ${blogModuleCSS.blogInputField_border} ${blogModuleCSS.blogInputField}`}
                    ></input>
                    <div
                      className={`w-[40px] h-[35px] bg-[#40b0fd] absolute right-[5%] top-[50%] -translate-y-1/2 ${blogModuleCSS.rounded_top_right} ${blogModuleCSS.rounded_bottom_right} cursor-pointer`}
                    >
                      <FaSearch className="mx-auto my-[25%]" />
                    </div>
                  </div>
                  <p className="text-[#40c0fe] xl:text-[20px] xl:font-extrabold text-center mt-[20px]">
                    Categories
                  </p>
                  <div className="font-semibold text-center mt-[15px] border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                    <p
                      className="pt-[5px] pb-[5px] tracking-[1px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      Amazon FBA
                    </p>
                  </div>
                  <div className="font-semibold text-center border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                    <p
                      className="py-[5px] tracking-[1px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      Digital Marketing
                    </p>
                  </div>
                  <div className="font-semibold text-center border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                    <p
                      className="py-[5px] tracking-[1px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      Graphics Design
                    </p>
                  </div>
                  <div className="font-semibold text-center border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                    <p
                      className="py-[5px] tracking-[1px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      Web Development
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-1/1 bg-[#e8f5ff] mt-[20px] mb-[50px] pb-[20px] w-[100%] xl:w-[75%] mx-auto">
                <div className="bg-[#ffffff] w-[95%] mx-auto mt-[20px] pb-[20px] rounded-md">
                  <div>
                    <p className="font-extrabold text-[#000000] text-[20px] pl-[20px]">
                      Recent Post
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap bg-[#e8f5ff] w-[95%] mx-auto py-[10px]">
                    <div className="basis-1/4 pt-[10px] pb-[20px]">
                      <img
                        src="../../../BlogPageIcons/best-digital-marketer-in-bangladesh.jpg"
                        alt="best-digital-marketer-in-bangladesh"
                        className="max-h-[100px] w-[100%] xl:w-[100px] xl:h-[60px]"
                      ></img>
                    </div>
                    <div className="basis-3/4 px-[10px]">
                      <p className="font-bold md:font-extrabold text-[12px] xl:text-[16px] text-[#000000] pt-[0px] border-b-[2px] border-[#40b0fd] border-opacity-50">
                        Best Digital Marketer in Bangladesh{" "}
                      </p>
                      <p
                        className="text-[14px] pt-[10px] md:font-semibold
                        "
                        style={{
                          fontFamily: "Futura PT, sans-serif",
                        }}
                      >
                        Meet eSavior Limited, the Best Multinational B2B Digital
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap bg-[#e8f5ff] w-[95%] mx-auto mt-[20px] py-[10px]">
                    <div className="basis-1/4 pt-[10px] pb-[20px]">
                      <img
                        src="../../../BlogPageIcons/amazon-FBA-3.jpg"
                        alt="amazon-FBA2"
                        className="max-h-[100px] w-[100%] xl:w-[100px] xl:h-[60px]"
                      ></img>
                    </div>
                    <div className="basis-3/4 px-[10px]">
                      <p className="font-bold md:font-extrabold text-[#000000] text-[12px] xl:text-[16px] pt-[0px] border-b-[2px] border-[#40b0fd] border-opacity-50">
                        Unleashing the Power of Amazon FBA: A Comprehensive
                        Guide
                      </p>
                      <p
                        className="text-[14px] pt-[10px] md:font-semibold
                        "
                        style={{
                          fontFamily: "Futura PT, sans-serif",
                        }}
                      >
                        In the dynamic landscape of e-commerce, Amazon stands
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBody;
