import "../MyShadow.css";

const BlogHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[50px] md:pb-[150px] md:pt-[50px] lg:pb-[50px]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 lg:mt-[50px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1 className="text-left font-bold pt-[20px] sm:text-[26px] md:text-xl lg:text-2xl  md:pt-[50px] md:pl-[5%] md:font-extrabold sm:pl-[5%] xl:pt-[50px] xl:font-bold xl:pl-[20%] xl:text-[38px] xl:leading-[40px]">
            Esaviour Blog's Odyssey to Self-Discovery
          </h1>
          <p
            className="text-[12px] sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[14px] md:pl-[5%] mt-[20px] mb-[0px] xl:pl-[20%] xl:pr-[200px] xl:text-[18px] xl:leading-[25px] font-bold xl:font-bold"
            style={{
              fontFamily: "Futura PT, sans-serif",
              fontStyle: "normal",
            }}
          >
            A treasure trove of wisdom and inspiration. Navigate through a
            myriad of articles spanning mindfulness, personal growth, and
            holistic well-being. Embark on a transformative journey towards a
            more fulfilling and enlightened life.
          </p>
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center order-0 md:order-1 mt-[40px] pt-[20px] lg:mt-[0px] xl:text-center xl:pt-[0px]">
          <img
            src="../BlogPageIcons/eSaviour-blog-image.png"
            alt="eSaviour-blog-image"
            className="w-[280px] xl:w-[25%]"
          ></img>
        </div>
      </div>
      <div className="xl:w-[565px] mx-auto py-[10px] rounded-md xl:mt-[-75px]">
        <h1 className="font-bold xl:text-[20px] xl:pb-[10px] text-center">
          Please Subscribe For New Blog Post
        </h1>
        <div className="bg-[#ffffff] py-[10px] rounded-md myShadowDiv myBlogPlaceHolder">
            <input type="text" placeholder="Email" className="py-[5px] xl:w-[400px] xl:pl-[10px] xl:mr-[65px]"></input>
            <button className="btn btn-sm btn-info rounded-md text-white text-opacity-80 uppercase">Submit</button>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
