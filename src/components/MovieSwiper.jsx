import 'swiper/css';
import React from 'react';
import './movieSwiper.css';
// import SwiperCore from 'swiper/core';

import{Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import {Autoplay,EffectCoverflow} from 'swiper/modules';

// SwiperCore.use([Autoplay, EffectCoverflow]);
function MovieSwiper({slides , slideChange}){
    return(
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay:2500,
                disableOnInteraction:false,
            }}
            coverflowEffect={{
                rotate:50,
                stretch:0,
                depth:100,
                modifier:1,
                slideShadows:true,
            }}
            loop={true}
            modules={[Autoplay,EffectCoverflow]}
            className="movieSwiper"
        >
            {
                slides.map(slide=>(
                    <SwiperSlide key={slide._id}>
                        <img 
                        src={slide.previewImg} 
                        alt="Preview Image" 
                         onClick={()=>slideChange(slide._id)}/>
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
    )
}

export default MovieSwiper;