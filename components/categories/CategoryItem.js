import styles from "./CategoryItem.module.sass";
import img from "../../assets/images/qwe.webp";
import ProductRating from "../UI/ProductRating";
import Link from "next/link";
export default function CategoryItem(props) {
  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={img.src} alt="" />
      <Link href={"/"}>
        <a className={styles.itemDescription}>
          <span className={styles.itemTitle}>{props.item.title}</span>
          <div className={styles.itemRating}>
            <ProductRating rating={props.item.rating} />
          </div>
        </a>
      </Link>
      <div className={styles.itemPrice}>
        <span>{props.item.price} ₽</span>
        <div className={styles.buttons}>
          <Link href='/'>
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
