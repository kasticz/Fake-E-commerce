import Discounts from "../components/discounts/Discounts";
import { MongoClient } from "mongodb";
import Categories from "../components/categories/Categories";
import { pass } from "./api/hello";


export default function Home(props) {
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
  const allMouses = await db
    .collection("mouses")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  const allMats = await db
    .collection("mats")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  const allKbs = await db
    .collection("keyboards")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  const allMns = await db
    .collection("monitors")
    .find({}, { projection: { _id: 0 } })
    .toArray();
  client.close();

  const allProducts = [...allMouses, ...allKbs, ...allMns, ...allMats];
  const highestDiscountsWithBigRating = allProducts
    .filter((item) => item.rating > 4.5 && item.discount > 20)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 5);

  return {
    props: {
      products: highestDiscountsWithBigRating,
    },
  };
}
