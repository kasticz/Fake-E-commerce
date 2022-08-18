import CategoryItem from "./CategoryItem";
import { useRouter } from "next/router";
import styles from "./CategoryItems.module.sass";

export default function CategoryItems(props) {
  const router = useRouter();
  const items = props.items
    .sort((a, b) => {
      return props.sortData.sortOrder === "asc"
        ? a[props.sortData.sortType] - b[props.sortData.sortType]
        : b[props.sortData.sortType] - a[props.sortData.sortType];
    })
    .map((item, index) => {
      if (
        index > router.query.pageNumber * 5 - 1 ||
        index < router.query.pageNumber * 5 - 5
      )
        return "";
      return (
        <li key={Math.random()}>
          <CategoryItem item={item}></CategoryItem>
        </li>
      );
    });
  const pagesButtons = [];
  for (let i = 1; i <= Math.ceil(props.items.length / 5); i++) {
    pagesButtons.push(
      <button
        onClick={(e) =>
          router.replace({
            pathname: router.pathname,
            query:{
              sortOrder: router.query.sortOrder || ``,
              sortType: router.query.sortType || ``,
              pageNumber: i
            }
          })
        }
        className={`${
          i == router.query.pageNumber ? styles.pageButtonActive : ``
        } ${styles.pageButton}`}
        key={Math.random()}
      >
        {i}
      </button>
    );
  }

  function changePage(e) {
    console.log(e.target);
  }
  return (
    <section className={styles.items}>
      <ul>
        {items.filter((item) => !!item).length > 0 ? (
          items
        ) : (
          <div className={styles.nothingFound}>Ничего не найдено</div>
        )}
      </ul>
      <div className={styles.pageButtons}>{pagesButtons}</div>
    </section>
  );
}
