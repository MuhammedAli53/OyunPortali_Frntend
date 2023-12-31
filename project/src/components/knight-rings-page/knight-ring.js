import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import knightRing from "../../helpers/data/knight-ring.json";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './knight-ring.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import KnightRingCard from './knight-ring-card';

export default function KnightRing() {
  return (
    <Container>
      <h4>Knight Rings</h4>
      <Swiper
       // slidesPerView={5}
        breakpoints={{
          576:{
            slidesPerView:2
          },
          768:{
            slidesPerView:3
          },
          1200:{
            slidesPerView:5
          }

        }
          
        }
        
        
        //centeredSlides={true}
        spaceBetween={15}
       /*  pagination={{
          type: 'fraction', kaç adet içerik var onu gösteriyor.
        }} */
        //navigation={true}
        //modules={[Pagination, Navigation]}
        className="mySwiper d-lg-4"
      >
        
        {knightRing.map((ring)=><SwiperSlide> <KnightRingCard {... ring}/></SwiperSlide> )}
        
       
      </Swiper>
    </Container>
  );
}
