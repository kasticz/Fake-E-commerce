import styles from "./CategoryItem.module.sass";
import img from "../../assets/images/qwe.webp";
import ProductRating from "../UI/ProductRating";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import getImages from "../../store/getImages";
import { cartActions } from "../../store/cartSlice";
import {useDispatch} from 'react-redux'
export default function CategoryItem(props) {

  const dispatch = useDispatch()
  const dsc = props.item.discount;
  const prc = String(props.item.price);
  const newPrc = String(props.item.newPrice)

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

  function addToCart(){
    dispatch(cartActions.addToCart({
      price: props.item.newPrice,
      title: props.item.title,
      id: props.item.id,
      manufacturer: props.item.manufacturer,
      image: props.item.images[0],
      amount: 1
    }))
  }

  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={image} alt="" />
      <Link href={{ pathname: `/${props.item.id}` }}>
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
            <span className={styles.oldPrice}>{prc.length > 3 ? `${prc.slice(0,-3)} ${prc.slice(-3)}` : prc} ₽</span>
          )}
          <span className={styles.newPrice}>{newPrc.length > 3 ? `${newPrc.slice(0,-3)} ${newPrc.slice(-3)}` : newPrc} ₽</span>
        </div>
        <div className={styles.buttons}>
          <Link href={{ pathname: `/${props.item.id}` }}>
            <a>
              <button className={styles.pageButton}>
                Перейти на страницу товара
              </button>
            </a>
          </Link>
          <button onClick={addToCart} className={styles.buyButton}>Купить</button>
        </div>
      </div>
    </div>
  );
}
