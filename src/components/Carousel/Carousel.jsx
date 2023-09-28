import React, { useEffect } from 'react'
import styles from "./Carousel.module.css";
import { Swiper,SwiperSlide, useSwiper} from "swiper/react";
import CarouselRightNavigation from './CarouselRightNavigation';
import CarouselLeftNavigation from './CarouselleftNavigation';
import "swiper/css";
 
const Carousel = ({data, componentRender}) => {
    const Controls=({data})=>{
        const swiper=useSwiper();
        console.log(swiper);
        useEffect(()=>{
            swiper.slideTo(0, null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[data]);
        return <></>;
    }
  return (
    <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 20px"}} 
        initialSlide={0} 
        slidesPerview={"auto"} 
        spaceBetween={40}
        allowTouchMove>
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            
            {
                data.map((item)=>{
                    return (
                        <SwiperSlide>{componentRender(item)}</SwiperSlide>
                    )
                })
            }
            <CarouselRightNavigation/>
        </Swiper>
    </div>
  )
}

export default Carousel