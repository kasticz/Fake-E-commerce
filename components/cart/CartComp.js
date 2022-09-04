import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CartComp.module.sass";
import { cartTotalAmountWord } from "../../store/wideAppFunctions";
import { Fragment, useEffect, useMemo } from "react";
import img from "../../assets/images/UI/productNotFound.png";
import Link from "next/link";
import CategoryItem from "../categories/CategoryItem";
import Modal from "../UI/Modal";
import { useState } from "react";
import { UIActions } from "../../store/UISlice";
import CheckoutForm from "../UI/CheckoutForm.js";

export default function CartComp(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const modalStatus = useSelector((state) => state.UI.modalActive);
  const [suggestedItem, setSuggestedItem] = useState(false);

  useEffect(() => {
    async function getRandomItem() {
      const response = await fetch("./api/getRandomItem");
      const item = await response.json();
      setSuggestedItem(item);
    }
    if (cart.length === 0) {
      getRandomItem();
    } else {
      setSuggestedItem(false);
    }
  }, [cart.length]);

  const cartItemsList = useMemo(() => {
    return cart.map((item) => {
      return <CartItem key={Math.random()} id={item.id} />;
    });
  }, [cart.length]);
  const totalAmount = cart.reduce((acc, item) => {
    acc += item.amount;
    return acc;
  }, 0);
  const totalPrice = String(
    cart.reduce((acc, item) => {
      acc +=
        item.amount *
        (item.warrantryStatus
          ? Math.round(item.price + item.price * 0.15)
          : item.price);
      return acc;
    }, 0)
  );
  const totalPriceWord = cartTotalAmountWord(totalAmount);

  return (
    <main className={styles.cart}>
      <section className={styles.products}>
        {cart.length > 0 ? (
          <Fragment>
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
              <button onClick={()=>{dispatch(UIActions.toggleModal())}} className={styles.checkout}>
                Перейти к оформлению
              </button>
            </div>
          </Fragment>
        ) : (
          suggestedItem && (
            <div className={styles.cartEmpty}>
              <img src={img.src} alt="" />
              <p className={styles.cartEmptyText}>
                Корзина пуста! Почему бы не купить
                <Link href={{ pathname: `/${suggestedItem.id}` }}>
                  <a className={styles.suggested}> {suggestedItem.title}</a>
                </Link>{" "}
                ?
              </p>
              <CategoryItem item={suggestedItem} />
            </div>
          )
        )}
      </section>
      {modalStatus ? (
        <Modal title={"Оформление"}>
          <CheckoutForm />
        </Modal>
      ) : (
        ""
      )}
    </main>
  );
}