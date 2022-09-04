import styles from "./ProductMain.module.sass";
import ProductRating from "../../../UI/ProductRating";
import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice";
import ProductAnalogs from "./ProductAnalogs";
import { useEffect } from "react";
import getImages from "../../../../store/getImages";
import { useState } from "react";

export default function ProductMain(props) {
  const product = props.product;
  const [images,setImages] = useState('')

  const subTitle = product.specificChars.map((item)=>{
    if(item[0] === `Максимальное разрешение датчика`){
      return `${item[1]} dpi`
    }
    if(item[0] === `Тип сенсора мыши`){
      return `${item[1]} сенсор`
    }
    return item[1]
  }).join(`, `)  

  useEffect(()=>{
    getImages(product.images).then((data)=>{
      setImages(data)
    }) 
  },[])





  return (
    <section className={styles.productMain}>
      <h2 className={styles.productMainTitle}>{product.title}</h2>
      <div className={styles.productWindow}>
        <ProductImages images={product.images} />
        <div className={styles.productUI}>
          <h3 className={styles.productSubTitle}>{subTitle}</h3>
          <ProductRating rating={product.rating} />
          <ProductPrice
            discount={product.discount || null}
            price={product.price}
            id={product.id}
            title={product.title}
            image={product.images[0]}
          />
          <ProductAnalogs analogs={props.analogs} />
        </div>
      </div>
    </section>
  );
}
