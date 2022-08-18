import styles from "./CheckBoxInput.module.sass";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mouseInputsActions } from "../../store/mousesSlice";
import { useEffect } from "react";
export default function CheckBoxInput(props) {
  const currRef = useRef();
  const inputStatus = useSelector(
    (state) => state.mousesInputs[props.sortType][props.input.id]
  );

  const dispatch = useDispatch(mouseInputsActions.resetInputs());

  useEffect(() => {
    currRef.current.checked = inputStatus;
  }, [inputStatus]);

  function check(e) {
    e.preventDefault();
    dispatch(
      mouseInputsActions.addInput({
        value: props.input.id,
        sortType: props.sortType,
      })
    );
  }

  return (
    <div onClick={check} className={styles.input}>
      <input type="checkbox" ref={currRef} {...props.input} />
      <span />
      <label htmlFor={props.input.id}>
        {props.label} {props.price && `₽`}
      </label>
    </div>
  );
}
