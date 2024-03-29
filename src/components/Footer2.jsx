import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <>
      {/* Footer2 for extra small and small devices */}
      <div className="flex flex-col flex-wrap md:hidden bg-[#ffffff]">
        <div className="basis-1/1 w-[95vw] mx-auto relative top-[30px] z-50">
          <div className="flex flex-row flex-wrap bg-[#40b0fd]">
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">500+</span>
              <span className="text-sm font-bold text-white">
                Happy Clients
              </span>
            </div>
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">27+</span>
              <span className="text-sm font-bold text-white">
                Brains to Support
              </span>
            </div>
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">100+</span>
              <span className="text-sm font-bold text-white">
                Websites Developed
              </span>
            </div>
            <div className="basis-1/2 text-center py-[15px]">
              <span className="block text-3xl font-thin text-white">150+</span>
              <span className="text-sm font-bold text-white">
                Product launched
              </span>
            </div>
          </div>
        </div>
        <div className="basis-1/1 pt-[100px] bg-[#ddf1ff] w-[98vw] mx-auto mt-[-70px]">
          <div className="flex flex-col">
            <div className="basis-1/1 bg-[#ddf1ff]">
              <img
                src="./Logo.png"
                alt="Logo"
                className="mx-auto w-[140px] py-[30px]"
              ></img>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <p className="text-[15px] text-justify px-[5px] py-[5px] section_3_span">
                eSaviour Limited is one of the leading multinational B2B Digital
                Marketing Agencies. We provide digital business development and
                branding services all around the world. Our services include
                Amazon FBA Consultancy, Graphics Design, Web Design and
                Development, Search Engine Optimization (SEO), UI/UX Design,
                Software Development, Mobile Apps Development, and so on.
              </p>
            </div>
            <div className="basis-1/1 py-[10px] bg-[#ddf1ff] w-[98vw] mx-auto">
              <div className="flex flex-row sm:w-[60%] sm:mx-auto">
                <div className="basis-1/2 pl-[30px]">
                  <span className="font-book text-[20px]">Quick Link</span>
                  <ul>
                    <li className="text-[16px] my-[3px] ">
                      <a>Home</a>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <a>Service</a>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <a>Portfolio</a>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <a>About Us</a>
                    </li>
                    <li className="text-[16px] my-[3px] ">
                      <a>Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2 pl-[30px]">
                  <span className="font-book text-[20px]">Legal</span>
                  <ul>
                    <li className=" text-[16px] my-[3px]">
                      <a>privacy Policy</a>
                    </li>
                    <li className="text-[16px] my-[3px]">
                      <a>Terms & Conditions</a>
                    </li>
                    <li className="text-[16px] my-[3px]">
                      <a>Order Calcellation Policy</a>
                    </li>
                    <li className=" text-[16px] my-[3px]">
                      <a>Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <h5 className="text-center py-[10px] text-[20px]">
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
            <div className="basis-1/1 bg-[#ddf1ff] w-[98vw] mx-auto">
              <h5 className="text-center py-[10px] text-[20px]">
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
      {/* =================== Footer2 for medium and large devices ========================= */}
      <div className="hidden md:block xl:hidden">
        <div className="flex flex-row">
          <div className="basis-1/1 w-[95vw] mx-auto mt-[50px] relative z-50">
            <div className="flex flex-row bg-[#40b0fd]">
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">
                  500+
                </span>
                <span className="text-sm font-bold text-white">
                  Happy Clients
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">27+</span>
                <span className="text-sm font-bold text-white">
                  Brains to Support
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">
                  100+
                </span>
                <span className="text-sm font-bold text-white">
                  Websites Developed
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px]">
                <span className="block text-3xl font-thin text-white">
                  150+
                </span>
                <span className="text-sm font-bold text-white">
                  Product launched
                </span>
              </div>
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
      {/* =================== Footer2 for xl devices ========================= */}
      <div className="hidden xl:block xl:w-[50vw] xl:mx-auto  ">
        <div className="flex flex-row">
          <div className="basis-1/1 w-[80vw] mx-auto mt-[50px] relative z-50">
            <div className="flex flex-row bg-[#40b0fd]">
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">
                  500+
                </span>
                <span className="text-sm font-bold text-white">
                  Happy Clients
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">27+</span>
                <span className="text-sm font-bold text-white">
                  Brains to Support
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">
                  100+
                </span>
                <span className="text-sm font-bold text-white">
                  Websites Developed
                </span>
              </div>
              <div className="basis-1/4 text-center py-[15px] xl:py-[30px]">
                <span className="block text-3xl font-thin text-white">
                  150+
                </span>
                <span className="text-sm font-bold text-white">
                  Product launched
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== Only for extra large devices ========================= bg-[#ddf1ff] */}
      <div className="hidden xl:block xl:w-[98vw] mx-auto bg-[#ddf1ff] relative top-0 left-0">
        {/*  ================= Water mark ===================== */}
        <div className="absolute top-0 left-0 w-[50vw] h-[100%] hidden lg:block xl:block overflow-hidden">
          <img
            src="../watermarks/xl_home_water_1.png"
            alt="xl_home_water_1"
            className=""
          ></img>
        </div>
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
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[30px] xl:pt-[85px] bg-[#ddf1ff] relative">
              <span className="font-book text-xl block pb-[15px] font-bold">
                Quick Link
              </span>
              <ul>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/service">Service</Link>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px]  xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/about">About Us</Link>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/blog">Blog</Link>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px]  xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[30px] pl-[0px] xl:pt-[85px] bg-[#ddf1ff]">
              <span className="font-book text-xl block pb-[15px] font-bold">
                Legal
              </span>
              <ul>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a href="#">privacy Policy</a>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a href="#">Terms & Conditions</a>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a href="#">Order Calcellation Policy</a>
                </li>
                <li
                  className="font-bold text-[18px] my-[3px] xl:text-[18px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
            <div className="basis-1/5 pt-[70px] pb-[10px] xl:pt-[85px] bg-[#ddf1ff]">
              <span className="font-book text-xl block pb-[15px] font-bold">
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
              <span className="font-book text-xl block py-[15px] font-bold">
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
          <div className="basis-1/1 bg-[#000000] pb-[10px] text-center xl:w-[98vw] mx-auto">
            <span className="text-white text-[11px] font-semibold ">
              Copyright © 2024 eSaviour Limited | All Right Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
