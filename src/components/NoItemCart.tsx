import noCoffee from "../assets/noCoffee.svg";
const NoItemCart = () => {
  return (
    <div className=" h-screen relative  ">
      <img
        className=" lg:max-w-[30rem] lg:ml-96  mt-4 absolute -z-10  "
        src={noCoffee}
        alt=""
      />
      <h1 className=" lg:tracking-wider capitalize lg:ml-32 lg:bottom-[20%] text-4xl lg:text-8xl left-[2%] absolute bottom-[30%] text-font font-black text-center">
        No Coffee in the cart
      </h1>
    </div>
  );
};

export default NoItemCart;
