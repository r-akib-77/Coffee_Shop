// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const BookNow = () => {
  return (
    <div className=" pb-6">
      <div className="text-container || sm:text-4xl xl:text-6xl xl:py-5 lg:text-4xl  p-7 text-center text-3xl font-hero text-font2">
        <h1>Book Now !</h1>
      </div>
      <div className="Swiper_container ||  lg:max-w-[90vw]   md:max-w-[70vw] md:mx-auto  relative p-3 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper|| xl:h-[90vh] w-[80vw]  sm:w-[70vw]  sm:h-[60vh] h-[50vh] lg:h-[60vh] md:h-[22rem] "
        >
          <SwiperSlide>
            <img
              className="bg-cover h-full w-full"
              src="https://images.unsplash.com/photo-1519155031214-e8d583928bf2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="bg-cover w-full  h-full"
              src="https://plus.unsplash.com/premium_photo-1661580970887-702a4c221027?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="bg-cover h-full w-full"
              src=" https://images.unsplash.com/photo-1696104511916-d5e1d018ff19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
              "
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="bg-contain w-full h-full"
              src="https://images.unsplash.com/photo-1551462577-9aaf3ff5d927?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="bg-contain w-full h-full"
              src="https://images.unsplash.com/photo-1682536221297-9f88f06c6cc9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="bg-contain w-full h-full"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="bg-contain w-full h-full"
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="bg-contain w-full h-full"
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BookNow;
