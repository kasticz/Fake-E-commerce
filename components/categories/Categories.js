import styles from "./Categories.module.sass";
import mouse from "../../assets/images/mouse.png";
import keyboard from "../../assets/images/keyboard.webp";
import monitor from "../../assets/images/monitor.png";
import mats from "../../assets/images/mats.png";
import {lazy, Suspense} from 'react'

export default function Categories(props) {


  return (
    <Suspense fallback={<div>1</div>}>
    <section className={styles.categoriesSeciton}>
      <h2 className={styles.title}>Категории товаров</h2>
      <ul className={styles.categories}>
        <li className={styles.category}>
          <img className={styles.categoryImg} src={mouse.src} alt="" />
          <h3>Мыши</h3>
        </li>
        <li className={styles.category}>
          <img className={styles.categoryImg} src={keyboard.src} alt="" />
          <h3>Клавиатуры</h3>
        </li>
        <li className={styles.category}>
          <img className={styles.categoryImg} src={monitor.src} alt="" />
          <h3>Мониторы</h3>
        </li>
        <li className={styles.category}>
          <img className={styles.categoryImg} src={mats.src} alt="" />
          <h3>Коврики</h3>
        </li>
      </ul>
      {/* <img src={mats.src} alt="" /> */}
      <div>{props.smth}</div>

    </section>
    </Suspense>
  );
}



export async function getStaticProps(){
  const x =   await import('../../assets/images/mats.png')
  const z = 1
  return{
    props:{
      smth: z
    }
  }
}
