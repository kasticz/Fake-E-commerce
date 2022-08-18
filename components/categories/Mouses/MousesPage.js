import styles from "./MousesPage.module.sass";

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import { useSelector } from "react-redux";
import FilterPanel from "./MousesFilter";

export default function CategoriesTemplate(props) {
  const mouses = useSelector((state) => state.mousesSorting);

  return (
    <main className={styles.productsPage}>
      <FilterPanel />
      <div className={styles.productsMain}>
        <SortPanel />
        <CategoryItems
          sortData={{
            sortOrder: props.sortData.sortOrder,
            sortType: props.sortData.sortType
          }}
          items={mouses.filter((item) => item.viewable)}
        />
      </div>
    </main>
  );
}
