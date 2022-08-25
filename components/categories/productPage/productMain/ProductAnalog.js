import styles from "./ProductAnalog.module.sass";
import Link from 'next/link'
import img from '../../../../assets/images/mouses/SteelSeriesRival3.webp'
import getImages from "../../../../store/getImages";
import { useState,useEffect } from "react";


export default function ProductAnalog(props) {
    const [image,setImage] = useState('')
    useEffect(()=>{
      async function getImg(){
        const img = await getImages([props.item.images[0]])
        setImage(img)
      }
      getImg()
      },[])    

  return (
    <li className={styles.analogItem}>
      <Link href={{pathname:`/${props.item.id}`}}>
        <a>
          <img src={image} className={styles.analogImg} />
          <div className={styles.analogDescr}>
            <div className={styles.analogTitle}>
              {props.item.title}
            </div>
            <div className={styles.analogPrice}>{Math.round(props.item.price *((100 - props.item.discount) / 100))} ₽</div>
          </div>
        </a>
      </Link>
    </li>
  );
}
