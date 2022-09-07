import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import cartLogo from "../../assets/images/cartLogo.svg";
import Link from "next/link";
import styles from "./SearchPanel.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { UIActions } from "../../store/UISlice";
import Modal from "./Modal.js";
import { Fragment } from "react";
import { useCookies } from "react-cookie";
import LoginForm from "./LoginForm";
import {
  retrieveRefreshData,
  retrieveUserData,
} from "../../store/wideAppFunctions";
import { cartActions } from "../../store/cartSlice";
import { findProducts } from "../../store/wideAppFunctions";

export default function SearchPanel(props) {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.UI.modalActive);
  const [animation, setAnimation] = useState(true);
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const [cookies] = useCookies();
  const [isLogged, setIsLogged] = useState(false);
  const login = useSelector((state) => state.UI.login);
  const searchRef = useRef();
  const [searchInput, setSearchInput] = useState("");
  const [foundProducts, setFoundProducts] = useState(null);
  const [spinner, setSpinner] = useState(false);
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
  useEffect(() => {
    setIsLogged(!!cookies.accessToken);
  });

  useEffect(() => {
    async function refreshData() {
      const data = await retrieveRefreshData(cookies.refreshToken);
      dispatch(cartActions.setCart(data.retrievedCart));
      data.retrievedLogin
        ? dispatch(UIActions.setLogin(data.retrievedLogin))
        : "";
      setCookie("accessToken", data.accessToken, {
        path: "/",
        expires: new Date(Date.now() + data.expiration),
      });
      setCookie("userID", data.userID, {
        path: "/",
        expires: new Date("December 17, 2030 03:24:00"),
      });
    }
    async function updateData() {
      const data = await retrieveUserData(cookies.userID, cookies.accessToken);
      dispatch(cartActions.setCart(data.retrievedCart));
      data.retrievedLogin
        ? dispatch(UIActions.setLogin(data.retrievedLogin))
        : "";
    }

    if (cookies.refreshToken && !cookies.accessToken) {
      refreshData();
    } else if (cookies.accessToken && cookies.userID) {
      updateData();
    }
  }, []);

  useEffect(() => {
    async function updateCart() {
      const response = await fetch("../../api/updateCart", {
        method: "POST",
        body: JSON.stringify({
          localId: cookies.userID,
          idToken: cookies.accessToken,
          cart: cart,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (cookies.accessToken && cookies.userID && cart) {
      updateCart();
    }
  }, [cart, cookies.accessToken, cookies.userID]);

  function removeCookies() {
    removeCookie("refreshToken", { path: "/" });
    removeCookie("accessToken", { path: "/" });
    removeCookie("userID", { path: "/" });
  }

  useEffect(() => {
    let timer;
    let timerSpinner;

    async function getPrs() {
      const retrievedProducts = await findProducts(searchInput);
      setSpinner(false);
      setFoundProducts(retrievedProducts);
      return retrievedProducts;
    }
    if (searchInput) {
      timerSpinner = setTimeout(() => {
        setSpinner(true);
      }, 1000);

      timer = setTimeout(() => {
        getPrs();
      }, 1500);
    }

    return () => {
      setSpinner(false);
      clearTimeout(timer);
      clearTimeout(timerSpinner);
    };
  }, [searchInput]);

  const foundProductsComp = foundProducts
    ? foundProducts.map((item) => {
      const prc = item.price ? Math.round(item.price * ((100 - item.discount) / 100)) : null
      const price = prc ? String(prc).length > 3 ? `${String(prc).slice(0,-3)} ${String(prc).slice(-3)} ₽` : `${prc} ₽` : ''
        return item.id ? (
          <Link key={Math.random()} href={{ pathname: `/${item.id}` }}>
            <a className={styles.foundItem}>
              <div className={styles.foundTitle}>{item.title}</div>
              {price && <div className={styles.foundPrice}>{price}</div>}
              
            </a>
          </Link>
        ) : (
          <a className={styles.foundItem}>
            <div>{item.title}</div>            
          </a>
        );
      })
    : "";

  return (
    <Fragment>
      (
      <div className={styles.panelWrapper}>
        <Link href="/">
          <a className={styles.logoWrapper}>
            <img src={logo.src} alt="" className={styles.logo} />
          </a>
        </Link>
        <form
          onBlur={(e) => {
            e.preventDefault()
            setTimeout(() => {
              setFoundProducts(null);              
            }, 1000);
            
          }}
          className={styles.search}
        >
          {spinner && (
            <div className={styles.spinnerWrapper}>
              <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}

          <input
            onChange={() => {
              setSearchInput(searchRef.current.value);
            }}
            ref={searchRef}
            type="text"
          />
          <button className={styles.searchButton}>
            Найти <img className={styles.searchIcon} src={search.src} alt="" />
          </button>
          <div
            style={{
              bottom:
                foundProducts && foundProducts.length * 50 > 500
                  ? `-532px`
                  : foundProducts
                  ? `-${foundProducts.length * 50 + 32}px`
                  : 0,
              height:
                foundProducts && foundProducts.length * 50 > 500
                  ? `532px`
                  : foundProducts
                  ? `${foundProducts.length * 50 + 32}px`
                  : 0,
              display: foundProducts ? "flex" : "none",
              overflowY:
                foundProducts && foundProducts.length * 50 > 500
                  ? "scroll"
                  : "hidden",
            }}
            className={styles.foundProducts}
          >
            {foundProductsComp}
          </div>
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
              <span className={styles.name}>
                Здравствуйте, <span>{login}</span>
              </span>
              <button onClick={removeCookies} className={styles.Register}>
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
