import styles from '../Mouses/MousesPage.module.sass'

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import KeyboardFilter from "./KeyboardsFilter";
import { useState, useMemo } from 'react';
import { useSelector } from "react-redux";

export default function KeyboardsPage(props) {

  const clientWidth = useSelector((state) => state.UI.dimensions.clientWidth);

  const [mobileFilter, setMobileFilter] = useState(false);

  const items = useMemo(() => {
    return props.items.filter((item) => {
      if (item.viewable) {
        return item;
      }
    });
  }, [props.items]);

  return (
    <main className={styles.productsPage}>
            {mobileFilter || clientWidth > 770 ? (
        <KeyboardFilter
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
          items={props.items.filter((item) => item.viewable)}
        />
      </div>
    </main>
  );
}
