import { useState } from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../../store/UISlice";
import styles from "./Modal.module.sass";
export default function Modal(props) {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state=>state.UI.modalActive)
  function closeModal() {
    dispatch(UIActions.toggleModal())    
  }
  return (
    <Fragment>
      {modalStatus ? (
        <Fragment>
          <div onClick={closeModal} className={styles.overlay}></div>
          <div className={styles.modalContentWrapper}>
            {props.title && <div className={styles.title}>{props.title}</div>}
            {props.children}
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
}
