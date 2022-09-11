import CheckoutInput from './CheckoutInput'
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import thanksIcon from "../../assets/images/UI/thanksIcon.png";
import { UIActions } from "../../store/UISlice";
import styles from "./CheckoutForm.module.sass";
export default function CheckoutForm(props) {
  const [delivery, setDelivery] = useState("personal");
  const [payment, setPayment] = useState("receipt");
  const [telCorrect, setTelCorrect] = useState(false);
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [adressCorrect, setAdressCorrect] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formCorrect =
    telCorrect && emailCorrect && (adressCorrect || delivery === "personal");
    const dispatch = useDispatch()


  function TelValidation(input) {
    const numbers = '1234567890'
    const shouldBeSpecificLength = input.length === 12;
    const shouldStartWithPlusSeven = input.slice(0, 2).includes("+7");
    let shouldContainOnlyNumbers = true;
    for(let i = 1;i< input.length;i++){
      if(!numbers.includes(input[i])){
        shouldContainOnlyNumbers = false
      }
    }
    const result = shouldBeSpecificLength && shouldStartWithPlusSeven && shouldContainOnlyNumbers;

    let errorMsg = null;

    if (!result) {
      errorMsg = 'Номер должен состоять из 11 цифр и начинаться с "+7"';
      setTelCorrect(false);
    } else {
      setTelCorrect(input);
    }
    return [result, errorMsg];
  }

  function EmailValidation(input) {
    const alphabetAndSymbols =
      'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+|"{}};>?"\"<`~.,``:[]=-/1234567890';
    const symbols = '!@#$%^&*()_+|"{}};>?<`~.,"\"``:[]=-/';
    const dogIndex = input.indexOf("@");
    const shouldIncludeDog =
      input.includes("@") &&
      input[0] !== "@" &&
      dogIndex < input.lastIndexOf(".") &&
      dogIndex === input.lastIndexOf("@");
    const shouldIncludeDot =
      input.includes(".") && dogIndex + 1 !== input.lastIndexOf(".");
    const afterDog = input.slice(dogIndex + 1, input.lastIndexOf("."));

    let noSymbolsAfterDog = true;
    for (let i = 0; i < afterDog.length; i++) {
      if (symbols.includes(afterDog[i].toLowerCase())) {
        noSymbolsAfterDog = false;
        break;
      }
    }
    let shouldBeLatin = true;
    for (let i = 0; i < input.length; i++) {
      if (!alphabetAndSymbols.includes(input[i].toLowerCase())) {
        shouldBeLatin = false;
        break;
      }
    }
    const result =
      shouldIncludeDog &&
      shouldIncludeDot &&
      shouldBeLatin &&
      noSymbolsAfterDog;

    let errorMsg = null;
    if (!result) {
      setEmailCorrect(false);
    } else {
      setEmailCorrect(input);
    }

    if (!shouldIncludeDog || !shouldIncludeDot) {
      errorMsg = "Пожалуйста, введите корректный почтовый адрес";
    }
    if (!noSymbolsAfterDog) {
      errorMsg = 'Не допускаются специальные символы после "@"';
    }
    if (!shouldBeLatin) {
      errorMsg =
        "Допускаются только буквы латинского алфавита, цифры и специальные символы";
    }
    return [result, errorMsg];
  }
  function AddressValidation(input) {
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя.,1234567890 ";
    let sectioned = input.split(`,`).map((item) => item.trim());
    sectioned = sectioned.length === 3 ? sectioned : ["1", "2", "3"];
    const shouldIncludeThreeSections = sectioned.length === 3;
    const shouldIncludeCity = sectioned[0].slice(0, 2).includes("г.");
    const shouldIncludeStreet = sectioned[1].slice(0, 3).includes("ул.");
    const shouldIncludeHouse = sectioned[2].slice(0, 2).includes("д.");
    let shouldBeCyrillic = true;

    for (let i = 0; i < input.length; i++) {
      for (let i = 0; i < input.length; i++) {
        if (!alphabet.includes(input[i].toLowerCase())) {
          shouldBeCyrillic = false;
          break;
        }
      }
    }
    const result =
      shouldIncludeThreeSections &&
      shouldIncludeCity &&
      shouldIncludeStreet &&
      shouldIncludeHouse &&
      shouldBeCyrillic;
    let errorMsg = null;

    if (!result) {
      setAdressCorrect(false);
    } else {
      setAdressCorrect(input);
    }

    if (
      !shouldIncludeThreeSections ||
      !shouldIncludeCity ||
      !shouldIncludeStreet ||
      !shouldIncludeHouse
    ) {
      errorMsg = 'Пожалуйста, введите адрес в формате "г. Х, ул. Х, д. Х"';
    }
    if (sectioned[2].includes)
      if (!shouldBeCyrillic) {
        errorMsg = "Допускаются только буквы кириллического алфавита и цифры";
      }
    return [result, errorMsg];
  }

  function onSubmit(e) {
    e.preventDefault()
    setFormSubmitted(true);
  }

  return (
    <Fragment>
      {!formSubmitted ? (
        <form className={styles.checkoutForm} onSubmit={onSubmit}>
          <CheckoutInput
            validation={TelValidation}
            input={{ id: "phone", type: "tel" }}
            label={"Телефон"}
          />
          <CheckoutInput
            validation={EmailValidation}
            input={{ id: "email", type: "email" }}
            label={"E-mail"}
          />
          <div className={styles.pickBlock}>
            <p className={styles.pickTitle}>Выберите способ получения</p>
            <div className={styles.pickOptions}>
              <div
                onClick={() => {
                  setDelivery("personal");
                }}
                className={
                  delivery === "personal"
                    ? `${styles.pickOption} ${styles.activeOption}`
                    : styles.pickOption
                }
              >
                Самовывоз
              </div>
              <div
                onClick={() => {
                  setDelivery("delivery");
                }}
                className={
                  delivery === "delivery"
                    ? `${styles.pickOption} ${styles.activeOption}`
                    : styles.pickOption
                }
              >
                Доставка
              </div>
            </div>
          </div>
          {delivery === "delivery" ? (
            <CheckoutInput
              validation={AddressValidation}
              input={{ id: "address", type: "text" }}
              label={"Адрес"}
            />
          ) : (
            ``
          )}

          <div className={styles.pickBlock}>
            <p className={styles.pickTitle}>Выберите способ оплаты</p>
            <div className={styles.pickOptions}>
              <div
                onClick={() => {
                  setPayment("receipt");
                }}
                className={
                  payment === "receipt"
                    ? `${styles.pickOption} ${styles.activeOption}`
                    : styles.pickOption
                }
              >
                При получении
              </div>
              <div
                onClick={() => {
                  setPayment("online");
                }}
                className={
                  payment === "online"
                    ? `${styles.pickOption} ${styles.activeOption}`
                    : styles.pickOption
                }
              >
                Онлайн
              </div>
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <button onClick={()=>{dispatch(UIActions.toggleModal()) }} type="button" className={styles.backButton}>
              Назад
            </button>
            <button
              disabled={!formCorrect}
              className={
                formCorrect
                  ? styles.confirmButton
                  : ` ${styles.confirmButton} ${styles.disabledButton}`
              }
            >
              Подтвердить заказ
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.thanksWrapper}>
          <img className={styles.thanksImg} src={thanksIcon.src} />
          <p className={styles.thanksMsg}>Спасибо за заказ! Мы скоро свяжемся с Вами.</p>
        </div>
      )}
    </Fragment>
  );
}
