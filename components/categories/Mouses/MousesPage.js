import styles from "./MousesPage.module.sass";

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import FilterPanel from "./MousesFilter";

export default function CategoriesTemplate(props) {

  return (
    <main className={styles.productsPage}>
      <FilterPanel/>
      <div className={styles.productsMain}>
        <SortPanel />
        <CategoryItems
          items={props.mouses.filter((item) => item.viewable)}
        />
      </div>
    </main>
  );
}
