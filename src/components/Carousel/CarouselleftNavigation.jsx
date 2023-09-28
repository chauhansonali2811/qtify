import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from './CarouselleftNavigation.module.css';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg'

const CarouselLeftNavigation = () => {
    const swiper=useSwiper();
    const [isBeginning, setIsBeginning]=useState(swiper.isBeginning);

    useEffect(()=>{
       swiper.on("slideChange", function(){
        setIsBeginning(swiper.isBeginning);
       })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className={styles.leftNavigation}>
     {!isBeginning&&<LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation