import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Cardsection from "../Card";
import "./carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel({ data, navId }) {
  return (
    <div className="carousel-container">
      <Swiper
        style={{ color: "white" }}
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        navigation={{
          nextEl: `.arrow-left-${navId}`,
          prevEl: `.arrow-right-${navId}`,
        }}
        virtual
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            <Cardsection
              imgSrc={card.image}
              likes={card.likes}
              followers={card.follows}
              label={card.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`arrow-left-${navId} arrow-left arrow`}>
        <img src="Group 3741.png" alt="left" />
      </div>
      <div className={`arrow-right-${navId} arrow-right arrow`}>
        <img src="Group 3740.png" alt="rigth" />
      </div>
    </div>
  );
}
