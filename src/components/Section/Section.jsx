import React, { useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';


const Section = ({title, data}) => {

    const [carouselToggle, setCarouselToggle]=useState(true);
    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle);
    }
    console.log(data);
  return (
    <div>
       <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle?"Show All":"Collapse All"}
        </h4>
       </div>
       {
        !data.length?(
            <CircularProgress/>
        ):(
            <div className={styles.cardWrapper}>
                {
                    !carouselToggle?
                    (<div className={styles.wrapper}>
                        {
                            data.map((item)=>
                            
                            <Card key={item.id} data={item} type="album"/>)
                        }
                    </div>):(
                        <Carousel data={data} componentRender={(data)=><Card data={data} type="album"/>}/>
                    )
                }
            </div>
        )
       }
    </div>
  )
}

export default Section