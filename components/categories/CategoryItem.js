import styles from "./CategoryItem.module.sass";
import img from '../../assets/images/qwe.webp'
import ProductRating from "../UI/ProductRating";
import Link from 'next/link'
export default function CategoryItem(props) {
  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={img.src} alt="" />
      <div className={styles.itemDescription}>
        <Link href={'/'}>
        <a className={styles.itemTitle}>
          Мышь проводная ExeGate SH-9025 черный [EX264096RUS]
        </a>
        </Link>
        <div className={styles.itemRating}>
            <ProductRating/>
        </div>
      </div>
      <div className={styles.itemPrice}>
        <span>199 ₽</span>
        <button className={styles.buyButton}>Купить</button>
      </div>
    </div>
  );
}
