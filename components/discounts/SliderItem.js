import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getImages from "../../store/getImages";
import { cartActions } from "../../store/cartSlice";
import Link from "next/link";
import cartIcon from '../../assets/images/cartLogo.svg'
import styles from "./SliderItem.module.sass";

export default function SliderItem(props) {
  const dispatch = useDispatch();
  const clientWidth = useSelector((state) => state.UI.dimensions.clientWidth);
  const p = String(props.item.price);
  const prc = String(
    Math.round(props.item.price * ((100 - props.item.discount) / 100))
  );
  const oldPrice = p.length > 3 ? `${p.slice(0, -3)} ${p.slice(-3)}` : p;
  const price = prc.length > 3 ? `${prc.slice(0, -3)} ${prc.slice(-3)}` : prc;
  const dsc = props.item.discount;
  const [image, setImage] = useState();
  const [animation, setAnimation] = useState(true);
  const [addedToCart, setAddedToCart] = useState();

  function addToCart() {
    dispatch(
      cartActions.addToCart({
        price: Math.round(
          props.item.price * ((100 - props.item.discount) / 100)
        ),
        title: props.item.title,
        id: props.item.id,
        image: props.item.images[0],
        amount: 1,
      })
    );
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1500);
  }

  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        setAnimation(true);
      }, 500);
      setTimeout(() => {
        setAnimation(false);
      }, 1500);
    }, 3000);
  }, []);
  useEffect(() => {
    async function getImg() {
      const img = await getImages([props.item.images[0]]);
      setImage(img);
    }
    getImg();
  }, [getImages]);

  return (
    <div className={styles.discountItem}>
      <div className={styles.discountMsg}>
        <p className={styles.discount}>Скидка на</p>
        <Link href={{ pathname: `/${props.item.id}` }}>
          <a>
            <p className={styles.product}>{props.item.title}</p>
          </a>
        </Link>
      </div>
      <div className={styles.prices}>
        <p className={styles.oldPrice}>{oldPrice} ₽</p>
        <p
          style={{
            animation: animation
              ? `${styles.discountAnimation} 1s ease-out`
              : ``,
          }}
          className={styles.percentDiscount}
        >
          -{dsc}%
        </p>
        <p className={styles.newPrice}>{price} ₽</p>
      </div>
      <Link
        href={{
          pathname: `/${props.item.id}`,
        }}
      >
        <a className={styles.productImageWrapper}>
          <img className={styles.productImage} src={image} alt="" />
        </a>
      </Link>

      <div className={styles.linksButtons}>
        <button onClick={addToCart} className={styles.toCart}>
          Отправить в корзину
          {addedToCart && clientWidth > 500 &&  (
            <p className={styles.addedToCartMsg}>Добавлено в корзину</p>
          )}
          {addedToCart && clientWidth <= 500 &&(<p className={styles.addedToCartMsg}><img src={cartIcon.src} alt="" /> +1</p>) }
        </button>
        <Link
          href={{
            pathname: `/${props.item.id}`,
          }}
        >
          <a>
            <button className={styles.toProductPage}>
              Перейти на страницу товара
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
