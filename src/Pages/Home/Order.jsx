import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../assets/slide1.jpg";
import image2 from "../../assets/slide2.jpg";
import image3 from "../../assets/slide3.jpg";
import image4 from "../../assets/slide4.jpg";
import image5 from "../../assets/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Order = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section>
        <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
        >
        </SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={5}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative ">
          <img src={image1} alt="" className="bg-black bg-blend-overlay" />
          <h1 className="[text-shadow:1px_1px_0px_var(--tw-shadow-color)] shadow-black text-[32px] font-[500] font-cinzel absolute bottom-5 left-[80px] text-white ">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img src={image2} alt="" />
          <h1 className="[text-shadow:1px_1px_0px_var(--tw-shadow-color)] shadow-black text-[32px] font-[500] font-cinzel absolute bottom-5 left-[80px] text-white textarea-success ">
            pizza
          </h1>{" "}
        </SwiperSlide >
        <SwiperSlide className="relative ">
          <img src={image3} alt="" />{" "}
          <h1 className="[text-shadow:1px_1px_0px_var(--tw-shadow-color)] shadow-black text-[32px]  font-[500] font-cinzel absolute bottom-5 left-[80px] text-white textarea-success ">
          Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative "> 
          <img src={image4} alt="" />{" "}
          <h1 className="[text-shadow:1px_1px_0px_var(--tw-shadow-color)] shadow-black text-[32px] font-[500] font-cinzel absolute bottom-5 left-[80px] text-white textarea-success ">
            Deserts
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img src={image5} alt="" />
          <h1 className="[text-shadow:1px_1px_0px_var(--tw-shadow-color)] shadow-black text-[32px] drop-shadow-sm  font-[500] font-cinzel absolute bottom-5 left-[80px] text-white textarea-success ">
            Salads
          </h1>{" "}
        </SwiperSlide>
      </Swiper>
      </section>
    </div>
  );
};

export default Order;
