import React, { useEffect, useState } from 'react'
import orangeStar from '../../assets/images/UI/RatingOrange.svg'
import greyStar from '../../assets/images/UI/RatingGrey.svg'
import halfStar from '../../assets/images/UI/RatingHalf.svg'
import styles from './ProductRating.module.sass'
export default function ProductRating(props) {
  const rating = 4.6;  
  const stars = [1,2,3,4,5]
  return (
    <React.Fragment>
        {stars.map((item,index)=>{
            let currStar = ''
            const currDiff = rating - index
            if(currDiff > 0.8) currStar = orangeStar;
            if(currDiff < 0.2) currStar = greyStar;
            if(currDiff > 0.2 && currDiff < 0.8) currStar = halfStar
            return <img key={Math.random()} className={styles.star} src={currStar.src} alt="" />
        })}
        <span className={styles.rating}>{`${rating}`}</span>
    </React.Fragment>
  );

}
