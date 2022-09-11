export function cartTotalAmountWord(totalAmount) {
  const strAmount = String(totalAmount);
  const totalPriceWord =
    totalAmount == 1
      ? "товар"
      : totalAmount < 5 && totalAmount > 1
      ? "товара"
      : totalAmount > 20 && !(strAmount[strAmount.length - 1] == 0)
      ? strAmount[strAmount.length - 1] == 1
        ? "товар"
        : strAmount[strAmount.length - 1] < 5
        ? "товара"
        : "товаров"
      : "товаров";
  return totalPriceWord;
}

export async function retrieveRefreshData(refreshToken) {
  const response = await fetch("../api/refreshTokens", {
    method: "POST",
    body: JSON.stringify({ token: refreshToken }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const retrievedData = await response.json();

  const retrievedCart = retrievedData.resultUserData || [];
  const retrievedLogin = retrievedData.resultUserData.login;
  return {
    retrievedCart,
    retrievedLogin,
    accessToken: retrievedData.resultRefresh.id_token,
    userID: retrievedData.resultRefresh.user_id,
    expiration: retrievedData.resultRefresh.expires_in * 1000,
  };
}

export async function retrieveUserData(userID, accessToken) {
  const response = await fetch("../api/retrieveCart", {
    method: "POST",
    body: JSON.stringify({
      uid: userID,
      idToken: accessToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const retrievedData = await response.json();
  const retrievedCart = retrievedData || [];
  const retrievedLogin = retrievedData.login;
  return {
    retrievedCart,
    retrievedLogin,
  };
}

export async function findProducts(input) {
  const response = await fetch("../api/retrieveProducts", {
    method: "POST",
    body: JSON.stringify({
      input: input,
      idToken: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const retrievedProducts = await response.json();

  return retrievedProducts;
}

export function debounce(fn, ms) {
  let allowFuncion = true;
  return (params) => {
    if (!allowFuncion) {
      return;
    } else {
      allowFuncion = false;
      setTimeout(() => {
        allowFuncion = true;
      }, ms);
      return fn(params);
    }
  };
}
// export function mobileSlide(xCoord,yCoord,type){

// }
export function mobileSlideStart(xCoord,yCoord){
  console.log(xCoord,yCoord)
}
export function mobileSlide(xCoord,yCoord){
  console.log(xCoord,yCoord)
}
export function mobileSlideEnd(xCoord,yCoord){
  console.log(xCoord,yCoord)
}
