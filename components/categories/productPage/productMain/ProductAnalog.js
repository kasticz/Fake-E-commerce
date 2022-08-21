import styles from "./ProductAnalog.module.sass";
import Link from 'next/link'
import img2 from "../../../../assets/images/mats.png";
import getImages from "../../../../store/getImages";
import { useState,useEffect } from "react";


export default function ProductAnalog(props) {
    const [image,setImage] = useState('')
    useEffect(()=>{
        getImages([props.image]).then((data)=>{
          setImage(data)
        }) 
      },[])    
  return (
    <li className={styles.analogItem}>
      <Link href="/">
        <a>
          <img src={image} className={styles.analogImg} />
          <div className={styles.analogDescr}>
            <div className={styles.analogTitle}>
              Something SteelSeries pro 999
            </div>
            <div className={styles.analogPrice}>10 999 ₽</div>
          </div>
        </a>
      </Link>
    </li>
  );
}
