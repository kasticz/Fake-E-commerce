import styles from "./CheckBoxInput.module.sass";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mouseInputsActions } from "../../store/mousesSlice";
import kbsSlice from "../../store/keyboardsSlice";

import { useEffect } from "react";
export default function CheckBoxInput(props) {
  const [actions,setActions] = useState()
  const currRef = useRef();
  const inputStatus = useSelector(
    (state) => state[`${props.productType}Inputs`][props.sortType][props.input.id]
  );
  const dispatch = useDispatch();


  useEffect(()=>{
    async function getInputActions(){
       await import(`../../store/${props.productType}Slice`).then(data => setActions(data[`${props.productType}InputsSlice`]) )
    }
    getInputActions()
  },[])
  
  
  

  useEffect(() => {
    currRef.current.checked = inputStatus;
  }, [inputStatus]);
  

  function check(e) {
    e.preventDefault();
    dispatch(
      actions.actions.addInput({
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
