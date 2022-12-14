import getImages from "../../store/getImages";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./CartItem.module.sass";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemActions from "./ItemActions";

function CartItem(props) {
  const dispatch = useDispatch();
  const noWarrantryRef = useRef();
  const twelveWarrantryRef = useRef();

  const item = useSelector((state) =>
    state.cart.find((item) => item.id === props.id)
  );

  const [warrantryActive, setWarrantryActive] = useState(item.warrantryStatus);

  const prc = String(
    warrantryActive || item.warrantryStatus
      ? Math.round(item.price * 1.15) * item.amount
      : item.price * item.amount
  );
  const warrantry = String(Math.round(item.price * 0.15));

  const price = prc.length > 3 ? `${prc.slice(0, -3)} ${prc.slice(-3)}` : prc;

  const [image, setImage] = useState();
  useEffect(() => {
    async function getImg() {
      const img = await getImages([item.image]);
      setImage(img);
    }
    getImg();
  }, [item]);

  function checkNoWr(e) {
    e.preventDefault();
    noWarrantryRef.current.checked = !noWarrantryRef.current.checked;
    setWarrantryActive(!noWarrantryRef.current.checked);
    dispatch(
      cartActions.setWarrantry({ id: item.id, status: !warrantryActive })
    );
  }

  function checkTwelveWr(e) {
    e.preventDefault();
    twelveWarrantryRef.current.checked = !twelveWarrantryRef.current.checked;
    setWarrantryActive(twelveWarrantryRef.current.checked);
    dispatch(
      cartActions.setWarrantry({ id: item.id, status: !warrantryActive })
    );
  }

  function deleteFromCart() {
    dispatch(cartActions.deleteFromCart(item.id));
  }

  return (
    <div className={styles.item}>
      <div className={styles.main}>
        <div className={styles.smallMobileWrapper}>
          <Link href={{ pathname: `/${item.id}` }}>
            <a>
              <img className={styles.itemImage} src={image} alt="" />
            </a>
          </Link>

          <div className={styles.itemCaption}>
            <Link href={{ pathname: `/${item.id}` }}>
              <a>
                <p className={styles.itemTitle}>{item.title}</p>
              </a>
            </Link>

            <button onClick={deleteFromCart} className={styles.delete}>
              ?????????????? ???? ??????????????
            </button>
          </div>
        </div>
        <ItemActions id={item.id} amount={item.amount} />
        <div className={styles.price}>{price} ???</div>
      </div>
      <form className={styles.extraWarrantry}>
        <span className={styles.warrantryTitle}>???????????????????????????? ????????????????:</span>
        <div className={styles.mobileWrapper}>
          <div className={styles.warrantryOption}>
            <input
              defaultChecked={!item.warrantryStatus}
              ref={noWarrantryRef}
              name="warrantry"
              type="radio"
            />
            <span onClick={checkNoWr} className={styles.outer}>
              <span className={styles.inner}></span>
            </span>
            <label>?????? ??????. ????????????????</label>
          </div>
          <div className={styles.warrantryOption}>
            <input
              defaultChecked={item.warrantryStatus}
              ref={twelveWarrantryRef}
              name="warrantry"
              type="radio"
            />
            <span onClick={checkTwelveWr} className={styles.outer}>
              <span className={styles.inner}></span>
            </span>
            <label>+12 ??????.</label>
            <span className={styles.warrantryPrice}>
              (
              {warrantry.length > 3
                ? `${warrantry.slice(0, -3)} ${warrantry.slice(-3)}`
                : warrantry}
              ???)
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CartItem;
