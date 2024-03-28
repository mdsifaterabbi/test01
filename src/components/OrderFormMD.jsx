import { useForm } from "react-hook-form";
import { useEmailJS } from "../ContextAPI/EmailJSContextAPI";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

const OrderFormMD = () => {
  const form = useRef();
  const { emailData, setEmailData } = useEmailJS();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [localOrderData, setLocalOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [orderEmailStatus, setOrderEmailStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting }, // Access isSubmitting property
  } = useForm();

  const submitOrder = (data) => {
    console.log("Clicked submitOrder function");
    console.log(data);
    console.log(emailData);

    setLocalOrderData({
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
          setOrderEmailStatus(true);
        },
        (error) => {
          console.log(error.text, "didn't send");
          alert(error.text, "didn't send");
          setOrderEmailStatus(false);
        }
      );

    //call the reset form based on the response from email js
    if (setOrderEmailStatus) {
      reset();
    }
  };

  useEffect(() => {
    setEmailData(localOrderData);
  }, [localOrderData]);

  useEffect(() => {
    // console.log("After form submission: ");
    // console.log(emailData);
  }, [emailData]);

  const senderNameFormatted = JSON.stringify(emailData.name);

  return (
    <>
      {/* <div className="bg-[#40b0fd] xl:h-[230px] pb-[50px]">
        <img
          src="../Logo-white.png"
          alt="Logo-white.png"
          className="inline mx-auto pt-[20px]"
        ></img>
      </div>
      <div className="w-[80vw] ml-[-5px] xl:bg-white xl:w-[450px] h-[550px] xl:mx-auto xl:mt-[-120px] xl:px-[10px]">
        <div className="w-[460px]">
          <h1 className="text-center text-[12px] xl:text-[30px] font-thin xl:pt-[50px] xl:pb-[30px]">
            Place an order to start
          </h1>
        </div>
        <div className="flex flex-wrap justify-between w-[465px] overflow-hidden">
          <form ref={form} onSubmit={handleSubmit(submitOrder)}>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className=" bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[230px] border mycontactPlaceholder xl:mr-[5px]"
            />

            {errors.name && <p style={{ color: "red" }}>Name is required.</p>}

            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className=" bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[230px] mx-[2px]  mycontactPlaceholder"
            />

            {errors.email && <p style={{ color: "red" }}>Email is required.</p>}

            <input
              {...register("phone", { required: true })}
              placeholder="phone"
              className=" bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[230px]  mycontactPlaceholder xl:mr-[5px]"
            />
            {errors.phone && <p>Please enter phone number.</p>}

            <input
              {...register("productLink", { required: true })}
              placeholder="productLink"
              className=" bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[230px] mx-[2px]  mycontactPlaceholder"
            />
            {errors.productLink && <p>Please enter productLink.</p>}

            <input
              {...register("serviceCategory", { required: true })}
              placeholder="serviceCategory"
              className=" bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[230px]  mycontactPlaceholder xl:mr-[5px]"
            />
            {errors.serviceCategory && <p>Please enter serviceCategory.</p>}

            <input
              {...register("selectedService", { required: true })}
              placeholder="selectedService"
              className=" bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[230px] mx-[2px] mycontactPlaceholder"
            />
            {errors.selectedService && <p>Please enter selectedService.</p>}

            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className=" block bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[460px] mycontactPlaceholder"
              style={{
                maxHeight: "250px",
                minHeight: "150px",
                marginBottom: "20px",
              }}
            />
            {errors.message && <p>Tell us About Your Business.</p>}

            <input type="checkbox" {...register("isChecked")} />
            <label htmlFor="isChecked">
              <span
                style={{
                  color: "black",
                  paddingLeft: "5px",
                }}
              >
                I agree with our
              </span>
              <span
                style={{
                  color: "#40b0fd",
                  fontWeight: 800,
                  paddingLeft: "5px",
                }}
              >
                Privacy Policy, Terms & Conditions
              </span>
            </label>
            {errors.isChecked && <span>{errors.isChecked.message}</span>}

            <input
              type="submit"
              className="block bg-[#40b0fd] font-semibold text-[12px] xl:text-[18px] lg:font-bold xl:font-bold w-[100%] text-white py-[5px] xl:py-[10px] xl:tracking-[2px] mt-[20px]"
              value="SEND"
              style={{
                cursor: "pointer",
              }}
            />

            {isSubmitting || orderEmailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
              orderEmailStatus ? (
                <p className="text-green-500 font-semibold">
                  Hello {senderNameFormatted}, your email was sent successfully!
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
      </div> */}
      <div className="bg-[#ffffff] h-[700px]">
        <div className="bg-[#40b0fd] xl:h-[230px] pb-[50px]">
          <img
            src="../Logo-white.png"
            alt="Logo-white.png"
            className="relative top-0 left-[50%] translate-x-[-50%] pt-[20px]"
          ></img>
        </div>
        <div className="ml-[-5px] bg-white w-[750px] h-[550px] mx-auto mt-[-20px] px-[10px]">
          <h1 className="text-center text-[12px] xl:text-[30px] font-thin xl:pt-[50px] xl:pb-[30px]">
            Place an order to start
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <form
              ref={form}
              onSubmit={handleSubmit(submitOrder)}
              className="pl-[10px]"
            >
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[330px] border mycontactPlaceholder ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[330px] border mycontactPlaceholder ${
                  errors.email ? "border-red-500" : ""
                }`}
              />

              <input
                {...register("phone", { required: true })}
                placeholder="phone"
                className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[330px] border mycontactPlaceholder ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />

              <input
                {...register("productLink", { required: true })}
                placeholder="productLink"
                className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[330px] border mycontactPlaceholder ${
                  errors.productLink ? "border-red-500" : ""
                }`}
              />

              <input
                {...register("serviceCategory", { required: true })}
                placeholder="serviceCategory"
                className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[330px] border mycontactPlaceholder ${
                  errors.serviceCategory ? "border-red-500" : ""
                }`}
              />

              <input
                {...register("selectedService", { required: true })}
                placeholder="selectedService"
                className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[330px] border mycontactPlaceholder ${
                  errors.selectedService ? "border-red-500" : ""
                }`}
              />

              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] w-[665px] border mycontactPlaceholder ${
                  errors.message ? "border-red-500" : ""
                }`}
                style={{
                  maxHeight: "250px",
                  minHeight: "150px",
                  marginBottom: "20px",
                }}
              />

              <div>
                <input
                  type="checkbox"
                  {...register("isChecked")} // Register for form validation
                  onChange={handleCheckboxChange} // Update state on change
                  checked={isChecked} // Set checked state based on state variable
                />
                <label htmlFor="isChecked">
                  <span
                    style={{
                      color: "black",
                      paddingLeft: "5px",
                    }}
                  >
                    I agree with our
                  </span>
                  <span
                    style={{
                      color: "#40b0fd",
                      fontWeight: 800,
                      paddingLeft: "5px",
                    }}
                  >
                    Privacy Policy, Terms & Conditions
                  </span>
                </label>
              </div>

              <input
                type="submit"
                className={`block bg-[#000000] text-[12px] xl:text-[18px] lg:font-bold w-[90px] text-white py-[5px] xl:py-[10px] xl:tracking-[2px] mt-[20px] rounded-md ${
                  isChecked ? "" : "hidden"
                }`}
                value="SEND"
                style={{
                  cursor: "pointer",
                }}
              />

              {isSubmitting || orderEmailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
                orderEmailStatus ? (
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
      </div>
    </>
  );
};

export default OrderFormMD;
