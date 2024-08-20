import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoItemCart from "../components/NoItemCart";
import CartItems from "./CartItems";

interface Options {
  name: string;
  imgSrc: string;
  id: number;
  price: number;
  qty: number;
}

interface State {
  cart: {
    cartItems: Options[];
    coffee: number;
    delivery: number;
    vatAndService: number;
    total: number;
  };
}

interface I {
  qty: number;
  name: string;
  id: number;
  imgSrc: string;
  price: number;
}

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, coffee, delivery, vatAndService, total } = useSelector(
    (state: State) => state.cart
  );
  const incrementHandler = (id: number) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const decrementHandler = (id: number) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const deleteHandler = (id: number) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };

  return (
    <>
      <motion.div
        whileTap={{
          scaleY: 1.1,
        }}
        className="backToMenu ||  flex justify-center bg-lower  z-20 "
      >
        <Link to={"/menu"}>
          <button className=" lg:fixed lg:z-10 lg:left-1 lg:px-3 lg:py-3  px-8 my-1 rounded-full flex font-black  bg-low py-2  items-center gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                fill-opacity="0"
                d="M17 14V17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V14z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </path>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="48"
                  stroke-dashoffset="48"
                  d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="48;0"
                  />
                </path>
                <path
                  stroke-dasharray="14"
                  stroke-dashoffset="14"
                  d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="14;28"
                  />
                </path>
              </g>
              <mask id="lineMdCoffeeHalfEmptyTwotoneLoop0">
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
                >
                  <animateMotion
                    calcMode="linear"
                    dur="3s"
                    path="M0 0v-8"
                    repeatCount="indefinite"
                  />
                </path>
              </mask>
              <rect
                width="24"
                height="0"
                y="7"
                fill="currentColor"
                mask="url(#lineMdCoffeeHalfEmptyTwotoneLoop0)"
              >
                <animate
                  fill="freeze"
                  attributeName="y"
                  begin="0.8s"
                  dur="0.6s"
                  values="7;2"
                />
                <animate
                  fill="freeze"
                  attributeName="height"
                  begin="0.8s"
                  dur="0.6s"
                  values="0;5"
                />
              </rect>
            </svg>
            Menu
          </button>
        </Link>
      </motion.div>
      {cartItems.length > 0 ? (
        <div className=" main_container || min-h-screen ">
          <div className="cartContainer ||   lg:grid lg:grid-cols-12 ">
            <main className="max-w-[95vw] mx-auto lg:col-span-9 mt-2">
              {cartItems?.map((i: I) => (
                <CartItems
                  increment={incrementHandler}
                  decrement={decrementHandler}
                  qty={i.qty}
                  deleteHandler={deleteHandler}
                  price={i.price}
                  key={i.id}
                  imgSrc={i.imgSrc}
                  id={i.id}
                  name={i.name}
                />
              ))}
            </main>

            <aside className="bg-lower  lg:flex lg:flex-col lg:justify-center lg:gap-7  lg:h-[100%] lg:mt-5 lg:static lg:rounded-none  lg:col-span-3  rounded-t-full md:tracking-wider md:text-2xl text-font2 text-lg w-full fixed text-center bottom-1 pt-2 font-black tracking-wider">
              <h2>Coffee : ${coffee}</h2>
              <h2>Delevery : ${delivery}</h2>
              <h2>Vat & Service : ${vatAndService}</h2>
              <hr className="h-1 my-2 mx-auto bg-font2 w-[90%]" />
              <h2>Total : ${total}</h2>
              <motion.button
                whileTap={{
                  scaleY: 1.3,
                }}
                className="bg-low rounded-t-3xl md:tracking-widest md:text-3xl  lg:mb-5 w-full py-3 font-black text-2xl capitalize"
              >
                pay now
              </motion.button>
            </aside>
          </div>
        </div>
      ) : (
        <NoItemCart />
      )}
    </>
  );
};

export default Cart;
