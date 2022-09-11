import Link from "next/link";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { UIActions } from "../../../store/UISlice";
import { useCookies } from "react-cookie";
import styles from "./Burger.module.sass";

export default function Burger(props) {
  const clientWidth = useSelector((state) => state.UI.dimensions.clientWidth);
  const login = useSelector((state) => state.UI.login);
  const mobileNavActive = useSelector((state) => state.UI.mobileNavActive);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const [cookies] = useCookies()
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();

  function removeCookies() {
    removeCookie("refreshToken", { path: "/" });
    removeCookie("accessToken", { path: "/" });
    removeCookie("userID", { path: "/" });
  }
  useEffect(() => {
    setIsLogged(!!cookies.accessToken);
  },[cookies]);

  return (
    <Fragment>
      <button
        onClick={() => {
          dispatch(UIActions.toggleMobileNav());
        }}
        className={
          mobileNavActive
            ? `${styles.burgerActive} ${styles.burger}`
            : styles.burger
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {mobileNavActive && (
        <div className={styles.linksWrapper}>
          {clientWidth < 701 && isLogged && (
            <div className={styles.greetings}>
              Здравствуйте, <span>{login}</span>
            </div>
          )}
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
            {!isLogged && (
              <Fragment>
                <button
                  onClick={() => {
                    dispatch(UIActions.toggleModal("login"));
                  }}
                >
                  Войти в аккаунт
                </button>
                <button
                  onClick={() => {
                    dispatch(UIActions.toggleModal("register"));
                  }}
                >
                  Зарегистрироваться
                </button>
              </Fragment>
            )}

            {clientWidth < 771 && isLogged && (
              <button className={styles.logout} onClick={removeCookies}>Выйти из аккаунта</button>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
