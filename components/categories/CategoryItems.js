import CategoryItem from "./CategoryItem";
import { useRouter } from "next/router";
import PagesButtons from "../UI/pagesButtons";
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
  return (
    <section className={styles.items}>
      <ul>
        {items.filter((item) => !!item).length > 0 ? (
          items
        ) : (
          <div className={styles.nothingFound}>Ничего не найдено</div>
        )}
      </ul>   
      <PagesButtons itemsLength={props.items.length}/>  
    </section>
  );
}
