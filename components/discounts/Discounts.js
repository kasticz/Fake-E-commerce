import arrowRight from "../../assets/images/UI/arrowLeft.svg";
import arrowLeft from "../../assets/images/UI/arrowRight.svg";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./Discounts.module.sass";
import SliderItem from "./SliderItem";

export default function Discounts(props) {
  let idleSlide;
  const items = useMemo(() => {
    return props.products.map((item) => {
      return <SliderItem item={item} key={Math.random()} />;
    });
  }, []);

  const [position, setPosition] = useState(0);

  function stopIdleSlide(e) {
    clearTimeout(idleSlide);
  }
  function initiateIdleSlide() {
    idleSlide = setTimeout(() => {
      slideLeft();
    }, 3000);
  }

  useEffect(() => {
    idleSlide = setTimeout(() => {
      slideLeft();
    }, 3000);

    return () => {
      clearTimeout(idleSlide);
    };
  }, [position]);

  function slideLeft() {
    setPosition((prevState) =>
      prevState <= (items.length - 1) * -1218 ? prevState : prevState - 1218
    );
  }
  function slideRight() {
    setPosition((prevState) =>
      prevState === 0 ? prevState : prevState + 1218
    );
  }
  return (
    <div
      onMouseEnter={stopIdleSlide}
      onMouseLeave={initiateIdleSlide}
      className={styles.discountsWrapper}
    >
      <p className={styles.hotDiscounts}>Горячие предложения</p>
      <div
        style={{
          transform: `translateX(${position}px)`,
          width: `${(items.length - 1) * 1218}`,
        }}
        className={styles.discountsSlider}
      >
        {items}
      </div>
      <button onClick={slideLeft} className={styles.slideLeft}>
        <img src={arrowLeft.src} alt="" />
      </button>
      <button onClick={slideRight} className={styles.slideRight}>
        <img src={arrowRight.src} alt="" />
      </button>
    </div>
  );
}
