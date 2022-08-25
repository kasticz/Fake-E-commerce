import styles from "./CategoryItem.module.sass";
import img from "../../assets/images/qwe.webp";
import ProductRating from "../UI/ProductRating";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import getImages from "../../store/getImages";
export default function CategoryItem(props) {
  const dsc = props.item.discount;
  const prc = props.item.price;

  const chars = [];
  for (let item of props.item.specificChars) {
    if (item[0] === `Максимальное разрешение датчика`) {
      chars.push(`${item[1]} dpi`);
    } else {
      chars.push(item[1]);
    }
  }

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
          <br />
          <span className={styles.itemChars}>[{chars.join(`, `)}]</span>
          <div className={styles.itemRating}>
            <ProductRating rating={props.item.rating} />
          </div>
        </a>
      </Link>
      <div className={styles.itemUI}>
        <div className={styles.prices}>
          {props.item.discount && (
            <span className={styles.oldPrice}>{props.item.price} ₽</span>
          )}
          <span className={styles.newPrice}>{props.item.newPrice} ₽</span>
        </div>
        <div className={styles.buttons}>
          <Link href={{ pathname: `/${props.item.id}` }}>
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
