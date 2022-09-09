import KeyboardsPage from "../../../components/categories/Keyboards/KeyboardsPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { pass } from "../../api/hello";
import { MongoClient } from "mongodb";
import { useEffect } from "react";
import { kbsActions } from "../../../store/keyboardsSlice";
import ErrorPage from "../../../components/errorPage";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const kbs = useSelector((state) => state.keyboards);

  useEffect(() => {
    if (!kbs && props.kbs) {
      dispatch(kbsActions.setUpState(props.kbs));
    }
    if(props.kbs){
      dispatch(kbsActions.applyDiscounts());
    }

  }, []);


  return (
    <div className="container">
      {props.kbs ? <KeyboardsPage items={kbs || props.kbs} /> : <ErrorPage />}
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
    .collection("keyboards")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  client.close();
  return {
    props: {
      kbs: context.params.pageNumber  < 5 ? currentProducts : null,
    },
  };
}
