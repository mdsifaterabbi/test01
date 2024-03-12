const OrderForm = () => {
  return (
    <>
      <div className="bg-[#40b0fd] xl:h-[230px] pb-[50px]">
        <img
          src="../Logo-white.png"
          alt="Logo-white.png"
          className="inline mx-auto pt-[20px]"
        ></img>
      </div>
      <div className="w-[80vw] ml-[-5px] xl:bg-white xl:w-[450px] h-[500px] xl:mx-auto xl:mt-[-120px] xl:px-[10px]">
        <h1 className="text-center text-[12px] xl:text-[30px] font-thin xl:pt-[50px] xl:pb-[30px]">
          Place an order to start
        </h1>
        <div className="flex flex-wrap justify-between">
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[80vw] sm:w-[74vw] md:w-[61vw] lg:w-[46vw] xl:w-[48%] xl:inline mb-[5px] xl:my-[10px]">
            <input
              type="text"
              className="grow"
              placeholder="Your Name/Brand Name"
            />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[80vw] sm:w-[74vw] md:w-[61vw] lg:w-[46vw] xl:w-[48%] xl:inline mb-[5px] xl:my-[10px]">
            <input type="text" className="grow" placeholder="Your Email" />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[80vw] sm:w-[74vw] md:w-[61vw] lg:w-[46vw] xl:w-[48%] xl:inline mb-[5px] xl:my-[10px]">
            <input type="text" className="grow" placeholder="Your Phone" />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[80vw] sm:w-[74vw] md:w-[61vw] lg:w-[46vw] xl:w-[48%] xl:inline mb-[5px] xl:my-[10px]">
            <input type="text" className="grow" placeholder="Product Link" />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[80vw] sm:w-[74vw] md:w-[61vw] lg:w-[46vw] xl:w-[48%] xl:inline mb-[5px] xl:my-[10px]">
            <input
              type="text"
              className="grow"
              placeholder="Service Category"
            />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[80vw] sm:w-[74vw] md:w-[61vw] lg:w-[46vw] xl:w-[48%] mb-[5px] xl:inline xl:my-[10px]">
            <input
              type="text"
              className="grow"
              placeholder="Selected Service"
            />
          </label>

          <textarea
            name="textarea"
            className="w-[100%] sm:w-[74vw] md:w-[61vw] bg-[#cee9ff] pt-[5px] pl-[20px] min-h-[100px]  max-h-[200px] overflow-y-auto"
            placeholder="Message"
          ></textarea>
          <div className="form-group">
            <input type="checkbox" id="agree-terms" name="agree-terms" />
            <label for="agree-terms" className="pl-[20px] pt-[50px]">
              I agree with our <a href="#">Privacy Policy </a>
              <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <button
            className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mt-[10px] mr-[100%] sm:mr-[100%] md:mr-[100%] lg:mr-[100%]"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            SEND
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
