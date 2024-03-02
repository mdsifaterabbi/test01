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
        marginRight: "10px",
        zIndex: "100",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        textAlign: "center",
        paddingTop: "10px",
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
        marginLeft: "10px",
        zIndex: "100",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        textAlign: "center",
        paddingTop: "10px",
      }}
      onClick={onClick}
    />
  );
}

const CreativeSliderXL = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slider-container p-0 mb-[50px] w-[50vw] mx-auto">
        <Slider {...settings}>
          <div>
            <img
              src="./urinal_screens.png"
              alt="urinal_screens.png"
              className="mx-auto w-[300px]"
            ></img>
          </div>
          <div>
            <img
              src="./dog_waste_bags.png"
              alt="dog_waste_bags.png"
              className="mx-auto w-[300px]"
            ></img>
          </div>
          <div>
            <img
              src="./chauffeur_rides.png"
              alt="chauffeur_rides"
              className="mx-auto w-[300px]"
            ></img>
          </div>
          <div>
            <img
              src="./urinal_screens.png"
              alt="urinal_screens.png"
              className="mx-auto w-[300px]"
            ></img>
          </div>
          <div>
            <img
              src="./dog_waste_bags.png"
              alt="dog_waste_bags.png"
              className="mx-auto w-[300px]"
            ></img>
          </div>
          <div>
            <img
              src="./chauffeur_rides.png"
              alt="chauffeur_rides"
              className="mx-auto w-[300px]"
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

export default CreativeSliderXL;
