import { motion } from "framer-motion";
import love from "../assets/love.png";
const Card: React.FC<cardProps> = ({
  loved,
  id,
  name,
  imgSrc,
  price,
  handler,
}) => {
  return (
    <main className="  rounded-sm ring-font2 ring-4 bg-lower text-font2 w-[256px] mx-auto ">
      <img
        className=" h-[192px] object-cover w-full "
        src={imgSrc}
        alt={name}
      />
      <h1 className="text-center  text-2xl">{name}</h1>
      <div className="flex items-center justify-between max-w-[70%] mx-auto">
        <div className="font-black text-lg"> $ {price}</div>
        <div className="max-w-7 flex gap-1 items-center">
          <img src={love} alt="" />
          <p className="text-sm text-gray-500 "> {loved}</p>
        </div>
      </div>

      <motion.button
        whileHover={{
          scaleY: 1.158,
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="bg-font rounded-t-lg rounded-b-sm w-full  py-2 font-extrabold text-2xl"
        onClick={() => handler({ name, imgSrc, price, qty: 1, id })}
      >
        Buy now
      </motion.button>
    </main>
  );
};

interface cardProps {
  id: number;
  name: string;
  imgSrc: string;
  price: number;
  loved: number;
  handler: (options: {
    name: string;
    imgSrc: string;
    price: number;
    id: number;
    qty: number;
  }) => void;
}

export default Card;
