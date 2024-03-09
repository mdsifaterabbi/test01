import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import Footer2 from "../components/Footer2";
import { useForm } from "react-hook-form";
import "../App.css";
import "../MyShadow.css";
import ContactHero from "../components/ContactHero";

const Contact = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <ContactHero />
      <div className="flex flex-col lg:flex-col xl:flex-col flex-wrap w-[90%] lg:w-[80%] xl:w-[80%] mx-auto myShadowDiv bg-[#ffffff] mt-[-100px] mb-[50px]">
        <div className="basis-1/1 lg:basis-1/1 xl:basis-1/1 py-[50px]">
          <h1 className="text-[#40b0fd] font-bold text-[20px] lg:text-[30px] xl:text-[36px] text-center">
            Reach Out to Us
          </h1>
          <p
            className="text-center text-[#000000] tracking-wider lg:font-semibold xl:font-semibold px-[20px] text-[14px] lg:text-[18px] xl:text-[20px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            For inquiries, proposals, or just a hello, fill out the form below
            and <br></br> our team will get back to you promptly.
          </p>
        </div>
        <div className="basis-1/1 lg:basis-1/1 xl:basis-1/1">
          <div className="flex flex-col lg:flex-row xl:flex-row flex-wrap">
            <div className="basis-1/2 lg:basis-1/2 xl:basis-1/2">
              <div className="w-[90%] mt-[0px] mb-[25px] xl:mb-[50px] mx-auto">
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                  />
                  {errors.name && <p>Name is required.</p>}

                  <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                  />
                  {errors.email && <p>Email is required.</p>}

                  <input
                    {...register("whatsapp", { required: true })}
                    placeholder="WhatsApp"
                    className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                  />
                  {errors.whatsapp && <p>Please enter whatsapp number.</p>}

                  <input
                    {...register("subject", { required: true })}
                    placeholder="Subject"
                    className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                  />
                  {errors.subject && <p>Please enter subject.</p>}

                  <textarea
                    {...register("message", { required: true })}
                    placeholder="Tell us About Your Business"
                    className="block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[100%] mycontactPlaceholder"
                    style={{ maxHeight: "250px", minHeight: "150px" }}
                  />
                  {errors.message && <p>Tell us About Your Business.</p>}

                  <input
                    type="submit"
                    className="block bg-[#40b0fd] font-semibold text-[12px] xl:text-[18px] lg:font-bold xl:font-bold w-[100%] text-white py-[5px] xl:py-[10px] xl:tracking-[2px]"
                    value="SEND MY FREE PROPOSAL"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </form>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/2 xl:basis-1/2 pt-[0px] xl:pt-[10px]">
              <div className="w-[90%] mx-auto lg:w-[80%] xl:w-[80%] bg-[#f5fbff] my-[10px] xl:my-[10px] myShadowDiv">
                <h1 className="bg-[#40b0fd] text-white font-extrabold pl-[10px] text-[14px] xl:text-[18px]">
                  Bangladesh
                </h1>

                <div
                  className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <div className="mt-[5px]">
                    <img
                      src="../ContactIcons/myLocation2.jpg"
                      alt="myLocation2"
                      className="inline-block"
                      width="25px"
                    ></img>
                  </div>
                  <div className="mt-[5px] pl-[5px]">
                    <p>
                      House 770, Road 10, Avenue 2, Mirpur DOHS, Dhaka 1216.
                    </p>
                  </div>
                </div>

                <div
                  className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <div className="mt-[5px]">
                    <img
                      src="../ContactIcons/phone2.jpg"
                      alt="phone2"
                      className="inline-block"
                      width="25px"
                    ></img>
                  </div>
                  <div className="mt-[5px] pl-[5px]">
                    <p>+8801931965606</p>
                  </div>
                </div>
                <div
                  className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <div className="mt-[5px]">
                    <img
                      src="../ContactIcons/email2.jpg"
                      alt="email2"
                      className="inline-block"
                      width="25px"
                    ></img>
                  </div>
                  <div className="mt-[5px] pl-[5px]">
                    <p className="text-[#000000]" style={{ fontWeight: 550 }}>
                      help@esaviour.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="border w-[90%] mx-auto lg:w-[80%] xl:w-[80%] bg-[#f5fbff] my-[10px] xl:my-[10px] myShadowDiv">
                <h1 className="bg-[#40b0fd] text-white font-extrabold pl-[10px] text-[14px] xl:text-[18px]">
                  United Kingdom
                </h1>

                <div
                  className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <div className="mt-[5px]">
                    <img
                      src="../ContactIcons/myLocation2.jpg"
                      alt="myLocation2"
                      className="inline-block"
                      width="25px"
                    ></img>
                  </div>
                  <div className="mt-[5px] pl-[5px]">
                    <p>H24 Richmond Street, London E13 9AA</p>
                  </div>
                </div>

                <div
                  className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <div className="mt-[5px]">
                    <img
                      src="../ContactIcons/phone2.jpg"
                      alt="phone2"
                      className="inline-block"
                      width="25px"
                    ></img>
                  </div>
                  <div className="mt-[5px] pl-[5px]">
                    <p>+44 7448 810568 </p>
                  </div>
                </div>
              </div>
              <div className="border w-[90%] mx-auto lg:w-[80%] xl:w-[80%] bg-[#f5fbff] my-[10px] lg:my-[10px] xl:my-[10px] myShadowDiv">
                <h1 className="bg-[#40b0fd] text-white font-extrabold pl-[10px] text-[14px] lg:text-[14px] xl:text-[18px]">
                  United States
                </h1>

                <div
                  className="text-[14px] lg:text-[16px] xl:text-[18px] lg:pl-[20px] xl:pl-[30px] flex"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  <div className="mt-[5px]">
                    <img
                      src="../ContactIcons/myLocation2.jpg"
                      alt="myLocation2"
                      className="inline-block"
                      width="25px"
                    ></img>
                  </div>
                  <div className="mt-[5px] pl-[5px]">
                    <p>30 N Gould St, Sheridan, WY, United States.</p>
                  </div>
                </div>
              </div>
              <div className="w-[90%] xl:w-[80%] mx-auto">
                <p
                  className="text-[14px] lg:text-[16px] xl:text-[18px] text-[#40b0fd] text-center"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Connecct with us
                </p>
              </div>
              <div className="w-[90%] lg:w-[90%] xl:w-[80%] text-center mx-auto">
                <img
                  src="../ContactIcons/facebook.png"
                  alt="facebook"
                  className="inline-block mx-[5px] cursor-pointer"
                ></img>
                <img
                  src="../ContactIcons/instagram.png"
                  alt="facebook"
                  className="inline-block mx-[5px] cursor-pointer"
                ></img>
                <img
                  src="../ContactIcons/linkedin.png"
                  alt="linkedin"
                  className="inline-block mx-[5px] cursor-pointer"
                ></img>
                <img
                  src="../ContactIcons/youtube.png"
                  alt="youtube"
                  className="inline-block mx-[5px] cursor-pointer"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
};

export default Contact;
