import styles from "./index.module.sass";
import ProductMain from "../../components/categories/productPage/productMain/ProductMain";
import ProductSub from "../../components/categories/productPage/productSub/ProductSub";
import { Fragment } from "react";
import { pass } from "../api/hello";
import { MongoClient } from "mongodb";
import findAnalogs from "../../store/findAnalogs";
import ErrorPage from '../../components/ErrorPage'
export default function ProductIds(props) {
  return (
    <Fragment>
      {props.product && (
        <div className={styles.productContainer}>
          <main>
            <ProductMain analogs={props.analogs} product={props.product} />
            <ProductSub product={props.product} />
          </main>
        </div>
      )}
      {!props.product && <ErrorPage/>}
    </Fragment>
  );
}

export async function getStaticPaths(context) {
  const ids = [1,2,3,4,5,21,22,23,24,25,41,42,43,44,45,61,62,63,64,65]
  // const client = await MongoClient.connect(
  //   `mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`
  // );
  // const db = client.db();

  // const products = await db
  //   .collection("mouses")
  //   .find({ id: { $lt: 6 } }, { projection: { _id: 0 } })
  //   .toArray();

  // client.close();

  return {
    paths: ids.map((item) => {
      return { params: { productId: String(item) } };
    }),
    fallback: "blocking",
  };
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

  const allProducts = [...allMouses, ...allMats, ...allKbs, ...allMns];

  const currProduct = allProducts.filter(
    (item) => item.id == context.params.productId
  )[0];
const analogs = [];
if(currProduct){
  const currProductType =
    currProduct.id > 60
      ? "Mats"
      : currProduct.id > 40 && currProduct.id < 61
      ? "Monitors"
      : currProduct.id > 20
      ? "Keyboards"
      : "Mouses";

  for (let product of allProducts) {
    const analogType =
      product.id > 60
        ? "Mats"
        : product.id > 40 && product.id < 61
        ? "Monitors"
        : product.id > 20
        ? "Keyboards"
        : "Mouses";
    if (
      analogType === currProductType &&
      findAnalogs[`find${currProductType}Analog`](currProduct, product)
    ) {
      analogs.push(product);
    }
  }
}

  return {
    props: {
      product: currProduct || null,
      analogs: currProduct ? analogs : null ,
    },
  };
}
