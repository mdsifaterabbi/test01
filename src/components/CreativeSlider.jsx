import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginRight: "38px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginLeft: "38px",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const CreativeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slider-container p-0 mb-[50px]">
        <Slider {...settings}>
          <div>
            <img
              src="./urinal_screens.png"
              alt="urinal_screens.png"
              className="w-[90vw] mx-auto"
            ></img>
          </div>
          <div>
            <img
              src="./dog_waste_bags.png"
              alt="dog_waste_bags.png"
              className="w-[90vw] mx-auto"
            ></img>
          </div>
          <div>
            <img
              src="./chauffeur_rides.png"
              alt="chauffeur_rides"
              className="w-[90vw] mx-auto"
            ></img>
          </div>
          <div>
            <img
              src="./urinal_screens.png"
              alt="urinal_screens.png"
              className="w-[90vw] mx-auto"
            ></img>
          </div>
          <div>
            <img
              src="./dog_waste_bags.png"
              alt="dog_waste_bags.png"
              className="w-[90vw] mx-auto"
            ></img>
          </div>
          <div>
            <img
              src="./chauffeur_rides.png"
              alt="chauffeur_rides"
              className="w-[90vw] mx-auto"
            ></img>
          </div>
        </Slider>
        <div className="w-[120px] mx-auto">
          <button className="btn btn-sm rounded-none btn-active btn-neutral ml-[5px]">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default CreativeSlider;
