import img from "../assets/images/UI/errorPage.svg";
import Link from "next/link";
import styles from "./ErrorPage.module.sass";

export default function ErrorPage(props) {
  return (
    <main>
      <div className={styles.errorWrapper}>
        <img src={img.src} alt="" />
        <p>
          Страница не найдена.{" "}
          <Link href={'/'}>
            <a>Перейти на главную страницу</a>
          </Link>
        </p>
      </div>
    </main>
  );
}
