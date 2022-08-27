import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import arrowRight from "../../../../assets/images/UI/arrowLeft.svg";
import arrowLeft from "../../../../assets/images/UI/arrowRight.svg";
import ProductAnalog from "./ProductAnalog";
import styles from "./ProductAnalogs.module.sass";

export default function ProductAnalogs(props) {
  const [position, setPosition] = useState(0);
  const analogs = useMemo(() => {
    return props.analogs.map((item) => (
      <ProductAnalog item={item} key={Math.random()} />
    ));
  }, [props.analogs]);


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
  useEffect(()=>{
    setPosition(0)
  },[props.analogs])

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
      {props.analogs.length === 0 ? (
        <p className={styles.nothingFound}>Аналогов не найдено :(</p>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  );
}
