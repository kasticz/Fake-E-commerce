import styles from "./MousesPage.module.sass";

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import { useSelector } from "react-redux";
import FilterPanel from "./MousesFilter";

export default function CategoriesTemplate(props) {
  // const mouses = useSelector((state) => state.mousesSorting);

  const mouses = useSelector((state) => state.mousesSorting);

  return (
    <main className={styles.productsPage}>
      <FilterPanel />
      <div className={styles.productsMain}>
        <SortPanel />
        <CategoryItems
          itemsLength={props.itemsLength}
          items={props.mouses.filter((item) => item.viewable)}
        />
      </div>
    </main>
  );
}