import { useState } from "react";
import styles from "./ExpandableFilter.module.sass";

export default function ExpandableFilter(props) {
  const [priceExpanded, setPriceExpanded] = useState(false);

  const expandedHeight = 76 + props.inputs *45
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

