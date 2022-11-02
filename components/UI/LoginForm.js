import { useState } from "react";
import CheckoutInput from "./CheckoutInput";
import styles from "./LoginForm.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../store/UISlice";
import { useCookies } from "react-cookie";
import { cartActions } from "../../store/cartSlice";
export default function LoginForm(props) {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.UI.modalActive);
  const cart = useSelector((state) => state.cart);
  const [loginCorrect, setLoginCorrect] = useState(true);
  const [passwordCorrect, setPasswordCorrect] = useState(
    modalStatus === "login" ? true : false
  );
  const [loginInput, setLoginInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [cookies, setCookie] = useCookies(["user"]);
  const [loginError, setLoginError] = useState("");
  const formCorrect = passwordCorrect && loginCorrect

  function loginValidation(input) {
    return [
      input.length > 0,
      input.length > 0 ? null : "Логин не должен быть пустым",
    ];
  }
  function passwordValidation(input) {
    const numbers = "1234567890";
    const symbols = '!@#$%^&*()_+|"{}};>?<`~.,:[]=-/';
    const shouldBeSpecificLength = input.length > 6;
    let shouldContainSymbol = false;
    let shouldContainNumber = false;
    let shouldContainCapitalLetter = false;
    for (let i = 1; i < input.length; i++) {
      if (symbols.includes(input[i])) {
        shouldContainSymbol = true;
        break;
      }
    }
    for (let i = 1; i < input.length; i++) {
      if (numbers.includes(input[i])) {
        shouldContainNumber = true;
        break;
      }
    }
    for (let i = 1; i < input.length; i++) {
      if (input[i].toUpperCase() === input[i]) {
        shouldContainCapitalLetter = true;
        break;
      }
    }
    const result =
      shouldBeSpecificLength &&
      shouldContainSymbol &&
      shouldContainNumber &&
      shouldContainCapitalLetter;

    let errorMsg = null;

    if (!result) {
      setPasswordCorrect(false);
    } else {
      setPasswordCorrect(input);
    }
    if (!shouldBeSpecificLength) {
      errorMsg = "Пароль должен состоять как минимум из 7 символов";
    }
    if (
      !shouldContainCapitalLetter ||
      !shouldContainSymbol ||
      !shouldContainNumber
    ) {
      errorMsg =
        'Пароль должен иметь как минимум 1 заглавную букву, 1 цифру и 1 специальный символ("!","@","#" и т.д.)';
    }
    return [result, errorMsg];
  }

  async function submitForm(e) {
    e.preventDefault();
    setLoginError("")
    let retrievedData = false;
    let errorStatus = false;

    if (modalStatus === "register") {
      try {
        const req = await fetch(`./api/register`, {
          method: "POST",
          body: JSON.stringify({
            email: `${loginInput}@something.com`,
            password: passwordInput,
            cart: cart,
            login: loginInput,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await req.json();

        retrievedData = data.resultPostCart;
        if (data.resultRegister.error) {
          throw new Error(data.resultRegister.error.message);
        }
        setCookie("refreshToken", data.resultRegister.refreshToken, {
          path: "/",
          expires: new Date('December 17, 2030 03:24:00')
        });
        setCookie("accessToken", data.resultRegister.idToken, {
          path: "/",
          expires: new Date(Date.now() + data.resultRegister.expiresIn * 1000),
        });
        setCookie("userID", data.resultRegister.localId, {
          path: "/",
          expires: new Date('December 17, 2030 03:24:00')
        });
      } catch (err) {
        errorStatus = true;
        const error = err.message;
        if (error.includes("EMAIL_EXISTS")) {
          setLoginError("Такой логин уже существует");
        }
      }
    }
    if (modalStatus === "login") {     
      try {
        const req = await fetch(`./api/signIn`, {
          method: "POST",
          body: JSON.stringify({
            email: `${loginInput}@something.com`,
            password: passwordInput,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await req.json();

        if (data.resultRegister.error) {
          throw new Error(data.resultRegister.error.message);
        }
        retrievedData = data.resultPostCart;
        setCookie("refreshToken", data.resultRegister.refreshToken, {
          path: "/",
        });
        setCookie("accessToken", data.resultRegister.idToken, {
          path: "/",
          expires: new Date(Date.now() + data.resultRegister.expiresIn * 1000),
        });
        setCookie("userID", data.resultRegister.localId, {
          path: "/",
          expires: new Date('December 17, 2030 03:24:00')
        });
      } catch (err) {
        errorStatus = true;
        const error = err.message;
        if (error.includes("TOO_MANY_ATTEMPTS")) {
          setLoginError("Слишком много попыток входа. Повторите позже");
        }
        if (error.includes("INVALID_PASSWORD")) {
          setLoginError("Неверный пароль");
        }
        if (error.includes("EMAIL_NOT_FOUND")) {
          setLoginError("Логин не найден");
        }
      }
    }
    errorStatus ? "" : dispatch(UIActions.toggleModal(""));
    const retrievedCart = retrievedData || [];
    const retrievedLogin = retrievedData.login;
    retrievedCart ? dispatch(cartActions.setCart(retrievedCart)) : "";
    retrievedLogin ? dispatch(UIActions.setLogin(retrievedLogin)) : "";
  }
  function getLogin(input) {
    setLoginInput(input);
  }
  function getPassword(input) {
    setPasswordInput(input);
  }



  return (
    <form onSubmit={submitForm} className={styles.loginForm}>
      {modalStatus === 'register' && <p className={styles.warning}>Не вводите свои реальные данные!</p>}
      <CheckoutInput
        getValue={getLogin}
        validation={loginValidation}
        input={{ id: "login", type: "text" }}
        label={"Логин"}
      />
      <CheckoutInput
        getValue={getPassword}
        validation={passwordValidation}
        input={{ id: "password", type: "password" }}
        label={"Пароль"}
      />
      {loginError && <p className={styles.loginError}>{loginError}</p>}
      <div className={styles.buttonsWrapper}>
        <button
          onClick={() => {
            dispatch(UIActions.toggleModal(false));
          }}
          type="button"
          className={styles.backButton}
        >
          Назад
        </button>
        <button
          disabled={modalStatus === 'register' && !formCorrect ? true : false}
          className={
            modalStatus === 'login' || formCorrect
              ? styles.confirmButton
              : ` ${styles.confirmButton} ${styles.disabledButton}`
          }
        >
          {props.type === "register" ? "Зарегистрироваться" : "Войти"}
        </button>
      </div>
    </form>
  );
}
