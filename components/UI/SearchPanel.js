import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import cartLogo from "../../assets/images/cartLogo.svg";
import Link from "next/link";
import styles from "./SearchPanel.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UIActions } from "../../store/UISlice";
import Modal from "./Modal.js";
import { Fragment } from "react";
import { useCookies } from "react-cookie";
import LoginForm from "./LoginForm";

export default function SearchPanel(props) {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.UI.modalActive);
  const [animation, setAnimation] = useState(true);
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const [allCookies] = useCookies();
  const [isLogged,setIsLogged] = useState(false)
  const login = useSelector(state=>state.UI.login)
  const totalAmount =
    cart && cart.length > 0
      ? cart.reduce((acc, item) => {
          acc += +item.amount;
          return acc;
        }, 0)
      : 0;
  useEffect(() => {
    if (router.pathname !== "/Cart") {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 400);
    }
  }, [cart]);
  useEffect(()=>{
    setIsLogged(!!allCookies.accessToken)
  })
  return (
    <Fragment>
      (
      <div className={styles.panelWrapper}>
        <Link href="/">
          <a className={styles.logoWrapper}>
            <img src={logo.src} alt="" className={styles.logo} />
          </a>
        </Link>
        <form className={styles.search}>
          <input type="text" />
          <button className={styles.searchButton}>
            Найти <img className={styles.searchIcon} src={search.src} alt="" />
          </button>
        </form>
        <div className={styles.loginWrapper}>
          {!isLogged ? (
            <Fragment>
              <button
                onClick={() => {
                  dispatch(UIActions.toggleModal("login"));
                }}
                className={styles.Login}
              >
                Войти в аккаунт
              </button>
              <button
                onClick={() => {
                  dispatch(UIActions.toggleModal("register"));
                }}
                className={styles.Register}
              >
                Зарегистрироваться
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <span className={styles.name}>Здравствуйте, <span>{login}</span></span>
            <button
              onClick={() => {
                removeCookie("accessToken", {path:'/'});
              }}
              className={styles.Register}
            >
              Выйти из аккаунта
            </button>
            </Fragment>
          )}
        </div>
        <Link href="/Cart">
          <a
            style={{
              animation: animation ? `${styles.bump} 0.4s ease-out` : "",
            }}
            className={styles.cart}
          >
            <img className={styles.cartLogo} src={cartLogo.src} alt="" />
            <span className={styles.CartLink}>Корзина</span>
            <span>({totalAmount})</span>
          </a>
        </Link>
      </div>
      )
      {modalStatus === "register" && (
        <Modal title={"Регистрация"}>
          <LoginForm type={"register"} />
        </Modal>
      )}
      {modalStatus === "login" && (
        <Modal title={"Вход в аккаунт"}>
          <LoginForm type={"login"} />
        </Modal>
      )}
    </Fragment>
  );
}
