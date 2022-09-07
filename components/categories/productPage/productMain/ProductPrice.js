import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";

import styles from "./ProductPrice.module.sass";

export default function ProductPrice(props) {
  const dispatch = useDispatch();
  const amountRef = useRef();
  const itemInCart = useSelector(state=> state.cart ? state.cart.find(item=>item.id === props.id) : {})
  const dsc = props.discount;
  const price = String(props.price);
  const newPrice = Math.round(props.price * ((100 - dsc) / 100));

  

  const [addedToCart, setAddedToCart] = useState();

  const [inputMessage, setInputMessage] = useState();


  function addToCart(e) {
    e.preventDefault();
    if(itemInCart && itemInCart.amount > 19){
      setInputMessage('У Вас уже максимально допустимое количество этого товара в корзине')
      return;
    }
    dispatch(
      cartActions.addToCart({
        price: newPrice,
        title: props.title,
        id: props.id,
        image: props.image,
        amount: amountRef.current.value,
      })
    );
    amountRef.current.value = 1;
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1500);
  }

  function checkAmount() {
    setInputMessage(false)
    if (amountRef.current.value > 20) {
      setInputMessage("Количество товара не может превышать 20");
      amountRef.current.value = 20;
    }
    if (amountRef.current.value < 0) {
      setInputMessage("Количество товара не может быть отрицательным");
      amountRef.current.value = 1;
    }
  }
  return (
    <div onBlur={()=> inputMessage ? setInputMessage(false): ``} className={styles.productBuy}>
      <div className={styles.prices}>
        {dsc && (
          <div className={styles.oldPrice}>
            {`${price.slice(0, -3)} ${price.slice(-3)}`} ₽
          </div>
        )}
        <div
          style={{ marginTop: dsc ? "0.5rem" : `0` }}
          className={styles.newPrice}
        >
          {newPrice.length > 3
            ? `${newPrice.slice(0, -3)} ${newPrice.slice(-3)}`
            : newPrice}{" "}
          ₽
        </div>
      </div>
      <form onSubmit={addToCart} className={styles.addToCart}>
        <input
          onBlur={()=>{setInputMessage(false)}}
          onChange={checkAmount}
          ref={amountRef}
          type="number"
          defaultValue={1}
        />
        <button className={styles.buyButton}>
          Добавить в корзину
          {addedToCart && (
            <p className={styles.addedToCartMsg}>Добавлено в корзину</p>
          )}
        </button>
        {inputMessage && (
          <div className={styles.inputMessage}>{inputMessage}</div>
        )}
      </form>
    </div>
  );
}
