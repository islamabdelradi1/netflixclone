import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const getimg = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`
}
function Cardlist({valu}) {
    
    return (
        <>
        
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} key={valu.id} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={getimg(valu.poster_path)} alt={valu.name} /> 
            </SwiperSlide>
        </Swiper>

        </>
        
    )
}

export default Cardlist
