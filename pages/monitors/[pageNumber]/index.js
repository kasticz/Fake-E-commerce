import MonitorsPage from "../../../components/categories/Monitors/MonitorsPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { pass } from "../../api/hello";
import { MongoClient } from "mongodb";
import { useEffect } from "react";

import { monitorsActions } from "../../../store/monitorsSlice";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mns = useSelector((state) => state.monitors);
 
  useEffect(() => {
    if (!mns) {
      dispatch(monitorsActions.setUpState(props.monitors));
    }
    dispatch(monitorsActions.applyDiscounts())
  }, []);


  return (
    <div className="container">
      <MonitorsPage
        items={mns || props.monitors}
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
    .collection("monitors")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  client.close();
  return {
    props: {
      monitors: currentProducts,
    },
  };
}
