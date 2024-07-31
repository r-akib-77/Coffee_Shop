import { motion } from "framer-motion";
import contact_img from "../assets/contact.svg";

const Contact = () => {
  return (
    <div id="contact" className="text-font2 font-hero  ">
      <h1 className=" xl:text-6xl xl:my-10 lg:text-4xl sm:text-4xl text-center font-hero text-3xl pb-4 ">
        Contact Us
      </h1>

      <div className="container_ || lg:flex lg:w-full   mt-6  ">
        <div className="Img_container || lg:ml-5  lg:w-[50vw]  mx-auto h-auto max-w-[80vw] rounded-full ">
          <div>
            <motion.img
              src={contact_img}
              className="w-full  lg:z-[-2]"
              alt=""
            />
          </div>
          <h1 className=" mt-16 xl:my-5 xl:text-3xl lg:pt-2 lg:text-2xl lg: sm:pt-9 sm:text-xl text-sm text-center pt-5 max-w-[80vw] mx-auto">
            Thank you for your interest in contacting us. Whether you have a
            question, comment, or feedback, we're here to help. Please feel free
            to reach out to us using any of the methods right:
          </h1>
        </div>
        <div className="text_container || flex  flex-col xl:ml-16 lg:flex lg:items-start lg:pl-0 justify-center gap-6 lg:flex-col  sm:pl-7 my-5  max-w-[90vw] mx-auto">
          <div className="py-3 flex items-center gap-2">
            <span className="xl:text-5xl text-lg lg:text-3xl sm:text-2xl">
              Gmail:
            </span>
            <span className=" xl:text-3xl sm:tracking-wider sm:text-xl lg:text-2xl lg:pt-2  ">
              {" "}
              brewandbeanscafe@gmail.com
            </span>
          </div>
          <div className="py-3 flex items-center gap-2">
            <h1 className=" xl:text-5xl text-lg sm:text-2xl lg:text-3xl  ">
              Phone:
            </h1>
            <span className="  xl:text-3xl lg:text-2xl lg:pt-2  tracking-wide sm:tracking-wider sm:text-xl">
              {" "}
              +555-867-5309
            </span>
          </div>
          <div className="py-3 flex items-center gap-2">
            <h1 className=" xl:text-5xl text-lg  lg:text-3xl  sm:text-2xl">
              Address:
            </h1>
            <span className=" xl:text-3xl lg:text-2xl lg:pt-2  tracking-wide sm:text-xl  sm:tracking-wider">
              75/7b Silk Road , Usa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
