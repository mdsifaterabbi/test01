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
        marginRight: "45%",
        marginTop: "20%",
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
        marginLeft: "45%",
        marginTop: "20%",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const CreativeSliderSM = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    
    <div className="slider-container p-0 mx-auto mb-[50px] w-[95vw]">
      <Slider {...settings}>
        <div>
          <img
            src="./urinal_screens.png"
            alt="urinal_screens.png"
            className="w-[98vw] mx-auto"
          ></img>
        </div>
        <div>
          <img
            src="./dog_waste_bags.png"
            alt="dog_waste_bags.png"
            className="w-[98vw] mx-auto"
          ></img>
        </div>
        <div>
          <img
            src="./chauffeur_rides.png"
            alt="chauffeur_rides"
            className="w-[98vw] mx-auto"
          ></img>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./urinal_screens.png"
              alt="urinal_screens.png"
              className="w-[98vw] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./dog_waste_bags.png"
              alt="dog_waste_bags.png"
              className="w-[98vw] mx-auto"
            ></img>
          </h3>
        </div>
        <div>
          <h3 className="text-center">
            <img
              src="./chauffeur_rides.png"
              alt="chauffeur_rides"
              className="w-[98vw] mx-auto"
            ></img>
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default CreativeSliderSM;
