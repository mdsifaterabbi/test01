import MyNav from "../components/MyNav";
import FBACards from "../components/ServicePageComponents/FBACards";
import FBAHero from "../components/ServicePageComponents/FBAHero";
import Slider from "react-slick";
import FBATabXL from "../components/ServicePageComponents/FBATabXL";

const FBA = () => {
  const FBACardContents = [
    {
      heading: "Strategic Market Analysis",
      paragraph:
        "We conduct in-depth market research to identify trends, analyze competitor strategies, and uncover opportunities for your products.",
      image: "./FBAservice/strategic_market_analysis.png",
    },
    {
      heading: "Brand Positioning",
      paragraph:
        "Establish a strong brand presence on Amazon with our assistance. We help you define and communicate your brand identity, fostering trust and recognition among your target audience.",
      image: "./FBAservice/branding_position.png",
    },
    {
      heading: "Performance Monitoring",
      paragraph:
        "Continuous monitoring of your Amazon performance metrics allows us to identify areas for improvement and implement strategies to enhance your overall seller rating.",
      image: "./FBAservice/performance_monitoring.png",
    },
    {
      heading: "Listing Optimization",
      paragraph:
        "Our experts craft compelling product listings that not only showcase the unique value of your offerings but also drive conversions. From keyword-rich titles to engaging product descriptions, we ensure your listings stand out.",
      image: "./FBAservice/listing_optimization.png",
    },
    {
      heading: "Inventory Management",
      paragraph:
        "Effectively manage your inventory to avoid stockouts and overstock situations. Our consultancy ensures a balance that maximizes sales while minimizing storage costs.",
      image: "./FBAservice/inventory_management.png",
    },
    {
      heading: "Performance Monitoring",
      paragraph:
        "Continuous monitoring of your Amazon performance metrics allows us to identify areas for improvement and implement strategies to enhance your overall seller rating.",
      image: "./FBAservice/performance_2.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const settings_xsm_sm = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <MyNav />
      <FBAHero />
      {/* ================== Section 3 starts from here ===================== */}
      <div className="lg:w-[90vw] xl:w-[65vw] mx-auto">
        <div className="py-[50px]">
          <h1 className="text-center text-[16px] xl:text-[32px] text-[#000000]">
            Key Features of Our Amazon
          </h1>
          <p className="text-center text-[16px] xl:text-[32px] text-[#40b0fd] font-semibold">
            FBA Consultancy
          </p>
        </div>
        {/* ============= For large and extra large device =================*/}
        <div className="hidden lg:block xl:block">
          <div className="flex lg:flex-row xl:flex-row flex-wrap">
            {FBACardContents.map((c) => (
              <div
                key={c.heading}
                className="lg:basis-1/3 lg:py-[30px] xl:basis-1/3 xl:py-[10px]"
              >
                <FBACards props={c} />
              </div>
            ))}
          </div>
        </div>

        {/* ==================== For md devices  =================== */}
        <div className="hidden md:block lg:hidden xl:hidden">
          <div className="w-[80vw] mx-auto ">
            <Slider {...settings}>
              {FBACardContents.map((c) => (
                <div key={c.heading} className="md:w-[300px]">
                  <div className="md:w-[280px] mx-auto">
                    <FBACards props={c} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* ==================== For xsm and sm devices  =================== */}
        <div className="block md:hidden relative top-0 left-0">
          <div className="w-[80vw] mx-auto ">
            <Slider {...settings_xsm_sm}>
              {FBACardContents.map((c) => (
                <div key={c.heading} className="w-[330px]">
                  <FBACards props={c} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* ================== Section 3 ended from here ===================== */}
      {/* ================== Section 4 Tab index starts from here ===================== */}
      <div className="flex xl:flex-row flex-wrap w-[70%] mx-auto">
        <div className="xl:basis-3/4 border">
          <FBATabXL />
        </div>
        <div className="xl:basis-1/4 border">Contact Section</div>
      </div>
      {/* ================== Section 4 Tab Index ended from here ===================== */}
    </>
  );
};

export default FBA;
