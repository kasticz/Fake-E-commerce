import styles from "./CheckBoxInput.module.sass";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { previewSortByInputs } from "../../store/mousesSlice";

import { useEffect } from "react";
export default function CheckBoxInput(props) {
  const [Inputactions, setInputActions] = useState();
  const [num,setNum] = useState()
  const currRef = useRef();
  const inputStatus = useSelector(
    (state) =>
      state[`${props.productType}Inputs`][props.sortType][props.input.id]
  );
  const allInputs = useSelector((state) => state[`${props.productType}Inputs`]);
  const allProducts = useSelector(state => state[`${props.productType}`])


  const dispatch = useDispatch();

  useEffect(() => {
    async function getInputActions() {
      await import(`../../store/${props.productType}Slice`).then((data) =>
        setInputActions(data[`${props.productType}InputsSlice`])
      );
    }
    getInputActions();
  }, []);

  useEffect(() => {
    currRef.current.checked = inputStatus;
  }, [inputStatus]);




  useEffect(()=>{
    const fakeInputs = JSON.parse(JSON.stringify(allInputs))
    if(allProducts && fakeInputs){      
      fakeInputs[props.sortType][props.input.id] = true;  
      const eligible = previewSortByInputs(allProducts,fakeInputs,props.input.id)
      setNum(eligible)
    }

  },[allProducts])


  function check(e) {
    e.preventDefault();
    dispatch(
      Inputactions.actions.addInput({
        value: props.input.id,
        sortType: props.sortType,
      })
    );
  }

  return (
    <div onClick={check} className={styles.input}>
      <input type="checkbox" ref={currRef} {...props.input} />
      <span />
      <label  htmlFor={props.input.id}>
        {props.label} {props.price && `₽`} <div className={styles.preview}>{`(${num})`}</div>
      </label>
    </div>
  );
}
