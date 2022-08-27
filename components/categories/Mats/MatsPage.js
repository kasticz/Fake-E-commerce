import styles from "../Mouses/MousesPage.module.sass";

import SortPanel from "../SortPanel";
import CategoryItems from "../CategoryItems";
import MatsFilter from "./MatsFilter";
import { useSelector } from "react-redux";

export default function MatsPage(props) {

    const Mns = useSelector(state => state.monitors)

  return (
    <main className={styles.productsPage}>
      <MatsFilter/>      
      <div className={styles.productsMain}>
        <SortPanel />
        <CategoryItems
          items={props.items.filter((item) => item.viewable)}
        />
      </div>
    </main>
  );
}
