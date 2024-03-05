import AboutSectionSliderXL from "./AboutSectionSliderXL";

const AboutSection_5 = () => {
  return (
    <>
      <div>
        <h1
          className="xl:text-[70px] text-center"
          style={{
            fontFamily: "Futura PT, sans-serif",
          }}
        >
          When Numbers Speak for Us
        </h1>
      </div>
      {/* ============== Slider only for XL devices =================== */}
      <div className="hidden xl:block">
        <AboutSectionSliderXL />
      </div>
    </>
  );
};

export default AboutSection_5;
