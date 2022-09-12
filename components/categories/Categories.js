import styles from "./Categories.module.sass";
import mouse from "../../assets/images/mouse.png";
import keyboard from "../../assets/images/keyboard.webp";
import monitor from "../../assets/images/monitor.png";
import mats from "../../assets/images/mats.png";
import Link from "next/link";

export default function Categories(props) {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.title}>Категории товаров</h2>
      <ul className={styles.categories}>
        <li className={styles.category}>
          <Link href="/mouses/1">
            <a>
              <img className={styles.categoryImg} src={mouse.src} alt="" />
            </a>
          </Link>
          <span>Мыши</span>
        </li>
        <li className={styles.category}>
          <Link href="/keyboards/1">
            <a>
              <img className={styles.categoryImg} src={keyboard.src} alt="" />
            </a>
          </Link>
          <span>Клавиатуры</span>
        </li>
        <li className={styles.category}>
          <Link href="/monitors/1">
            <a>
              <img className={styles.categoryImg} src={monitor.src} alt="" />
            </a>
          </Link>
          <span>Мониторы</span>
        </li>
        <li className={styles.category}>
          <Link href="/mats/1">
            <a>
              <img className={styles.categoryImg} src={mats.src} alt="" />
            </a>
          </Link>
          <span>Коврики</span>
        </li>
      </ul>
      <div>{props.smth}</div>
    </section>
  );
}

export async function getStaticProps() {
  const x = await import("../../assets/images/mats.png");
  const z = 1;
  return {
    props: {
      smth: z,
    },
  };
}
