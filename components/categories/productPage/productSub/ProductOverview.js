import styles from "./ProductOverview.module.sass";

export default function ProductOverview(props) {
  return (
    <div className={styles.overview}>
      <h3 className={styles.overviewTitle}>Описание товара</h3>
      <p className={styles.overviewText}>
        {props.overview}
      </p>
    </div>
  );
}
