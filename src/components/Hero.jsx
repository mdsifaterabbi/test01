import { useEffect, useRef, useState } from "react";
import "../MyShadow.css";
import "./Hero.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useEmailJS } from "../ContextAPI/EmailJSContextAPI";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

const Hero = () => {
  const form = useRef();

  const { emailData, setEmailData } = useEmailJS();
  const [localData, setLocalData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailStatus, setEmailStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting }, // Access isSubmitting property
  } = useForm();

  const handleMyQuote = (data) => {
    console.log("Your name is: ", data.name);
    console.log("Your email is: ", data.email);
    console.log("Your phone is: ", data.phone);
    console.log("Your message is: ", data.message);

    setLocalData({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    //implement email js here
    emailjs
      .sendForm(
        "service_d2jkicu",
        "template_jcd7rrq",
        form.current,
        "cdQJMV8uBJzxi8V29"
      )
      .then(
        (result) => {
          console.log(result.text, "send successfully");
          alert(result.text, "send successfully");
          setEmailStatus(true);
        },
        (error) => {
          console.log(error.text, "didn't send");
          alert(error.text, "didn't send");
          setEmailStatus(false);
        }
      );

    //call the reset form based on the response from email js
    if (setEmailStatus) {
      reset();
    }
  };

  useEffect(() => {
    // Update emailData directly
    setEmailData(localData);
  }, [localData]);

  useEffect(() => {
    console.log("After form submission: ");
    console.log(emailData);
  }, [emailData]);

  const senderNameFormatted = JSON.stringify(emailData.name);

  return (
    <>
      {/* this is get quote modal*/}

      <dialog id="getQuoteModal" className="modal">
        <div className="modal-box bg-[#ffffff]">
          <form method="dialog">
            <button className="btn btn-sm rounded-none bg-black text-white text-[20px] absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <div className="mb-[10px]">
              <img
                src="../HomePageLogos/Logo.png"
                alt="Logo"
                className="w-[150px] mx-auto"
              ></img>
            </div>
            <form ref={form} onSubmit={handleSubmit(handleMyQuote)}>
              <input
                {...register("name", { required: true })}
                placeholder="Name*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[200px] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold">Name is required.</p>
              )}
              <input
                {...register("email", { required: true })}
                placeholder="Email*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[200px] pl-[5px] inline getFreeQuote"
              />
              {errors.email && (
                <p className="text-red-500 font-semibold">Email is required.</p>
              )}
              <input
                {...register("phone", { required: true })}
                placeholder="Phone*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[92%] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.phone && (
                <p className="text-red-500 font-semibold">Phone is required.</p>
              )}
              <textarea
                {...register("message", { required: true })}
                placeholder="Message*"
                rows={5}
                cols={40}
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[92%] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.message && (
                <p className="text-red-500 font-semibold">
                  Message is required.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-info rounded-md text-white py-[5px] px-[20px] ml-[5px]"
              >
                SEND
              </button>

              {isSubmitting || emailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
                emailStatus ? (
                  <p className="text-green-500 font-semibold">
                    Hello {senderNameFormatted}, your email was sent
                    successfully!
                  </p>
                ) : (
                  <p className="text-red-500 font-semibold">
                    Hello {senderNameFormatted}, there was an error sending your
                    email. Please try again.
                  </p>
                )
              ) : null}
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex flex-col md:flex-col xl:flex-row pb-[200px] sm:pb-[100px] md:pb-[100px] bg-[#b3d9f8] relative top-0 left-0">
        {/* Watermark of hero section */}
        <div className="absolute bottom-[-50px] left-0 text-white md:w-[100vw] md:h-[100%] xl:w-[50vw] hidden md:block">
          <img
            src="/watermarks/xl_home_water_1.png"
            alt="xl_home_water_1"
          ></img>
        </div>
        <div className="absolute bottom-[40px] left-0 md:w-[200px] md:h-[150px] xl:w-[200px] xl:h-[150px] hidden md:block">
          <img
            src="/watermarks/xl_home_water_2.png"
            alt="xl_home_water_2"
          ></img>
        </div>
        <div className="basis-1/1 md:basis-1/1 xl:basis-1/2 md:mx-[100px] lg:mt-[100px] order-1 md:order-1 xl:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left font-extrabold pt-[20px] text-[25px] lg:text-[34px] xl:pl-[12%] xl:text-[38px] xl:leading-[50px] md:pt-[50px]">
            Worried About your Brand's<br></br>
            <span className="text-sky-500"> Marketing Strategy?</span>
          </h1>
          <p
            className="text-[15px] font-bold md:text-[14px] mt-[20px] mb-[10px] xl:pl-[12%] xl:text-[16px] tracking-[1px] md:text-justify"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            eSaviour Limited is the best b2b digital marketing agency that is
            dedicated to propelling your business to new heights in the creative
            digital marketing landscape. Our comprehensive b2b digital marketing
            services is crafted to elevate your brand, drive sales, and
            establish a strong online presence.
          </p>

          {/* ============== Only For XL devices ============= */}
          <div className="basis-1/1 hidden xl:block">
            <div className="flex flex-row gap-3">
              <div className="basis-1/4 h-[100px] xl:text-end mt-[15px]">
                <button
                  className="btn rounded-none xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
                  onClick={() =>
                    document.getElementById("getQuoteModal").showModal()
                  }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4 h-[100px] mt-[25px]">
                <p className="relative xl:text-[16px] xl:top-[20px]">
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+ Brands to Achieve Success.
                </p>
              </div>
            </div>
          </div>

          {/* =================== Only For XSM ,SM, MD, lg devices =================== */}
          <div className="basis-1/1 block xl:hidden mt-[30px]">
            <div className="flex flex-row gap-1">
              <div
                className="basis-1/4 bg-black text-white text-center hover:text-black hover:bg-orange-500 cursor-pointer relative
              top-0 left-0 transition duration-300 ease-linear"
              >
                <button
                  className="btn border-none w-full rounded-none text-[12px] sm:text-[12px] xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
                  onClick={() =>
                    document.getElementById("getQuoteModal").showModal()
                  }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4">
                <p className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[5px] lg:px-[50px] md:hidden">
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+ Brands to <br></br>Achieve Success.
                </p>
                <p className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[10px] lg:px-[50px] hidden md:block">
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+<br></br> Brands to Achieve Success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/1 md:basis-1/1 xl:basis-1/2 flex justify-center items-center order-0 md:order-0 xl:order-1 pt-[20px] md:mr-[50px] lg:mt-[50px] lg:mb-[-100px] xl:text-center xl:pt-[10px] xl:mb-[50px]">
          <img
            src="../Speech_Bubble.png"
            alt="GSpeech_Bubble"
            className="w-[200px] sm:w-[250px] lg:w-[300px]"
          ></img>
        </div>
      </div>

      {/* ========================================================= */}

      <div className="flex flex-col md:flex-col bg-[#ffffff] py-[20px] w-[95vw] md:w-[80vw] mx-auto mt-[-150px] sm:mt-[-80px] xl:mt-[-80px] xl:w-[80vw] relative myShadowDiv">
        <div className="basis-1/1 md:basis-1/1 text-center text-black px-[5px] section_3_span">
          <span
            className="text-[16px] text-black xl:text-3xl"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            eSaviour Limited has achieved fame internationally recognized by the
            world leaders
          </span>
        </div>
        {/* ===================For extra small devices only====================== */}
        <div className="basis-1/1 sm:hidden flex flex-wrap items-center justify-center mx-auto">
          <div className="mx-[5px]">
            <img
              src="../meta.png"
              alt="meta"
              className="w-[80px] mx-auto"
            ></img>
          </div>
          <div className="mx-[5px]">
            <img
              src="../Amazon-Ads 1.png"
              alt="mAmazon-Ads 1.pngta"
              className="w-[80px] h-[100px] mx-auto"
            ></img>
          </div>
          <div className="mx-[5px]">
            <img
              src="../Google_Ads_logo.png"
              alt="Google_Ads_logo.png"
              className="w-[60px] h-[50px] mx-auto"
            ></img>
          </div>
          <div className="mx-[5px]">
            <img
              src="../Group 210.png"
              alt="Group 210.png"
              className="w-[80px] mx-auto"
            ></img>
          </div>
        </div>

        {/* =============For small and medium devices only============ */}
        <div className="hidden sm:block lg:hidden">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto">
            <div className="basis-1/4">
              <img
                src="../meta.png"
                alt="meta"
                className="w-[80px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Amazon-Ads 1.png"
                alt="mAmazon-Ads 1.pngta"
                className="w-[80px] h-[100px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Google_Ads_logo.png"
                alt="Google_Ads_logo.png"
                className="w-[50px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Group 210.png"
                alt="Group 210.png"
                className="w-[80px] mx-auto"
              ></img>
            </div>
          </div>
        </div>
        {/* =============For large devices only============ */}
        <div className="hidden lg:block xl:hidden">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto w-[60%]">
            <div className="basis-1/4">
              <img
                src="../meta.png"
                alt="meta"
                className="w-[80px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Amazon-Ads 1.png"
                alt="mAmazon-Ads 1"
                className="w-[250px] h-[100px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Google_Ads_logo.png"
                alt="Google_Ads_logo.png"
                className="w-[50px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="../Group 210.png"
                alt="Group 210.png"
                className="w-[80px] mx-auto"
              ></img>
            </div>
          </div>
        </div>
        {/* =============For Extra large devices only============ */}
        <div className="hidden xl:block">
          <div className="basis-1/1 flex flex-wrap items-center justify-center mx-auto mt-[0px]">
            <div className="basis-1/4">
              <img
                src="./meta.png"
                alt="meta"
                className="w-auto h-[100px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="./Amazon-Ads 1.png"
                alt="Amazon-Ads 1.png"
                className="w-auto h-[150px] mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="./Google_Ads_logo.png"
                alt="Google_Ads_logo.png"
                className="w-[80px] h-auto mx-auto"
              ></img>
            </div>
            <div className="basis-1/4">
              <img
                src="./Group 210.png"
                alt="meta"
                className="w-[100px] h-[50px] mx-auto"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
