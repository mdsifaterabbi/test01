import { Link } from "react-router-dom";

const PortfolioFooter = () => {
  return (
    <>
      {/* Footer2 for extra small and small devices */}
      <div className="flex flex-col flex-wrap md:hidden bg-[#ffffff]">
        <div className="basis-1/1 pt-[30px] xl:pt-[100px] bg-[#ddf1ff] xl:mt-[-70px]">
          <div className="flex flex-col">
            <div className="basis-1/1 bg-[#ddf1ff]">
              <img
                src="./Logo.png"
                alt="Logo"
                className="mx-auto w-[120px] py-[10px]"
              ></img>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff]">
              <p className="text-[11px] text-center px-[5px] py-[5px] section_3_span">
                At Esaviour Limited, we're dedicated to propelling your business
                to new heights in the digital landscape. Our comprehensive suite
                of services is crafted to elevate your brand, drive sales, and
                establish a lasting online presence. From Amazon FBA Consultancy
                to cutting-edge Website Development, we bring a wealth of
                expertise to every project.
              </p>
            </div>
            <div className="basis-1/1 py-[10px] bg-[#ddf1ff]">
              <div className="flex flex-row sm:w-[60%] sm:mx-auto">
                <div className="basis-1/2 pl-[30px]">
                  <span className="font-book text-xl">Quick Link</span>
                  <ul>
                    <li className="font-thin text-[13px] my-[3px] ">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="font-thin text-[13px] my-[3px] ">
                      <Link to="/service">Service</Link>
                    </li>
                    <li className="font-thin text-[13px] my-[3px] ">
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="font-thin text-[13px] my-[3px] ">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="font-thin text-[13px] my-[3px] ">
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2 pl-[30px]">
                  <span className="font-book text-xl">Legal</span>
                  <ul>
                    <li className="font-thin text-[13px] my-[3px]">
                      <a>privacy Policy</a>
                    </li>
                    <li className="font-thin text-[13px] my-[3px]">
                      <a>Terms & Conditions</a>
                    </li>
                    <li className="font-thin text-[13px] my-[3px]">
                      <a>Order Calcellation Policy</a>
                    </li>
                    <li className="font-thin text-[13px] my-[3px]">
                      <a>Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff]">
              <h5 className="text-center py-[10px] section_3_span">
                Let's Get Social
              </h5>
              <div className="flex justify-center">
                <a className="inline mx-[5px]" href="https://www.facebook.com/eSaviourLTD" target="_blank">
                  <img src="./Facebook2.png" alt="Facebook2"></img>
                </a>
                <a className="inline mx-[5px]" href="https://www.instagram.com/esaviourltd/" target="_blank">
                  <img src="./instagram2.png" alt="instagram2"></img>
                </a>
                <a className="inline mx-[5px]" href="https://www.linkedin.com/company/esaviour/" target="_blank">
                  <img src="./Linkedin2.png" alt="Linkedin2"></img>
                </a>
                <a className="inline mx-[5px]" href="https://www.youtube.com/@eSaviour" target="_blank">
                  <img
                    src="./youtube2.png"
                    alt="youtube2"
                    className="mt-[2px]"
                  ></img>
                </a>
              </div>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff]">
              <h5 className="text-center py-[10px] section_3_span">
                Payment method
              </h5>
              <div className="flex justify-center">
                <a className="inline mx-[3px]" href="">
                  <img
                    src="./visa_logo.png"
                    alt="visa_logo.png"
                    className=""
                  ></img>
                </a>
                <a className="inline mx-[3px] pt-[3px]" href="">
                  <img
                    src="./master_card.png"
                    alt="master_card.png"
                    className=""
                  ></img>
                </a>
                <a className="inline mx-[3px]" href="">
                  <img
                    src="./American_express.png"
                    alt="American_express"
                    className=""
                  ></img>
                </a>
                <a className="inline mx-[3px]" href="">
                  <img
                    src="./Paypal.png"
                    alt="Paypal"
                    className="mt-[2px]"
                  ></img>
                </a>
                <a className="inline mx-[3px]" href="">
                  <img
                    src="./Payoneer_Logo.png"
                    alt="Payoneer_Logo"
                    className="mt-[-10px]"
                  ></img>
                </a>
                <a className="inline mx-[3px]" href="">
                  <img src="./wise.png" alt="wise" className=""></img>
                </a>
              </div>
            </div>
            <div className="basis-1/1 border bg-[#000000] text-center pb-[5px]">
              <span className="text-white text-[11px] font-semibold">
                Copyright © 2024 eSaviour Limited | All Right Reserved
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============== Only for medium and large devices =================== */}
      <div className="hidden md:block xl:hidden">
        <div className="flex flex-row mt-[-40px]">
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="basis-1/1 bg-[#ddf1ff] pt-[50px]">
                <img
                  src="./Logo.png"
                  alt="Logo"
                  className="mx-auto w-[120px] py-[10px]"
                ></img>
              </div>
              <div className="basis-1/1 bg-[#ddf1ff]">
                <p className="text-[11px] text-left px-[20px] py-[30px] section_3_span">
                  eSaviour Limited is one of the leading multinational B2B
                  Digital Marketing Agencies. We provide digital business
                  development and branding services all around the world. Our
                  services include Amazon FBA Consultancy, Graphics Design, Web
                  Design and Development, Search Engine Optimization (SEO),
                  UI/UX Design, Software Development, Mobile Apps Development,
                  and so on.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/5 pt-[70px] pb-[30px] pl-[30px] bg-[#ddf1ff]">
            <span className="font-book text-xl">Quick Link</span>
            <ul>
              <li className="font-thin text-[13px] my-[3px]">
                <a>Home</a>
              </li>
              <li className="font-thin text-[13px] my-[3px]">
                <a>Service</a>
              </li>
              <li className="font-thin text-[13px] my-[3px]">
                <a>Portfolio</a>
              </li>
              <li className="font-thin text-[13px] my-[3px]">
                <a>About Us</a>
              </li>
              <li className="font-thin text-[13px] my-[3px]">
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div className="basis-1/5 pt-[70px] pb-[30px] pl-[0px] bg-[#ddf1ff]">
            <span className="font-book text-xl">Legal</span>
            <ul>
              <li className="font-thin text-[13px] my-[3px]">
                <a>privacy Policy</a>
              </li>
              <li className="font-thin text-[13px] my-[3px]">
                <a>Terms & Conditions</a>
              </li>
              <li className="font-thin text-[13px] my-[3px]">
                <a>Order Calcellation Policy</a>
              </li>
              <li className="font-thin text-[13px] my-[3px]">
                <a>Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="basis-1/5 pt-[70px] pb-[10px] bg-[#ddf1ff]">
            <h5 className="text-left font-book text-md">Let's Get Social</h5>
            <div className="flex justify-center">
              <a
                className="inline mr-[3px]"
                href="https://www.facebook.com/eSaviourLTD"
                target="_blank"
              >
                <img src="./Facebook2.png" alt="Facebook2"></img>
              </a>
              <a
                className="inline mx-[3px]"
                href="https://www.instagram.com/esaviourltd/"
                target="_blank"
              >
                <img src="./instagram2.png" alt="instagram2"></img>
              </a>
              <a
                className="inline mx-[3px]"
                href="https://www.linkedin.com/company/esaviour/"
                target="_blank"
              >
                <img src="./Linkedin2.png" alt="Linkedin2"></img>
              </a>
              <a
                className="inline mx-[3px]"
                href="https://www.youtube.com/@eSaviour"
                target="_blank"
              >
                <img
                  src="./youtube2.png"
                  alt="youtube2"
                  className="mt-[2px]"
                ></img>
              </a>
            </div>
            <h5 className="text-left pt-[20px] pb-[10px] font-book text-md">
              Payment method
            </h5>
            <div className="flex justify-start">
              <a className="inline mr-[3px]" href="">
                <img
                  src="./visa_logo.png"
                  alt="visa_logo.png"
                  className=""
                ></img>
              </a>
              <a className="inline mx-[3px] pt-[3px]" href="">
                <img
                  src="./master_card.png"
                  alt="master_card.png"
                  className=""
                ></img>
              </a>
              <a className="inline mx-[3px] mt-[-5px]" href="">
                <img
                  src="./American_express.png"
                  alt="American_express"
                  className="pt-[5px]"
                ></img>
              </a>
              <a className="inline mx-[3px] mt-[-5px]" href="">
                <img
                  src="./Paypal.png"
                  alt="Paypal.png"
                  className="pt-[10px]"
                ></img>
              </a>
            </div>
            <div className="flex justify-start">
              <a className="inline mx-[3px]" href="">
                <img
                  src="./Payoneer_Logo.png"
                  alt="Payoneer_Logo"
                  className="mt-[-5px]"
                ></img>
              </a>
              <a className="inline mx-[3px]" href="">
                <img src="./wise.png" alt="wise" className="mt-[10px]"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="basis-1/1 bg-[#000000] pb-[10px] text-center xl:w-[70vw] xl:mx-auto">
            <span className="text-white text-[11px] font-semibold ">
              Copyright © 2024 eSaviour Limited | All Right Reserved
            </span>
          </div>
        </div>
      </div>

      {/* ====================== Only for extra large devices ========================= */}
      <div className="hidden xl:block xl:w-[100vw] bg-[#ddf1ff]">
        <div className="hidden xl:block xl:w-[70vw] xl:mx-auto">
          <div className="flex flex-row mt-[-50px]">
            <div className="basis-2/5">
              <div className="flex flex-col">
                <div className="basis-1/1 bg-[#ddf1ff] pt-[30px]">
                  <img
                    src="./Logo.png"
                    alt="Logo"
                    className="mx-auto w-[120px] pt-[50px]"
                  ></img>
                </div>
                <div className="basis-1/1 bg-[#ddf1ff]">
                  <p
                    className="text-[11px] text-left px-[0px] xl:pr-[50px] pt-[20px] xl:text-[16px] xl:font-bold xl:pb-[20px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                      fontStyle: "normal",
                    }}
                  >
                    eSaviour Limited is one of the leading multinational B2B
                    Digital Marketing Agencies. We provide digital business
                    development and branding services all around the world. Our
                    services include Amazon FBA Consultancy, Graphics Design,
                    Web Design and Development, Search Engine Optimization
                    (SEO), UI/UX Design, Software Development, Mobile Apps
                    Development, and so on.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[30px] xl:pt-[85px] bg-[#ddf1ff]">
              <span className="font-book text-xl block pb-[15px]">
                Quick Link
              </span>
              <ul>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/service">Service</Link>
                </li>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/about">About Us</Link>
                </li>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[0px] xl:pt-[85px] bg-[#ddf1ff]">
              <span className="font-book text-xl block pb-[15px]">Legal</span>
              <ul>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a>privacy Policy</a>
                </li>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a>Terms & Conditions</a>
                </li>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a>Order Calcellation Policy</a>
                </li>
                <li
                  className="font-thin text-[13px] my-[3px] xl:font-light xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a>Refund Policy</a>
                </li>
              </ul>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[10px] xl:pt-[85px] bg-[#ddf1ff]">
              <span className="font-book text-xl block pb-[15px]">
                Let's Get Social
              </span>
              <div className="flex justify-start">
                <a
                  className="inline mr-[3px]"
                  href="https://www.facebook.com/eSaviourLTD"
                  target="_blank"
                >
                  <img src="./Facebook2.png" alt="Facebook2"></img>
                </a>
                <a
                  className="inline mx-[3px]"
                  href="https://www.instagram.com/esaviourltd/"
                  target="_blank"
                >
                  <img src="./instagram2.png" alt="instagram2"></img>
                </a>
                <a
                  className="inline mx-[3px]"
                  href="https://www.linkedin.com/company/esaviour/"
                  target="_blank"
                >
                  <img src="./Linkedin2.png" alt="Linkedin2"></img>
                </a>
                <a
                  className="inline mx-[3px]"
                  href="https://www.youtube.com/@eSaviour"
                  target="_blank"
                >
                  <img
                    src="./youtube2.png"
                    alt="youtube2"
                    className="mt-[2px]"
                  ></img>
                </a>
              </div>
              <span className="font-book text-xl block py-[15px]">
                Payment method
              </span>

              <div className="flex justify-start w-[90%]">
                <a className="inline mr-[3px]" href="">
                  <img
                    src="./visa_logo.png"
                    alt="visa_logo.png"
                    className=""
                  ></img>
                </a>
                <a className="inline mx-[3px] pt-[3px]" href="">
                  <img
                    src="./master_card.png"
                    alt="master_card.png"
                    className=""
                  ></img>
                </a>
                <a className="inline mx-[3px] mt-[-5px]" href="">
                  <img
                    src="./American_express.png"
                    alt="American_express"
                    className="pt-[5px]"
                  ></img>
                </a>
                <a className="inline mx-[3px] mt-[-5px]" href="">
                  <img
                    src="./Paypal.png"
                    alt="Paypal.png"
                    className="pt-[10px]"
                  ></img>
                </a>

                <a className="inline mx-[3px]" href="">
                  <img
                    src="./Payoneer_Logo.png"
                    alt="Payoneer_Logo"
                    className="mt-[-5px]"
                  ></img>
                </a>
                <a className="inline mx-[3px]" href="">
                  <img src="./wise.png" alt="wise" className="mt-[10px]"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="flex flex-col">
          <div className="basis-1/1 bg-[#000000] pb-[10px] text-center xl:w-[100vw] xl:mx-auto">
            <span className="text-white text-[11px] font-semibold ">
              Copyright © 2024 eSaviour Limited | All Right Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioFooter;
