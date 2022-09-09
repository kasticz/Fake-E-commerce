import Link from "next/link";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../store/UISlice";
import styles from "./Burger.module.sass";

export default function Burger(props) {
  const mobileNavActive = useSelector((state) => state.UI.mobileNavActive);
  const dispatch = useDispatch()

  
  return (
    <Fragment>
      <button
        onClick={() => {
          dispatch(UIActions.toggleMobileNav());
        }}
        className={ mobileNavActive ? `${styles.burgerActive} ${styles.burger}` : styles.burger    }
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {mobileNavActive && (
        <div className={styles.linksWrapper}>
          <ul className={styles.categories}>
            <li>
              <Link href={"/mouses/1"}>
                <a>Мыши</a>
              </Link>
            </li>
            <li>
              <Link href={"/keyboards/1"}>
                <a>Клавиатуры</a>
              </Link>
            </li>
            <li>
              <Link href={"/monitors/1"}>
                <a>Мониторы</a>
              </Link>
            </li>
            <li>
              <Link href={"/mats/1"}>
                <a>Коврики</a>
              </Link>
            </li>
          </ul>
          <div className={styles.buttonsWrapper}>
            <button onClick={()=>{dispatch(UIActions.toggleModal('login'))}}>Войти в аккаунт</button>
            <button onClick={()=>{dispatch(UIActions.toggleModal('register'))}}>Зарегистрироваться</button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
