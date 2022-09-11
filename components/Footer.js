import Link from "next/link";
import vkLogo from '../assets/images/UI/vkLogo.svg'
import odnLogo from '../assets/images/UI/odnLogo.svg'
import ytLogo from '../assets/images/UI/ytLogo.svg'
import styles from "./Footer.module.sass";

export default function Footer(props) {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <div className={styles.mobileWrapper}>
        <Link href={"/"}>
          <a className={styles.siteTitle}> Fake E-commerce site, 2012-2022</a>
        </Link>
        <Link href={"/"}>
          <a className={styles.policyPrivacy}> Политика конфиденциальности</a>
        </Link>
        </div>
        <form className={styles.subscribe}>
          <div className={styles.notificationMsg}> Уведомления об акциях и новостях</div>
          <div className={styles.inputWrapper}>
            <input required type="email" />
            <button> Подписаться</button>
          </div>

          <div className={styles.checkboxWrapper}>
            <span></span>
            <input required id="privacy" type="checkbox" />
            <label htmlFor="privacy">
              Я согласен с
              <Link href={"/"}>
                <a className={styles.privacy}> политикой конфиденциальности</a>
              </Link>
            </label>
          </div>
        </form>
        <div className={styles.socials}>
          <p>Мы в соцесетях</p>
          <div className={styles.icons}>
          <Link href="https://vk.com">
            <a>
              <img src={vkLogo.src} alt="" />
            </a>
          </Link>
          <Link href="https://ok.ru">
            <a>
              <img src={odnLogo.src} alt="" />
            </a>
          </Link>
          <Link href="https://youtube.ru">
            <a>
              <img src={ytLogo.src} alt="" />
            </a>
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
