import heroImg from "../assets/hero.png";
const Hero = () => {
  return (
    <>
      <div className=" relative font-hero">
        <div className="image_container ||  -z-10   ">
          <img
            className="w-full md:h-full sm:h-full  h-[40vh]"
            src={heroImg}
            alt=""
          />
        </div>

        <div className="title_container ||   text-[#ae8566]  ">
          <h1 className="  sm:leading-relaxed sm:text-5xl sm:ml-14 sm:top-10 leading-tight absolute top-6 text-4xl ml-8  md:text-6xl md:leading-loose md:ml-16 lg:text-8xl lg:mt-11 lg:ml-24 lg:leading-tight xl:text-9xl  xl:leading-tight  ">
            {" "}
            Welcome to <br /> Cafè De Alfredo{" "}
          </h1>
          <h1 className=" sm:ml-16 sm:text-2xl sm:mb-10 absolute capitalize bottom-[3rem] left-[3.5rem] md:text-2xl md:left-[15rem] md:mb-10  lg:text-4xl lg:mb-16 lg:ml-16  xl:text-4xl xl:top-[60%] xl:left-[40%]   ">
            {" "}
            - where every cup tells a story
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
