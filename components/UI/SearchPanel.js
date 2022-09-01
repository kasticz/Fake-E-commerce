import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import cartLogo from "../../assets/images/cartLogo.svg";
import Link from "next/link";
import styles from "./SearchPanel.module.sass";

export default function SearchPanel(props) {
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
        <a className={styles.cart}>
          <img className={styles.cartLogo} src={cartLogo.src} alt="" />
          <span>{`{x1}`}</span>
          <span className={styles.CartLink}>Корзина</span>
        </a>
      </Link>
    </div>
  );
}
