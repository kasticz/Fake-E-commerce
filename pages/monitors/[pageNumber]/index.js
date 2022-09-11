import MonitorsPage from "../../../components/categories/Monitors/MonitorsPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { pass } from "../../api/hello";
import { MongoClient } from "mongodb";
import { useEffect } from "react";

import { monitorsActions } from "../../../store/monitorsSlice";
import ErrorPage from '../../../components/ErrorPage'

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mns = useSelector((state) => state.monitors);
 
  useEffect(() => {
    if (!mns && props.monitors) {
      dispatch(monitorsActions.setUpState(props.monitors));
    }
    if(props.monitors){
      dispatch(monitorsActions.applyDiscounts())
    }

  }, []);
  


  return (
    <div className="container">
      {props.monitors ? <MonitorsPage items={mns || props.monitors}/> : <ErrorPage/>}

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
    fallback: true,
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
      monitors: context.params.pageNumber < 5 ? currentProducts : null,
    },
  };
}
