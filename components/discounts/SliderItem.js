import { useEffect, useState } from "react";
import img from "../../assets/images/qwe.webp";
import getImages from "../../store/getImages";
import Link from "next/link";
import styles from "./SliderItem.module.sass";

export default function SliderItem(props) {
  const prc = props.item.price;
  const dsc = props.item.discount;
  const [image, setImage] = useState();

  useEffect(() => {
    async function getImg() {
      const img = await getImages([props.item.images[0]]);
      setImage(img);
    }
    getImg();
  }, [getImages]);

  return (
    <div className={styles.discountItem}>
      <div className={styles.discountMsg}>
        <p className={styles.discount}>Скидка на</p>
        <p className={styles.product}>{props.item.title}</p>
      </div>
      <div className={styles.prices}>
        <p className={styles.oldPrice}>{prc} ₽</p>
        <p className={styles.percentDiscount}>-{dsc}%</p>
        <p className={styles.newPrice}>
          {Math.round(prc * ((100 - dsc) / 100))} ₽
        </p>
      </div>
      <Link href={{
            pathname: `/${props.item.id}`,
        }}>
        <a>
          <img src={image} alt="" />
        </a>
      </Link>

      <div className={styles.linksButtons}>
        <button className={styles.toCart}>Отправить в корзину</button>
        <Link href={{
            pathname: `/${props.item.id}`,
        }}>
          <a>
            <button className={styles.toProductPage}>
              Перейти на страницу товара
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
