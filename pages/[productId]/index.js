import styles from "./index.module.sass";
import ProductMain from "../../components/categories/productPage/productMain/ProductMain";
import ProductSub from "../../components/categories/productPage/productSub/ProductSub";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { pass } from "../api/hello";
import { MongoClient } from "mongodb";
export default function ProductIds(props) {

  return (
    <div className={styles.productContainer}>
      <main>
        <ProductMain analogs={props.analogs} product={props.product} />
        <ProductSub product={props.product} />
      </main>
    </div>
  );
}

export async function getStaticPaths(context) {
  const client = await MongoClient.connect(
    `mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const products = await db
    .collection("mouses")
    .find({ id: { $lt: 6 } }, { projection: { _id: 0 } })
    .toArray();

  client.close();

  return {
    paths: products.map((item) => {
      return { params: { productId: `${item.id}` } };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    `mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const product = await db
    .collection("mouses")
    .findOne({ id: +context.params.productId }, { projection: { _id: 0 } });

  const allProducts = await db
    .collection("mouses")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  client.close();

  const analogs = [];
  const analogMaxPrice =
    Math.round(product.price * ((100 - product.discount) / 100) * 1.25) + 1000;
  const analogMinDpi = product.dpi * 0.7;

  allProducts.forEach((item) => {
    const itemPrice = item.price * ((100 - item.discount) / 100);
    const itemDpi = item.dpi;
    const itemWireless = item.wireless;
    if (
      itemPrice < analogMaxPrice &&
      itemDpi > analogMinDpi &&
      itemWireless === product.wireless &&
      item.id !== product.id
    ) {
      analogs.push(item);
    }
  });
  return {
    props: {
      product,
      analogs,
    },
  };
}
