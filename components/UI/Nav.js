import Link from "next/link";
import styles from "./Nav.module.sass";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.navTitle}>Лучшие игровые девайсы</h1>
      <ul className={styles.navCategories}>
        <li>
          <Link href="/">
            <a className={styles.navCategory}>Мыши</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.navCategory}>Клавиатуры</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.navCategory}>Мониторы</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.navCategory}>Коврики</a>
          </Link>
        </li>
      </ul>
      <div className={styles.support}>
        <span>Служба поддержки:</span>
        <a className={styles.telephone} href="tel:79000000000">
          +7 900-000-00-00 (Круглосуточно)
        </a>
        <span>или</span>
        <a className={styles.email} href="mailto:something@example.com">
          something@example.com
        </a>
      </div>
    </nav>
  );
}
