import "../../MyShadow.css";

const FBACards = ({ props }) => {
  const { heading, paragraph, image } = props;

  return (
    <>
      <div className="w-[260px] h-[250px] mb-[20px]  md:w-[280px] md:h-[250px] lg:w-[280px] lg:h-[300px] xl:w-[330px] xl:h-[270px] mx-auto xl:my-[20px] myShadowDiv relative top-0 left-0 rounded-br-[25px]">
        <p className="text-[15px] pt-[20px] pb-[10px] pl-[10px] md:text-[15px] md:pt-[40px] md:pb-[20px] lg:text-[14px] xl:text-[18px] lg:pt-[50px] lg:pb-[20px] xl:pt-[50px] xl:pb-[20px] font-bold md:text-left md:pl-[5px] lg:text-center xl:text-center text-[#40b0fd]">
          {heading}
        </p>
        <p
          className="text-[14] px-[10px] md:text-[15px] md:pl-[5px] md:pr-[10px] md:text-justify lg:text-[16px] lg:px-[20px] xl:text-[16px] xl:px-[30px] text-justify md:tracking-[1px] font-semibold opacity-80 md:font-semibold lg:font-semibold xl:font-semibold"
          style={{
            fontFamily: "Futura PT, sans-serif",
          }}
        >
          {paragraph}
        </p>
        <div className="hidden lg:block xl:block absolute bg-[#edf7fe] top-[-30px] right-[30px] lg:w-[70px] lg:h-[70px] xl:w-[70px] xl:h-[70px] rounded-full">
          <img src={image} alt={heading} className="mx-auto my-[15px]"></img>
        </div>
        <div className="hidden md:block lg:hidden xl:hidden md:absolute top-[0px] right-[0px] md:w-[60px] md:h-[60px] bg-[#edf7fe] rounded-full">
          <img src={image} alt={heading} className="mx-auto my-[15px] md:w-[30px]"></img>
        </div>
      </div>
    </>
  );
};

export default FBACards;
