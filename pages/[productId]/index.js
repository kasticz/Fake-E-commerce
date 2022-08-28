import styles from "./index.module.sass";
import ProductMain from "../../components/categories/productPage/productMain/ProductMain";
import ProductSub from "../../components/categories/productPage/productSub/ProductSub";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { pass } from "../api/hello";
import { MongoClient } from "mongodb";
import findAnalogs from "../../store/findAnalogs";
export default function ProductIds(props) {

  return (
    <div className={styles.productContainer}>
      <main>
        <ProductMain analogs={props.analogs} product={props.product} />
        <ProductSub product={props.product  } />
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
  client.close();

  const allProducts = [...allMouses, ...allMats,...allKbs]

  const currProduct = allProducts.filter(item => item.id == context.params.productId)[0]
  const currProductType = currProduct.id > 60 ? 'Mats' : (currProduct.id > 39 && currProduct.id < 61) ? 'Monitors' : currProduct.id > 20 ? 'Keyboards' : 'Mouses'

  const analogs = []
  for(let product of allProducts){
    const analogType = product.id > 60 ? 'Mats' : (product.id > 40 && product.id < 61) ? 'Monitors' : product.id > 20 ? 'Keyboards' : 'Mouses'
    if(analogType === currProductType && findAnalogs[`find${currProductType}Analog`](currProduct,product) ) analogs.push(product)
  }




  return {
    props: {
      product: currProduct,
      analogs,
    },
  };
}
