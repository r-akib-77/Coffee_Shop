// import coffeLogo from "../assets/coffee.svg";
// const About = () => {
//   return (
//     <div
//       id="about"
//       className=" mt-6 max-w-[85vw] md:max-w-[90vw] mx-auto font-hero text-font2   "
//     >
//       <h1 className="text-center md:4xl md:leading-loose text-3xl pb-7">
//         About Us
//       </h1>
//       <div className="Container ||  md:gap-2  flex flex-col md:flex-row   bg-[#f2ead3a7] ">
//         <div className="image_container || md:basis-1/2 ">
//           <img
//             className="max-w-[50%] md:pt-[40%] mx-auto"
//             src={coffeLogo}
//             alt=""
//           />
//         </div>
//         <div className="text_container || md:text-sm md:basis-1/2 p-2 text-center text-sm ">
//           <span className="text-3xl">W</span>elcome to Cafè De Alfredo, where
//           every cup tells a story. We're more than just passionate about coffee;
//           we're dedicated to crafting exceptional experiences for every
//           customer. Our journey began with a simple love for the bean, but it's
//           grown into a community hub where friends gather, ideas percolate, and
//           memories are made. Nestled in the heart of Main Street{" "}
//           <span className="underline"> Anytown, USA</span>, our cozy coffee
//           haven offers artisan-roasted beans, masterfully crafted cups, and
//           free-flowing conversations. Our team is a family united by our shared
//           love for coffee and commitment to unparalleled service. From the
//           moment you step inside, you're not just a customer; you're part of our
//           Cafè De Alfredo family. Whether you're a seasoned connoisseur or just
//           starting your journey into specialty coffee, join us in savoring the
//           rich aroma and smooth taste. Come on in, grab a seat, and let us pour
//           you a cup of perfection. Welcome to our world of coffee. Welcome to
//           <span className="underline text-xl"> Cafè De Alfredo</span> .
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import coffeLogo from "../assets/coffee.svg";

const About = () => {
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      scale: scrollPosition > 100 ? 1.3 : 0.9,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    });
  }, [scrollPosition, controls]);

  return (
    <div
      id="about"
      className=" mt-6 max-w-[85vw] md:max-w-[90vw] mx-auto font-hero text-font2"
    >
      <h1 className=" sm:py-10 sm:text-4xl text-center md:4xl md:leading-loose text-3xl pb-7 xl:text-6xl">
        About Us
      </h1>
      <div className="Container || xl:mt-16 md:gap-2 flex flex-col md:flex-row bg-[#f2ead3a7]">
        <div className="image_container || md:basis-1/2">
          <motion.img
            className="max-w-[50%] xl:pt-8  lg:pt-[5%] z-10 md:pt-[40%] mx-auto"
            src={coffeLogo}
            alt=""
            animate={controls}
          />
        </div>
        <div className=" text_container || sm:py-4  xl:text-xl md:text-sm md:basis-1/2 p-2 text-center text-sm">
          <span className="text-3xl xl:text-5xl">W</span>elcome to Cafè De
          Alfredo, where every cup tells a story. We're more than just
          passionate about coffee; we're dedicated to crafting exceptional
          experiences for every customer. Our journey began with a simple love
          for the bean, but it's grown into a community hub where friends
          gather, ideas percolate, and memories are made. Nestled in the heart
          of Main Street <span className="underline"> Anytown, USA</span>, our
          cozy coffee haven offers artisan-roasted beans, masterfully crafted
          cups, and free-flowing conversations. Our team is a family united by
          our shared love for coffee and commitment to unparalleled service.
          From the moment you step inside, you're not just a customer; you're
          part of our Cafè De Alfredo family. Whether you're a seasoned
          connoisseur or just starting your journey into specialty coffee, join
          us in savoring the rich aroma and smooth taste. Come on in, grab a
          seat, and let us pour you a cup of perfection. Welcome to our world of
          coffee. Welcome to
          <br />
          <span className="underline xl:text-2xl lg:text-xl">
            {" "}
            Cafè De Alfredo
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default About;
