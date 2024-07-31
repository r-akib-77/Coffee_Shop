import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaFacebookMessenger, FaTwitter } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-lower  py-3 bottom-0  text-font2 ">
      <section className="logo ||  flex text-4xl md:text-5xl lg:  justify-evenly py-3   ">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <FaFacebook className=" cursor-pointer  " />{" "}
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <FaFacebookMessenger className="cursor-pointer" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <AiFillInstagram className="cursor-pointer " />{" "}
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <FaTwitter className="cursor-pointer " />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <FaMapLocationDot className=" cursor-pointer  " />
        </motion.div>
      </section>
      <hr className=" h-[3px]  bg-low" />
      <section className="flex items-center justify-between sm:px-8  px-3">
        <div className="text-sm sm:text-lg">
          <p>
            &copy;Cafè De Alfredo <br /> All Rights Reserved
          </p>
        </div>
        <div className="max-w-16 sm:max-w-18 md:max-w-20">
          <img className="w-full" src={logo} alt="" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
