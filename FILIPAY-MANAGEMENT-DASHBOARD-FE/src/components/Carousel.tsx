import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';  

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Carousel() : JSX.Element {


   
  
    return(
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'bullets' 
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{margin: '10px'}}
      >
        <SwiperSlide  className ="p-20 rounded-xl m-4" style = {{backgroundImage:'url("http://filipworks.com/fmd/assets/background-image.JPG")'}}>
            
              <img src ={import.meta.env.VITE_ASSET_URL+"/assets/first-slide-text.png"} />
            
        </SwiperSlide>
        
        <SwiperSlide  >
        <div className = "p-20 rounded-xl m-4" style = {{backgroundImage:'url("http://filipworks.com/fmd/assets/background-image.JPG")'}}>
            <img src ={import.meta.env.VITE_ASSET_URL+"/assets/background-image.JPG"} />
        </div>
           
        </SwiperSlide>
       
      </Swiper>
        </>
    )

}