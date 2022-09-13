import React, { Fragment, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import arrowRight from "../../../../assets/images/UI/arrowLeft.svg";
import arrowLeft from "../../../../assets/images/UI/arrowRight.svg";
import ProductAnalog from "./ProductAnalog";
import slideIcon from "../../../../assets/images/UI/slide.svg";
import styles from "./ProductAnalogs.module.sass";

export default function ProductAnalogs(props) {
  const [position, setPosition] = useState(0);
  const clientWidth = useSelector((state) => state.UI.dimensions.clientWidth);
  const [startSlideCoords, setStartSlideCoords] = useState(null);
  const [endSlideCoords, setEndSlideCoords] = useState(null);
  const sliderItemWidth =
    clientWidth > 1300
      ? 592
      : clientWidth > 1000
      ? 444
      : clientWidth > 769
      ? 346
      : clientWidth - 28;
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
        className={`${
          -position / sliderItemWidth === i ? styles.activeDot : ``
        } ${styles.dot}`}
      ></div>
    );
  }
  useEffect(() => {
    setPosition(0);
  }, [props.analogs]);

  function slideLeft() {
    setPosition((prevState) =>
      prevState <= (analogs.length - 1) * -sliderItemWidth
        ? prevState
        : prevState - sliderItemWidth
    );
  }
  function slideRight() {
    setPosition((prevState) =>
      prevState >= 0 ? prevState : prevState + sliderItemWidth
    );
  }

  function touchStart(e){
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    setStartSlideCoords({x,y})
  }
  function touchMove(e){
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    const slideThreshold = clientWidth > 570 ? 200 : clientWidth > 400 ? 150 : 100

    if(x + slideThreshold < startSlideCoords.x){
      setStartSlideCoords(e.touches[0].clientX,e.touches[0].clientY)
      slideLeft()
      return
    } 
    if(x - slideThreshold > startSlideCoords.x ){
      setStartSlideCoords(e.touches[0].clientX,e.touches[0].clientY)
      slideRight()
      return
    } 
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
              onTouchStart={touchStart}
              onTouchMove={touchMove}
              style={{
                transform: `translateX(${position}px)`,
                width: `${analogs.length * sliderItemWidth}px`,
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
      {clientWidth < 771 && analogs.length > 0 && (
        <img className={styles.slideIcon} src={slideIcon.src} alt="" />
      )}
    </div>
  );
}
