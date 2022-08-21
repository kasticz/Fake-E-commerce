import React, { useState } from "react";
import { useSelector } from "react-redux";
import arrowRight from "../../../../assets/images/UI/arrowLeft.svg";
import arrowLeft from "../../../../assets/images/UI/arrowRight.svg";
import ProductAnalog from "./ProductAnalog";
import styles from "./ProductAnalogs.module.sass";

export default function ProductAnalogs(props) {
  const mouses = useSelector((state) => state.mousesSorting);
  const [position, setPosition] = useState(0);
  const analogs = mouses
    .map((item) =>
      props.analogsIds.includes(item.id) ? (
        <ProductAnalog image={item.images[0]} key={Math.random()} />
      ) : null
    )
    .filter((item) => !!item);

  const dots = [];
  for (let i = 0; i < analogs.length; i++) {
    dots.push(
      <div
        key={Math.random()}
        className={`${-position / 592 === i ? styles.activeDot : ``} ${
          styles.dot
        }`}
      ></div>
    );
  }

  function slideLeft() {
    setPosition((prevState) =>
      prevState <= (analogs.length - 1) * -592 ? prevState : prevState - 592
    );
  }
  function slideRight() {
    setPosition((prevState) => (prevState >= 0 ? prevState : prevState + 592));
  }

  return (
    <div className={styles.analogs}>
      <h3 className={styles.analogsTitle}>Аналоги</h3>
      <div className={styles.sliderWrapper}>
        <ul
          style={{
            transform: `translateX(${position}px)`,
            width: `${analogs.length * 592}px`,
          }}
          className={styles.analogsItems}
        >
          {analogs}
        </ul>
        <button onClick={slideLeft} className={styles.slideLeft}>
          <img src={arrowLeft.src} alt="" />
        </button>
        <button onClick={slideRight} className={styles.slideRight}>
          <img src={arrowRight.src} alt="" />
        </button>
      </div>
      <div className={styles.dots}>{dots}</div>
    </div>
  );
}
