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
        <div className="text-center border w-[98vw] mx-auto bg-[#40b0fd] relative top-0 left-0">
          <h1 className="text-white text-[30px] pt-[10px] pb-[50px]">
            Clients Love Us
          </h1>
          <div className="absolute left-[-20px] top-[-20px] w-[100px] h-[100px]">
            <img src="../HomePageLogos/client.png" alt="client"></img>
          </div>
        </div>
        <div className="mt-[-50px]">
          <Slider {...settings}>
            <div>
              <div className="card lg:card-side bg-white shadow-xl w-[80vw] mx-auto rounded-none relative top-0 left-0">
                <div className="absolute bottom-[0px] left-0 w-[80%] h-[30%] pt-[50px]">
                  <img src="../HomePageLogos/client2.png" alt="client2"></img>
                </div>
                <div className="absolute top-[60%] left-[10%] w-[100px] h-[100px]">
                  <img
                    src="../HomePageLogos/client3.png"
                    alt="client3"
                    width="40px"
                  ></img>
                </div>
                <figure className="mt-[20px]">
                  <img
                    src="../Mostafiz_Rana.jpeg"
                    alt="Mostafiz_Rana.jpeg"
                    className="w-[50%]"
                  />
                </figure>
                <div className="card-body py-[10px] relative">
                  <h2 className="text-[20px] px-[5px]">Mostafiz Rana</h2>
                  <span className="px-[5px] text-[18px] text-slate-900 font-bold">
                    UnitedCarry Imports LLC
                  </span>
                  <p className="px-[5px] text-[17px] text-justify leading-[20px]">
                    We wanted to design a website for our chauffeur business in
                    Austin city. eSaviour Limited designed a simple and
                    easy-to-use website for our company. We highly recommend
                    them for web development.”
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card lg:card-side bg-white shadow-xl w-[80vw] mx-auto rounded-none relative top-0 left-0">
                <div className="absolute bottom-[0px] left-0 w-[80%] h-[30%] pt-[50px]">
                  <img src="../HomePageLogos/client2.png" alt="client2"></img>
                </div>
                <div className="absolute top-[50%] left-[10%] w-[100px] h-[100px]">
                  <img
                    src="../HomePageLogos/client3.png"
                    alt="client3"
                    width="50px"
                  ></img>
                </div>
                <figure className="mt-[20px]">
                  <img
                    src="../Robert2.jpg"
                    alt="Robert"
                    className="w-[50%] h-[50%]"
                  />
                </figure>
                <div className="card-body py-[10px] relative">
                  <h2 className="text-[20px] px-[5px] section_3_span">
                    Robert Cameron
                  </h2>
                  <span className="px-[5px] text-[16px] text-slate-900 font-bold section_3_span">
                    T3-R LLC
                  </span>
                  <p className="px-[5px] text-[15px] text-justify">
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
              <div className="card lg:card-side bg-white shadow-xl w-[80vw] mx-auto rounded-none relative top-0 left-0">
                <div className="absolute bottom-[0px] left-0 w-[80%] h-[30%] pt-[50px]">
                  <img src="../HomePageLogos/client2.png" alt="client2"></img>
                </div>
                <div className="absolute top-[50%] left-[10%] w-[100px] h-[100px]">
                  <img
                    src="../HomePageLogos/client3.png"
                    alt="client3"
                    width="50px"
                  ></img>
                </div>
                <figure className="mt-[20px]">
                  <img src="../Noor2.jpg" alt="Noor2" className="w-[50%]" />
                </figure>
                <div className="card-body  py-[10px] relative">
                  <h2 className="text-[20px] px-[5px] section_3_span ">
                    Barrister AKM NOOR A RABBI
                  </h2>
                  <span className="px-[5px] text-[16px] text-slate-900 font-bold section_3_span">
                    Noor & Co
                  </span>
                  <p className="px-[5px] text-[15px] text-justify">
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
