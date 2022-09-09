import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./CheckoutInput.module.sass";

export default function CheckoutInput(props) {
  const currRef = useRef();
  const [inputStatus, setInputStatus] = useState("initial");
  const [errorMsg, setErrorMsg] = useState(false);
  const modalStatus = useSelector((state) => state.UI.modalActive);

  function Validate() {
    const result = props.validation(currRef.current.value.trim());
    setErrorMsg(result[1]);
    setInputStatus(result[0]);
  }
  function sendInput(){
    props.getValue ? props.getValue(currRef.current.value) : ''
  }
  return (
    <div className={styles.wrapper}>
      <label>{props.label}</label>
      <input
        className={
          inputStatus === "initial"
            ? styles.normal
            : inputStatus
            ? styles.correct
            : styles.incorrect
        }
        ref={currRef}
        onBlur={modalStatus === "login" ? () => {} : Validate}
        onChange={sendInput}
        {...props.input}
      />
      {errorMsg ? <div className={styles.error}>{errorMsg}</div> : ``}
    </div>
  );
}
