import styles from "./SortPanel.module.sass";
export default function SortPanel(props) {
  return (
    <div className={styles.sortPanel}>
      <p>Сортировка:</p>
      <ul className={styles.sortingCriterias}>
        <li className={styles.sortingItem}>
          <button className={styles.sortingCriteria}>Сначала дорогие</button>
        </li>
        <li className={styles.sortingItem}>
          <button className={styles.sortingCriteria}>Сначала дешёвые</button>
        </li>
        <li className={styles.sortingItem}>
          <button className={styles.sortingCriteria}>По рейтингу</button>
        </li>
        <li className={styles.sortingItem}>
          <button className={styles.sortingCriteria}>По размеру скидки</button>
        </li>
      </ul>
    </div>
  );
}
