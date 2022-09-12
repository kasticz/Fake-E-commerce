import { useState } from "react";
import {useSelector} from "react-redux";
import styles from "./ExpandableFilter.module.sass";

export default function ExpandableFilter(props) {
  const [priceExpanded, setPriceExpanded] = useState(false);
  const clientWidth = useSelector(state=> state.UI.dimensions.clientWidth)

  const inputHeight = clientWidth > 1200 ? 48 : clientWidth > 767 ? 38 : clientWidth > 570 ? 58 : 46

  const expandedHeight = 76 + props.inputs * inputHeight
  function priceExpand(e) {
    setPriceExpanded(!priceExpanded);
  }
  return (
    <div style={{height:priceExpanded ? `${expandedHeight}px` : `60px`}} className={styles.priceFilter}>
      <button
        onClick={priceExpand}
        className={`${styles.priceButton} ${priceExpanded ? styles.expanded : ``}`}
        type="button">
        {props.filter}
      </button>
      <div className={styles.priceInputs}>{props.children}</div>
    </div>
  );
}

