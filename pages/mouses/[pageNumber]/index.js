import MousesPage from "../../../components/categories/Mouses/MousesPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { mouseSortingActions, filter } from "../../../store/mousesSlice";
import { pass } from "../../api/hello";
import { MongoClient } from "mongodb";
import { useEffect } from "react";
import ErrorPage from "../../../components/errorPage";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mouses = useSelector((state) => state.mouses);

  useEffect(() => {
    if (!mouses && props.mouses) {
      dispatch(mouseSortingActions.setUpState(props.mouses));
    }
    if (props.mouses) {
      dispatch(mouseSortingActions.applyDiscounts());
    }
  }, []);

  return (
    <div className="container">
      {props.mouses ? (
        <MousesPage mouses={mouses || props.mouses} />
      ) : (
        <ErrorPage />
      )}
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
    .collection("mouses")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  client.close();
  return {
    props: {
      mouses: context.params.pageNumber < 5 ? currentProducts : null,
    },
  };
}
