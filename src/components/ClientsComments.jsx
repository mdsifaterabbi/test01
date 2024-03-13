import Slider from "react-slick";
const ClientsComments = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mb-[50px]">
        <div className="text-center">
          <h1 className="text-sky-500 TabContextFontSpan text-[30px]">
            Clients{" "}
            <strong className="text-sky-500 TabContextFontSpan2">Love</strong>{" "}
            Us
          </h1>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <div className="card lg:card-side shadow-xl w-[90vw] mx-auto">
                <figure className="mt-[20px]">
                  <img
                    src="../Mostafiz_Rana.jpeg"
                    alt="Mostafiz_Rana.jpeg"
                    className="w-[50%]"
                  />
                </figure>
                <div className="card-body py-[10px]">
                  <h2 className="text-[20px] px-[5px] section_3_span">
                    Mostafiz Rana
                  </h2>
                  <span className="px-[5px] text-[16px] text-slate-900 font-bold section_3_span">
                    UnitedCarry Imports LLC
                  </span>
                  <p className="px-[5px] text-[15px] section_3_span">
                    We wanted to design a website for our chauffeur business in
                    Austin city. eSaviour Limited designed a simple and
                    easy-to-use website for our company. We highly recommend
                    them for web development.”
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card lg:card-side shadow-xl w-[90vw] mx-auto">
                <figure className="mt-[20px]">
                  <img
                    src="../Robert2.jpg"
                    alt="Robert"
                    className="w-[50%] h-[50%]"
                  />
                </figure>
                <div className="card-body py-[10px]">
                  <h2 className="text-[20px] px-[5px] section_3_span">
                    Robert Cameron
                  </h2>
                  <span className="px-[5px] text-[16px] text-slate-900 font-bold section_3_span">
                    T3-R LLC
                  </span>
                  <p className="px-[5px] text-[15px] section_3_span">
                    eSaviour Limited helped us launch a new Amazon FBA product
                    in the pest repeller category. They handled product
                    photography, designed listing images, created EBC content,
                    and also wrote an SEO-optimized title and bullet points for
                    our product.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card lg:card-side shadow-xl w-[90vw] mx-auto">
                <figure className="mt-[20px]">
                  <img
                    src="../Noor2.jpg"
                    alt="Noor2"
                    className="w-[50%]"
                  />
                </figure>
                <div className="card-body  py-[10px]">
                  <h2 className="text-[20px] px-[5px] section_3_span ">
                    Barrister AKM NOOR A RABBI
                  </h2>
                  <span className="px-[5px] text-[16px] text-slate-900 font-bold section_3_span">
                    Noor & Co
                  </span>
                  <p className="px-[5px] text-[15px] section_3_span">
                    As a legal professional, I badly needed social media
                    branding and content management for my law firm ‘Noor & Co.’
                    eSaviour Limited helped me build the entire brand design
                    from scratch.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ClientsComments;
