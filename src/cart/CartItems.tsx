import { motion } from "framer-motion";
import { RiDeleteBin5Line } from "react-icons/ri";
interface Prop {
  imgSrc: string;
  name: string;
  id: number;
  price: number;
  qty: number;
  decrement: (id: number) => void;
  increment: (id: number) => void;
  deleteHandler: (id: number) => void;
}

const CartItems: React.FC<Prop> = ({
  imgSrc,
  name,
  price,
  id,
  qty,
  decrement,
  increment,
  deleteHandler,
}) => {
  return (
    <div className="Cart_items || md:h-[8rem]  my-3 text-font2 font-black  h-[15vh] relative bg-lower flex justify-between items-center ">
      <img className="object-cover h-full w-[25%]" src={imgSrc} alt={name} />

      <div className="parrent_div || w-[75%] justify-evenly  flex items-center">
        <div className="info || md:gap-8 md:text-xl flex gap-3  ">
          <h1>{name}</h1>
          <h1>${price}</h1>
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          <motion.button
            whileTap={{
              scale: 0.7,
            }}
            className="bg-low px-2 md:px-5 md:text-2xl rounded-lg text-xl"
            onClick={() => decrement(id)}
          >
            {" "}
            -
          </motion.button>
          <h1>{qty}</h1>
          <motion.button
            whileTap={{
              scale: 0.7,
            }}
            className="bg-low px-2 md:text-2xl md:px-5 rounded-lg text-xl "
            onClick={() => increment(id)}
          >
            {" "}
            +
          </motion.button>
        </div>
        <motion.button
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => deleteHandler(id)}
        >
          <RiDeleteBin5Line className="text-2xl md:text-3xl " />
        </motion.button>
      </div>
    </div>
  );
};

export default CartItems;
