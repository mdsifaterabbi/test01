const OrderForm = () => {
  return (
    <>
      <div className="bg-[#40b0fd] h-[230px]">
        <img
          src="../Logo-white.png"
          alt="Logo-white.png"
          className="inline mx-auto pt-[20px]"
        ></img>
      </div>
      <div className="bg-white w-[450px] h-[500px] mx-auto mt-[-120px] px-[10px]">
        <h1 className="text-center text-[30px] font-thin pt-[50px] pb-[30px]">
          Place an order to start
        </h1>
        <div className="flex flex-wrap justify-between">
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[48%] inline my-[10px]">
            <input
              type="text"
              className="grow"
              placeholder="Your Name/Brand Name"
            />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[48%] inline my-[10px]">
            <input type="text" className="grow" placeholder="Your Email" />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[48%] inline my-[10px]">
            <input type="text" className="grow" placeholder="Your Phone" />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[48%] inline my-[10px]">
            <input type="text" className="grow" placeholder="Product Link" />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[48%] inline my-[10px]">
            <input
              type="text"
              className="grow"
              placeholder="Service Category"
            />
          </label>
          <label className="input input-bordered  bg-[#cee9ff] border-none pt-[10px] rounded-none w-[48%] inline my-[10px]">
            <input
              type="text"
              className="grow"
              placeholder="Selected Service"
            />
          </label>

          <textarea
            name="textarea"
            className="w-[100%] bg-[#cee9ff] pt-[5px] pl-[20px] min-h-[100px]  max-h-[200px] overflow-y-auto"
            placeholder="Message"
          ></textarea>
          <div className="form-group">
            <input type="checkbox" id="agree-terms" name="agree-terms" />
            <label for="agree-terms" className="pl-[20px] pt-50ox]">
              I agree with our <a href="#">Privacy Policy </a>
              <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <button
            className="btn btn-neutral btn-sm z-50 w-[100px] rounded-none mt-[10px]"
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
