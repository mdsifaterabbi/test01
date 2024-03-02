import Slider from "react-slick";
const ClientsCommentsXL = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-sky-500 text-[22px] xl:text-[40px] TabContextFontSpan">
          Clients{" "}
          <strong className="text-sky-500 TabContextFontSpan2">Love</strong> Us
        </h1>
      </div>
      <div className="mb-[100px] w-[70vw] mx-auto">
        <Slider
          {...settings}
          className="pt-[0px]"
          autoplay={true} // Enables autoplay
          autoplaySpeed={3000} // Sets the autoplay speed in milliseconds (optional)
        >
          <div className="mb-[30px] xl:w-[100%]">
            <div className="card card-side shadow-xl xl:w-[70%] xl:mx-auto">
              <figure className="xl:w-[300px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px]"
                />
              </figure>
              <div className="card-body xl:max-w-[500px]">
                <p className="pt-[80px] xl:text-[14px] section_3_span">
                  xxxWhen launching our first products on Amazon, we were
                  worried and sought the assistance of Virtual Experts. They
                  provided end-to-end services for our Amazon FBA business,
                  including product research, product listing, content writing,
                  EBC content, and more.”
                </p>
                <h2 className="relative left-[0px] top-[-60px] xl:text-[20px] text-sky-500 section_3_span">
                  Iam Page
                </h2>
                <span className="relative left-[0px] top-[-70px] xl:text-[14px] section_3_span">
                  Owner, Bullseye Sellers Ecom Consulting
                </span>
              </div>
            </div>
          </div>
          <div className="mb-[30px] xl:w-[100%]">
            <div className="card card-side shadow-xl xl:w-[70%] xl:mx-auto">
              <figure className="xl:w-[300px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px]"
                />
              </figure>
              <div className="card-body xl:max-w-[500px]">
                <p className="pt-[80px] xl:text-[14px] section_3_span">
                  xxxWhen launching our first products on Amazon, we were
                  worried and sought the assistance of Virtual Experts. They
                  provided end-to-end services for our Amazon FBA business,
                  including product research, product listing, content writing,
                  EBC content, and more.”
                </p>
                <h2 className="relative left-[0px] top-[-60px] xl:text-[20px] text-sky-500 section_3_span">
                  Iam Page
                </h2>
                <span className="relative left-[0px] top-[-70px] xl:text-[14px] section_3_span">
                  Owner, Bullseye Sellers Ecom Consulting
                </span>
              </div>
            </div>
          </div>
          <div className="mb-[30px] xl:w-[100%]">
            <div className="card card-side shadow-xl xl:w-[70%] xl:mx-auto">
              <figure className="xl:w-[300px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                  className="xl:w-[200px] xl:h-[200px] xl:my-[100px] xl:ml-[0px]"
                />
              </figure>
              <div className="card-body xl:max-w-[500px]">
                <p className="pt-[80px] xl:text-[14px] section_3_span">
                  xxxWhen launching our first products on Amazon, we were
                  worried and sought the assistance of Virtual Experts. They
                  provided end-to-end services for our Amazon FBA business,
                  including product research, product listing, content writing,
                  EBC content, and more.”
                </p>
                <h2 className="relative left-[0px] top-[-60px] xl:text-[20px] text-sky-500 section_3_span">
                  Iam Page
                </h2>
                <span className="relative left-[0px] top-[-70px] xl:text-[14px] section_3_span">
                  Owner, Bullseye Sellers Ecom Consulting
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ClientsCommentsXL;
