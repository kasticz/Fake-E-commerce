import styles from "./CategoryItem.module.sass";
import img from "../../assets/images/qwe.webp";
import ProductRating from "../UI/ProductRating";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import getImages from "../../store/getImages";
export default function CategoryItem(props) {

  const dsc = props.item.discount
  const prc = props.item.price

  const newPrice = dsc ? Math.round(prc *((100 - dsc) / 100)) : prc
  const [image, setImage] = useState();
  useEffect(() => {
    async function getImg() {
      const img = await getImages([props.item.images[0]]);
      setImage(img);
    }
    getImg();
  }, []);

  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={image} alt="" />
      <Link href={"/"}>
        <a className={styles.itemDescription}>
          <span className={styles.itemTitle}>{props.item.title}</span>
          <div className={styles.itemRating}>
            <ProductRating rating={props.item.rating} />
          </div>
        </a>
      </Link>
      <div className={styles.itemUI}>
        <div className={styles.prices}>
          {props.item.discount && <span className={styles.oldPrice}>{props.item.price} ₽</span>}
          <span className={styles.newPrice}>{newPrice} ₽</span>
        </div>
        <div className={styles.buttons}>
          <Link href={{pathname:`/${props.item.id}`}}>
            <a>
              <button className={styles.pageButton}>
                Перейти на страницу товара
              </button>
            </a>
          </Link>
          <button className={styles.buyButton}>Купить</button>
        </div>
      </div>
    </div>
  );
}
