import arrowRight from "../../assets/images/UI/arrowLeft.svg";
import arrowLeft from "../../assets/images/UI/arrowRight.svg";
import { useEffect, useMemo, useState } from "react";
import styles from "./Discounts.module.sass";
import SliderItem from "./SliderItem";
import { debounce } from "../../store/wideAppFunctions";

export default function Discounts(props) {
  let idleSlide;
  const debouncedSlide = debounce(stopIdleSlide,100)
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
      prevState <= (items.length - 1) * -1212 ? prevState : prevState - 1212
    );
  }
  function slideRight() {
    setPosition((prevState) =>
      prevState === 0 ? prevState : prevState + 1212
    );
  }
  return (
    <div
      onMouseMove={debouncedSlide}
      onMouseLeave={initiateIdleSlide}
      className={styles.discountsWrapper}
    >
      <p className={styles.hotDiscounts}>Горячие предложения</p>
      <div
        style={{
          transform: `translateX(${position}px)`,
          width: `${(items.length - 1) * 1212}`,
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
