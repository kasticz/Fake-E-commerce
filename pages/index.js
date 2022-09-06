import Discounts from "../components/discounts/Discounts";
import { MongoClient } from "mongodb";
import Categories from "../components/categories/Categories";
import { pass } from "./api/hello";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../store/UISlice";
import { cartActions } from "../store/cartSlice";

export default function Home(props) {
  const cart = useSelector((state) => state.cart);
  const [cookies] = useCookies();
  const [cookie, setCookie] = useCookies("[user]");
  const dispatch = useDispatch();


  useEffect(() => {
    async function retrieveUserDataAndRefresh() {
      const response = await fetch("./api/refreshTokens", {
        method: "POST",
        body: JSON.stringify({ token: cookies.refreshToken }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const retrievedData = await response.json();

      const retrievedCart =
        retrievedData.resultUserData || [];
      const retrievedLogin =
        retrievedData.resultUserData.login;

      dispatch(cartActions.setCart(retrievedCart));
      retrievedLogin ? dispatch(UIActions.setLogin(retrievedLogin)) : "";
      setCookie("accessToken", retrievedData.resultRefresh.access_token, {
        path: "/",
        expires: new Date(
          Date.now() + retrievedData.resultRefresh.expires_in * 1000
        ),
      });
    }
    async function retrieveUserData() {
      const response = await fetch("./api/retrieveCart", {
        method: "POST",
        body: JSON.stringify({
          uid: cookies.userID,
          idToken: cookies.accessToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const retrievedData = await response.json();
      const retrievedCart = retrievedData || [];
      const retrievedLogin = retrievedData.login;

      dispatch(cartActions.setCart(retrievedCart));
      retrievedLogin ? dispatch(UIActions.setLogin(retrievedLogin)) : "";
    }

    if (cookies.refreshToken && !cookies.accessToken) {
      retrieveUserDataAndRefresh();
    } else if (cookies.accessToken && cookies.userID) {
      retrieveUserData();
    }
  }, []);
  useEffect(() => {
    async function updateCart() {
      console.log(cart)
      const response = await fetch("./api/updateCart", {
        method: "POST",
        body: JSON.stringify({
          localId: cookies.userID,
          idToken: cookies.accessToken,
          cart: cart
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json()
    }
    if (cookies.accessToken && cookies.userID && cart) {
      updateCart();
    }
  }, [cart, cookies.accessToken, cookies.userID]);

  return (
    <main className="main">
      <div className="container">
        <Discounts products={props.products} />
        <Categories />
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    `mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const bestDiscounts = await db
    .collection("mouses")
    .find(
      { discount: { $gte: 15 } },
      {
        projection: {
          price: 1,
          discount: 1,
          images: 1,
          title: 1,
          _id: 0,
          id: 1,
        },
      }
    )
    .toArray();
  client.close();
  return {
    props: {
      products: bestDiscounts,
    },
  };
}
