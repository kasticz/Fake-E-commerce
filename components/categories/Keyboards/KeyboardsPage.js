import styles from '../Mouses/MousesPage.module.sass'

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import KeyboardFilter from "./KeyboardsFilter";
import { useSelector } from "react-redux";

export default function KeyboardsPage(props) {

    const kbs = useSelector(state => state.keyboards)

  return (
    <main className={styles.productsPage}>
      <KeyboardFilter/>
      <div className={styles.productsMain}>
        <SortPanel />
        <CategoryItems
          items={props.items.filter((item) => item.viewable)}
        />
      </div>
    </main>
  );
}
