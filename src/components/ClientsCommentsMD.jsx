import Slider from "react-slick";
import "../MyShadow.css";
const ClientsCommentsMD = () => {
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
        <h1 className="text-sky-500 text-[22px] TabContextFontSpan">
          Clients{" "}
          <strong className="text-sky-500 TabContextFontSpan2">Love</strong> Us
        </h1>
      </div>
      <div className="mb-[100px]">
        <Slider {...settings} className="pt-[50px]">
          <div className="mb-[30px]">
            <div className="card card-side w-[90%] glass mx-auto">
              <figure className="pt-[20px] px-[100px]">
                <img
                  src="../Mostafiz_Rana.jpeg"
                  alt="Mostafiz_Rana.jpeg"
                  className="w-[100px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title px-[0px]">Mostafiz Rana</h2>
                <span className="pl-[0px] text-[12px] text-slate-900 font-bold">
                  UnitedCarry Imports LLC
                </span>
                <p className="pl-[0px] text-[12px] text-slate-600 opacity-50">
                  We wanted to design a website for our chauffeur business in
                  Austin city. eSaviour Limited designed a simple and
                  easy-to-use website for our company. We highly recommend them
                  for web development.”
                </p>
              </div>
            </div>
          </div>
          <div className="mb-[30px]">
            <div className="card card-side w-[90%] glass mx-auto">
              <figure className="pt-[20px] px-[100px]">
                <img src="../Robert2.jpg" alt="Robert" className="w-[100px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title px-[0px]">Robert Cameron</h2>
                <span className="pl-[0px] text-[12px] text-slate-900 font-bold">
                  T3-R LLC
                </span>
                <p className="pl-[0px] text-[12px] text-slate-600 opacity-50">
                  eSaviour Limited helped us launch a new Amazon FBA product in
                  the pest repeller category. They handled product photography,
                  designed listing images, created EBC content, and also wrote
                  an SEO-optimized title and bullet points for our product.
                </p>
              </div>
            </div>
          </div>
          {/* ================ */}
          <div className="mb-[30px]">
            <div className="card card-side w-[90%] glass mx-auto">
              <figure className="pt-[20px] px-[100px]">
                <img src="../Noor.jpeg" alt="Noor" className="w-[100px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title px-[0px]">
                  Barrister AKM NOOR A RABBI
                </h2>
                <span className="pl-[0px] text-[12px] text-slate-900 font-bold">
                  <p className="pl-[0px] text-[12px] text-slate-600 opacity-50">
                    As a legal professional, I badly needed social media
                    branding and content management for my law firm ‘Noor & Co.’
                    eSaviour Limited helped me build the entire brand design
                    from scratch.
                  </p>
                  Noor & Co
                </span>
              </div>
            </div>
          </div>
          {/* ================ */}
        </Slider>
      </div>
    </>
  );
};

export default ClientsCommentsMD;
