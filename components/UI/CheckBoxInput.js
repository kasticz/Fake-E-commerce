import styles from "./CheckBoxInput.module.sass";
import { useRef } from "react";
export default function CheckBoxInput(props) {
  const currRef = useRef();
  function check(e) {
    e.preventDefault()
    currRef.current.checked = !currRef.current.checked;
  }
  return (
    <div onClick={check} className={styles.input}>
      <input type='checkbox' ref={currRef} {...props.input} />
      <span/>
      <label htmlFor={props.input.id}>{props.label} {props.price && `₽`}</label>
    </div>
  );
}
