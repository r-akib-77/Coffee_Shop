import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../assets/cartlogo.png";
import Card from "../cart/Card";
import { produtList } from "../cart/data";

interface State {
  cart: {
    cartItems: Options[];
    coffee: number;
    delivery: number;
    vatAndService: number;
    total: number;
  };
}

interface Options {
  name: string;
  imgSrc: string;
  id: number;
  price: number;
  qty: number;
}
const Menu = () => {
  const { cartItems } = useSelector((state: State) => state.cart);
  const dispatch = useDispatch();
  const addToCartHandler = (options: Options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Coffee is on the way to Cart");
  };

  return (
    <div className=" relative ">
      <div>
        <Link to={"/cart"}>
          <motion.img
            whileHover={{
              scale: 1.3,
            }}
            whileTap={{
              scale: 0.6,
            }}
            src={cart}
            className="fixed  max-w-10 right-1"
          />
          <p className="fixed text-white px-1 bg-font2 rounded-full right-1 top-[8.4rem]  font-black ">
            {cartItems.length}
          </p>
        </Link>
        <h1 className="text-center py-3 tracking-wide  text-font2 text-xl font-black">
          Cafè De Alfredo Special
        </h1>
        <h1 className="text-center text-4xl font-black tracking-widest  text-font2 ">
          Menu
        </h1>
      </div>

      <div className="gap-7  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-7 grid max-w-[80vw]  mx-auto grid-cols-1">
        {produtList.map((i) => (
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <Card
              handler={addToCartHandler}
              key={i.id}
              imgSrc={i.imgSrc}
              id={i.id}
              price={i.price}
              name={i.name}
              loved={i.loved}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
