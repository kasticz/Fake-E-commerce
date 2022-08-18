import { useRouter } from "next/router";
import styles from "./SortPanel.module.sass";
export default function SortPanel(props) {
  const router = useRouter();
  const sortType = router.query.sortType || ``
  const sortOrder = router.query.sortOrder || ``
  function priceDesc() {
    router.replace({
      pathname: `${router.pathname}`,
      query: { sortType: "price", sortOrder: "desc", pageNumber: 1 },
    });
  }
  function priceAsc() {
    router.replace({
      pathname: `${router.pathname}`,
      query: { sortType: "price", sortOrder: "asc", pageNumber: 1 },
    });
  }
  function ratingDesc() {
    router.replace({
      pathname: `${router.pathname}`,
      query: { sortType: "rating", sortOrder: "desc", pageNumber: 1 },
    });
  }
  function discountDesc() {
    router.replace({
      pathname: `${router.pathname}`,
      query: { sortType: "discount", sortOrder: "desc", pageNumber: 1 },
    });
  }
  return (
    <div className={styles.sortPanel}>
      <p>Сортировка:</p>
      <ul className={styles.sortingCriterias}>
        <li className={styles.sortingItem}>
          <button onClick={priceDesc} className={`${(sortType === 'price' && sortOrder === 'desc') ? styles.activeSorting : ``} ${styles.sortingCriteria}`}>
            Сначала дорогие
          </button>
        </li>
        <li className={styles.sortingItem}>
          <button onClick={priceAsc} className={`${(sortType === 'price' && sortOrder === 'asc') ? styles.activeSorting : ``} ${styles.sortingCriteria}`}>
            Сначала дешёвые
          </button>
        </li>
        <li className={styles.sortingItem}>
          <button onClick={ratingDesc} className={`${sortType === 'rating' ? styles.activeSorting : ``} ${styles.sortingCriteria}`}>
            По рейтингу
          </button>
        </li>
        <li className={styles.sortingItem}>
          <button onClick={discountDesc} className={`${sortType === 'discount' ? styles.activeSorting : ``} ${styles.sortingCriteria}`}>
            По размеру скидки
          </button>
        </li>
      </ul>
    </div>
  );
}
