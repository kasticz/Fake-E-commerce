import img from "../../assets/images/qwe.webp";
import arrowRight from "../../assets/images/UI/arrowLeft.svg";
import arrowLeft from "../../assets/images/UI/arrowRight.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Discounts.module.sass";

export default function header(props) {
  const [position, setPosition] = useState(0);
  const [idleSlide, setIdleSlide] = useState("");
  function stopIdleSlide() {
    console.log(idleSlide)
    if (idleSlide) {
      clearTimeout(idleSlide);
    }
  }
  function initiateIdleSlide() {
    setIdleSlide(
      setTimeout(() => {
        slideLeft();
      }, 5000)
    );
  }
  useEffect(() => {
    setIdleSlide(
      setTimeout(() => {
        slideLeft();
      }, 3000)
    );
    return () => {
      if (idleSlide) setIdleSlide("");
    };
  }, [position]);
  function slideLeft() {
    setPosition((prevState) =>
      prevState <= -2436 ? prevState : prevState - 1218
    );
  }
  function slideRight() {
    setPosition((prevState) =>
      prevState === 0 ? prevState : prevState + 1218
    );
  }
  return (
    <div
      onMouseLeave={initiateIdleSlide}
      onMouseMove={stopIdleSlide}
      className={styles.discountsWrapper}
    >
      <p className={styles.hotDiscounts}>Горячие предложения</p>
      <div
        style={{ transform: `translateX(${position}px)` }}
        className={styles.discountsSlider}
      >
        <div className={styles.discountItem}>
          <div className={styles.discountMsg}>
            <p className={styles.discount}>Скидка на</p>
            <p className={styles.product}>{`{SteelSerious g358 pro}`}</p>
          </div>
          <div className={styles.prices}>
            <p className={styles.oldPrice}>Старая цена</p>
            <p className={styles.percentDiscount}>{`{-21%}`}</p>
            <p className={styles.newPrice}>Новая цена</p>
          </div>
          <img src={img.src} alt="" />
        </div>
        <div className={styles.discountItem}>
          <div className={styles.discountMsg}>
            <p className={styles.discount}>Скидка на</p>
            <p className={styles.product}>{`{something g358 pro}`}</p>
          </div>
          <div className={styles.prices}>
            <p className={styles.oldPrice}>Старая цена</p>
            <p className={styles.percentDiscount}>{`{-21%}`}</p>
            <p className={styles.newPrice}>Новая цена</p>
          </div>
          <img src={img.src} alt="" />
        </div>
        <div className={styles.discountItem}>
          <div className={styles.discountMsg}>
            <p className={styles.discount}>Скидка на</p>
            <p className={styles.product}>{`{smth2 g358 pro}`}</p>
          </div>
          <div className={styles.prices}>
            <p className={styles.oldPrice}>Старая цена</p>
            <p className={styles.percentDiscount}>{`{-21%}`}</p>
            <p className={styles.newPrice}>Новая цена</p>
          </div>
          <img src={img.src} alt="" />
        </div>
      </div>
      <div className={styles.linksButtons}>
        <button className={styles.toCart}>Отправить в корзину</button>
        <Link href=''>
          <a>
            <button className={styles.toProductPage}>
              Перейти на страницу товара
            </button>
          </a>
        </Link>
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
