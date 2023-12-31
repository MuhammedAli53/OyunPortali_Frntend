import React from "react";
import "./upcoming-event.scss";
import { Container } from "react-bootstrap";
import item from "../../helpers/data/knight-item.json";
import EventCard from "./game-card";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import {Navigation} from 'swiper/modules';

const UpcomingEvents = () => {

  /*   const upcomingEvents = games.filter((event) => new Date(event.date)> new Date() )/* new Date bir constructor. Bunu çağırdığımızda şuanın tarihini verir. ilk olarak event içindeki date string bir dataydı bunu Date çevirdik. Sonrasında da şuanki 
    tarihten büyükse diye filtreledik */ 

  return (
    <div className="upcoming-events">
      <Container>
        <h2>
           <span>Knight Online Item</span> 
        </h2>
        <Swiper
          modules={Navigation}
          spaceBetween={50} /* aralık. */
          slidesPerView={3} /* ekranda kaç kart olacak */
          onSlideChange={() => console.log("slide change")} /* her slide değiştiğğinde yapmasını istediğin kodu buraya yazıyorsun */
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next"
          }} 
          breakpoints={{ /* breakpointlerimiz. */
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          
            {
                        item.map((item) => <SwiperSlide key={item.id}> <EventCard {... item} /> </SwiperSlide> )
            }
          
                
        </Swiper>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
