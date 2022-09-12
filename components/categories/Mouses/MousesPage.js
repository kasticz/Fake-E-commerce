import styles from "./MousesPage.module.sass";

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import FilterPanel from "./MousesFilter";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function CategoriesTemplate(props) {
  const clientWidth = useSelector((state) => state.UI.dimensions.clientWidth);

  const [mobileFilter, setMobileFilter] = useState(false);

  const items = useMemo(()=>{
    return props.mouses.filter((item)=>{
      if(item.viewable){
        return item
      }
    })
  },[props.mouses])


  return (
    <main className={styles.productsPage}>
      {mobileFilter || clientWidth > 770 ? (
        <FilterPanel
          closeMobileFilter={
            clientWidth < 770
              ? () => {
                  setMobileFilter(false);
                }
              : null
          }
          mobileStatus={mobileFilter}
        />
      ) : (
        ""
      )}
      <div className={styles.productsMain}>
        <SortPanel />
        <button
          onClick={() => {
            setMobileFilter(true);
          }}
          className={styles.openFilter}
        >
          Открыть фильтр
        </button>
        <CategoryItems items={items} />
      </div>
    </main>
  );
}
