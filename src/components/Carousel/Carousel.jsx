import React, { useEffect } from 'react'
import styles from "./Carousel.module.css";
import { Swiper,SwiperSlide, useSwiper} from "swiper/react";
import CarouselRightNavigation from './CarouselRightNavigation';
import CarouselLeftNavigation from './CarouselleftNavigation';
import "swiper/css";
//import { Navigation } from "swiper";

const Controls=({data})=>{
    const swiper=useSwiper();
    
    useEffect(()=>{
        swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);
    
}
 
const Carousel = ({data, componentRender}) => {
    
  return (
    <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 20px"}} 
        initialSlide={0} 
        //modules={[Navigation]}
        slidesPerview={"auto"} 
        spaceBetween={40}
        allowTouchMove>
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {
                data.map((item)=>{
                    return (
                        <SwiperSlide>{componentRender(item)}</SwiperSlide>
                    )
                })
            }
          
        </Swiper>
    </div>
  )
}

export default Carousel