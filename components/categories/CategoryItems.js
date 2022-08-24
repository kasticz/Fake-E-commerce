import CategoryItem from "./CategoryItem";
import { useRouter } from "next/router";
import PagesButtons from "../UI/PagesButtons";
import styles from "./CategoryItems.module.sass";

export default function CategoryItems(props) {
  const router = useRouter();
  // console.log('items',props.items)


  const sortedItems = router.query.sortType && router.query.sortOrder ? props.items.sort((a, b) => {
    return router.query.sortOrder === "asc"
      ? a[router.query.sortType] - b[router.query.sortType]
      : b[router.query.sortType] - a[router.query.sortType];
  }) :
  props.items

  const finalItems = sortedItems.map((item, index) => {
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
  return (
    <section className={styles.items}>
      <ul>
        {finalItems.filter((item) => !!item).length > 0 ? (
          finalItems
        ) : (
          <div className={styles.nothingFound}>Ничего не найдено</div>
        )}
      </ul>
      <PagesButtons itemsLength={props.itemsLength} />
    </section>
  );
}
