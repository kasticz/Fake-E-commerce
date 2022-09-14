import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { cartActions } from "../../store/cartSlice";
import styles from "./ItemActions.module.sass";

export default function ItemActions(props) {
  const dispatch = useDispatch();
  const amountInput = useRef();

  const [inputMessage, setInputMessage] = useState();

  function minusItem() {
    if (inputMessage) setInputMessage(false);
    if (amountInput.current.value > 1) {
      amountInput.current.value--;
      dispatch(
        cartActions.setProductAmount({
          id: props.id,
          amount: +amountInput.current.value,
        })
      );
    } else {
      dispatch(
        cartActions.deleteFromCart(props.id)
      );
    }
  }
  function plusItem() {
    if (inputMessage) setInputMessage(false);
    if (amountInput.current.value >= 20) {
      setInputMessage("Количество товара не может превышать 20");
    } else {
      amountInput.current.value++;
      dispatch(
        cartActions.setProductAmount({
          id: props.id,
          amount: +amountInput.current.value,
        })
      );
    }
  }

  function onUiLoseFocus() {
    setInputMessage(false);
    if(+amountInput.current.value === 0){
      dispatch(
        cartActions.deleteFromCart(props.id)
      );
      return
    }
    dispatch(
      cartActions.setProductAmount({
        id: props.id,
        amount: +amountInput.current.value,
      })
    );
  }

  function checkAmount() {
    if (amountInput.current.value > 20) {
      setInputMessage("Количество товара не может превышать 20");
      amountInput.current.value = 20;
    }
    if (amountInput.current.value < 0) {
      setInputMessage("Количество товара не может быть отрицательным");
      amountInput.current.value = 1;
    }
  }

  return (
    <div className={styles.itemUI}>
      <div className={styles.count}>
        <button
          onBlur={onUiLoseFocus}
          onClick={minusItem}
          className={styles.minusButton}
        >
          -
        </button>
        <input
          defaultValue={props.amount < 21 ? props.amount : 20}
          onBlur={onUiLoseFocus}
          onChange={checkAmount}
          ref={amountInput}
          className={styles.itemAmount}
          type="number"
        />
        <button
          onBlur={onUiLoseFocus}
          onClick={plusItem}
          className={styles.plusButton}
        >
          +
        </button>
      </div>
      {inputMessage && (
        <div className={styles.inputMessage}>{inputMessage}</div>
      )}
    </div>
  );
}
