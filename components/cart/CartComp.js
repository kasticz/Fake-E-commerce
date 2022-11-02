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
  const cartLength = useSelector((state) => (cart ? cart.length : 0));
  const modalStatus = useSelector((state) => state.UI.modalActive);
  const [suggestedItem, setSuggestedItem] = useState(false);
  const login = useSelector((state) => state.UI.login);

  useEffect(() => {
    async function getRandomItem() {
      const response = await fetch("./api/getRandomItem");
      const item = await response.json();
      setSuggestedItem(item);
    }
    if (cartLength === 0) {
      getRandomItem();
    } else {
      setSuggestedItem(false);
    }
  }, [cartLength]);

  const cartItemsList = useMemo(() => {
    if (cart) {
      return cart.map((item) => {
        return <CartItem key={Math.random()} id={item.id} />;
      });
    }
  }, [cartLength]);
  const totalAmount = cart
    ? cart.reduce((acc, item) => {
        acc += item.amount;
        return acc;
      }, 0)
    : 0;
  const totalPrice = cart
    ? String(
        cart.reduce((acc, item) => {
          acc +=
            item.amount *
            (item.warrantryStatus
              ? Math.round(item.price * 1.15)
              : item.price);
          return acc;
        }, 0)
      )
    : 0;
  const totalPriceWord = cartTotalAmountWord(totalAmount);

  function checkRegistry() {
    if (login) {
      dispatch(UIActions.toggleModal("checkout"));
    } else {
      dispatch(UIActions.toggleModal("chooseLogin"));
    }
  }

  return (
    <main className={styles.cart}>
      <section className={styles.products}>
        {cart && cart.length > 0 ? (
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
                    : totalPrice}
                  ₽
                </span>
              </div>
              <button onClick={checkRegistry} className={styles.checkout}>
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
        {!suggestedItem && (!cart || cartLength === 0) && (
          <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </section>
      {modalStatus === "checkout" && (
        <Modal title={"Оформление"}>
          <CheckoutForm />
        </Modal>
      )}
      {modalStatus === "chooseLogin" && (
        <Modal title="Для оформления покупки ввойдите в аккаунт">
          <div className={styles.buttonsWrapper}>
            <button
              onClick={() => {
                dispatch(UIActions.toggleModal("login"));
              }}
              className={styles.toLogin}
            >
              У меня уже есть аккаунт
            </button>
            <button
              onClick={() => {
                dispatch(UIActions.toggleModal("register"));
              }}
              className={styles.toRegister}
            >
              У меня нет аккаунта
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}
