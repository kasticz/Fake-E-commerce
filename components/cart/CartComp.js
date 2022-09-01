import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import styles from "./CartComp.module.sass";
import { cartTotalAmountWord } from "../../store/wideAppFunctions";
import { useMemo } from "react";

export default function CartComp(props) {
  const cart = useSelector((state) => state.cart);

  const cartItemsList = useMemo(()=>{
   return cart.map((item) => {
      return <CartItem key={Math.random()} id={item.id} />;
    });
  },[cart.length]) 
  const totalAmount = cart.reduce((acc, item) => {
    acc += item.amount;
    return acc;
  }, 0);
  const totalPrice = String(
    cart.reduce((acc, item) => {
      acc += item.amount * (item.warrantryStatus ? Math.round(item.price + (item.price * 0.15)) : item.price);
      return acc;
    }, 0)
  );
  const totalPriceWord = cartTotalAmountWord(totalAmount);

  return (
    <main className={styles.cart}>
      <section className={styles.products}>
        <div className={styles.itemsWrapper}>{cartItemsList}</div>
        <div className={styles.totalWrapper}>
          <span className={styles.totalWord}>Итого:</span>
          <div className={styles.total}>
            <span className={styles.totalProducts}>
              {totalAmount} {totalPriceWord}
            </span>
            <span className={styles.totalPrice}>
              {totalPrice.length > 3
                ? `${totalPrice.slice(0, -3)} ${totalPrice.slice(-3)}`
                : totalPrice}{" "}
              ₽
            </span>
          </div>
          <button className={styles.checkout}> Перейти к оформлению</button>
        </div>
      </section>
      <section></section>
    </main>
  );
}
