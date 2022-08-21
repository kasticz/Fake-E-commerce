import styles from "./CharCategory.module.sass";

export default function CharCategory(props) {

  const categoryItems = props.data.map((item) => {
    return (
      <li key={Math.random()} className={styles.item}>
        <div className={styles.charType}>{item[0]} </div>
        <div className={styles.char}>{item[1]}</div>
      </li>
    );
  });
  return (
    <ul className={styles.category}>
      <h3>{props.title}</h3>
      {categoryItems}
    </ul>
  );
}
