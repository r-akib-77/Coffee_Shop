import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="font-hero sticky top-0 z-50 bg-[#b08564d5] text-[#543310]">
      <div className="flex items-center justify-between px-3">
        <div className="logo_container text-3xl font-semibold">
          <Link to={"/"} className="flex flex-col items-center">
            <img className="max-w-[5rem]" src={logo} alt="" />
            <span className=" relative bottom-2 text-2xl  text-[#543310] font-semibold ">
              Café De Alfredo
            </span>
          </Link>
        </div>
        <div className="block font-extrabold md:hidden text-4xl cursor-pointer">
          <button onClick={() => setOpen((prev) => !prev)}>
            {!open ? <AiOutlineBars /> : <GrClose />}
          </button>
        </div>
        <div className="md:text-2xl xl:gap-3 xl:px-3  xl:text-3xl md:font-extrabold hidden md:flex md:items-center space-x-6 text-2xl">
          <Link
            className="active:scale-[.8] transition-all ease-in-out hover:scale-[1.2]"
            to="/home"
          >
            Home
          </Link>
          <a
            className="active:scale-[.8] transition-all ease-in-out hover:scale-[1.2]"
            href="#about"
          >
            About
          </a>
          <Link
            className="active:scale-[.8] transition-all ease-in-out hover:scale-[1.2]"
            to="/menu"
          >
            Menu
          </Link>
          <a
            className="active:scale-[.8] transition-all ease-in-out hover:scale-[1.2]"
            href="#contact"
          >
            Contact{" "}
          </a>
          <NavLink
            to={"/menu"}
            className=" hover:scale-[1.2] active:scale-[.8] transition-all ease-in-out px-3 py-2 bg-[#543310]  text-[#F7F6F2] tracking-wide rounded-2xl"
          >
            Order Now
          </NavLink>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "50vh" : 0 }}
        className={`transition-height duration-500 ease-in-out overflow-hidden 
        text-2xl font-semibold md:hidden`}
      >
        <motion.ul
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          className="flex flex-col gap-4 items-center capitalize tracking-wide"
        >
          {["home", "about", "menu", "contact"].map((item, i) => (
            <motion.li
              whileTap={{
                scale: 0.8,
              }}
              key={item}
              custom={i}
              variants={listVariants}
            >
              <Link to={`/${item}`}>{item}</Link>
            </motion.li>
          ))}
          <NavLink
            to={"/menu"}
            className=" active:scale-[0.8] transition-all ease-in-out px-3 py-2 bg-[#543310]  text-[#F7F6F2] tracking-wide rounded-2xl"
          >
            Order Now
          </NavLink>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
