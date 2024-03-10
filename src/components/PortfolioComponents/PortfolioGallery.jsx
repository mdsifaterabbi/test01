

const PortfolioGallery = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="basis-1/2">
          <div className="flex flex-col">
            <div className="basis-1/1">
              <img
                src="../../../../PortfolioImages/Noor_Co.png"
                alt="Noor_Co"
                className="border mx-auto w-[80%]"
              ></img>
            </div>
            <div className="basis-1/1 mt-[20px]">
              <img
                src="../../../../PortfolioImages/Noor_Co_2.png"
                alt="Noor_Co_2.png"
                className="mx-auto border w-[80%]"
              ></img>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col">
            <div className="basis-1/1 border-red-500 mb-[10px]">
              <img
                src="../../../../PortfolioImages/Noor_Co_3.png"
                alt="Noor_Co_3"
                className="border w-[80%]"
              ></img>
            </div>
            <div className="basis-1/1 my-[10px]">
              <img
                src="../../../../PortfolioImages/Noor_Co_4.png"
                alt="Noor_Co_4"
                className="border w-[80%]"
              ></img>
            </div>
            <div className="basis-1/1 my-[10px]">
              <img
                src="../../../../PortfolioImages/Noor_Co_5.png"
                alt="Noor_Co_5"
                className="border w-[80%]"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioGallery;
