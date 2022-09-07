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
import {
  retrieveRefreshData,
  retrieveUserData,
} from "../store/wideAppFunctions";

export default function Home(props) {
  const cart = useSelector((state) => state.cart);
  const [cookies] = useCookies();
  const [cookie, setCookie] = useCookies("[user]");
  const dispatch = useDispatch();




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
