import MatsPage from "../../../components/categories/Mats/MatsPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { pass } from "../../api/hello";
import { MongoClient } from "mongodb";
import { useEffect } from "react";

import { matsActions } from "../../../store/matsSlice";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mats = useSelector((state) => state.mats);
 
  useEffect(() => {
    if (!mats) {
      dispatch(matsActions.setUpState(props.mats));
    }
    dispatch(matsActions.applyDiscounts())
  }, []);


  return (
    <div className="container">
      <MatsPage
        items={mats || props.mats}
      />
    </div>
  );
}

export function getStaticPaths(context) {
  return {
    paths: [
      {
        params: { pageNumber: "1" },
      },
      {
        params: { pageNumber: "2" },
      },
      {
        params: { pageNumber: "3" },
      },
      {
        params: { pageNumber: "4" },
      },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    `mongodb+srv://kastic:${pass}@cluster0.wtiqv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const currentProducts = await db
    .collection("mats")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  client.close();
  return {
    props: {
      mats: currentProducts,
    },
  };
}
