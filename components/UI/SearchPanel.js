import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import cartLogo from "../../assets/images/cartLogo.svg";
import Link from "next/link";
import styles from "./SearchPanel.module.sass";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {useRouter} from 'next/router'

export default function SearchPanel(props) {
  const [animation,setAnimation] = useState(true)
  const cart = useSelector(state=> state.cart)
  const router = useRouter()
  const totalAmount = cart.length > 0 ? cart.reduce((acc,item)=>{
    acc +=+item.amount
    return acc;
  },0) : 0
  useEffect(()=>{
    if(router.pathname !== '/Cart'){
      setAnimation(true)
      setTimeout(() => {
        setAnimation(false)
      }, 400);
    }

  },[cart])
  return (
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
      <button className={styles.Login}>Войти в аккаунт</button>
      <button className={styles.Register}>Зарегистрироваться</button>
      <Link href="/Cart">
        <a style={{animation: animation ? `${styles.bump} 0.4s ease-out` : ''}} className={styles.cart}>
          <img className={styles.cartLogo} src={cartLogo.src} alt="" />          
          <span className={styles.CartLink}>Корзина</span>
          <span>({totalAmount})</span>
        </a>
      </Link>
    </div>
  );
}
