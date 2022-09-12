import styles from "../Mouses/MousesPage.module.sass";

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import MonitorsFilter from './MonitorsFilter'
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

export default function MonitorsPage(props) {

  const clientWidth = useSelector((state) => state.UI.dimensions.clientWidth);

  const [mobileFilter, setMobileFilter] = useState(false);

  const items = useMemo(()=>{
    return props.items.filter((item)=>{
      if(item.viewable){
        return item
      }
    })
  },[props.items])

  return (
    <main className={styles.productsPage}>
            {mobileFilter || clientWidth > 770 ? (
        <MonitorsFilter
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
        <CategoryItems
          items={items}
        />
      </div>
    </main>
  );
}
