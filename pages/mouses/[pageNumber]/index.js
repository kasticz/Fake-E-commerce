import MousesPage from "../../../components/categories/Mouses/MousesPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { mouseSortingActions, filter } from "../../../store/mousesSlice";
import { pass } from "../../api/hello";
import { MongoClient } from "mongodb";
import { useEffect } from "react";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mouses = useSelector((state) => state.mousesSorting);
  console.log("rerendered", mouses);
  useEffect(() => {
    if (mouses === "initial") {
      dispatch(mouseSortingActions.setUpState(props.mouses));
    }
  }, [mouses]);

  const sortType = router.query.sortType || false;
  const sortOrder = router.query.sortOrder || false;
  return (
    <div className="container">
      <MousesPage
        itemsLength={props.itemsLength}
        mouses={props.mouses}
        // sortData={{ sortType, sortOrder }}
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
    .collection("mouses")
    .find({}, { projection: { _id: 0 } })
    .toArray();
  const allItems = await db
    .collection("mouses")
    .find({}, { projection: { _id: 0, id: 1 } })
    .toArray();
  client.close();
  return {
    props: {
      mouses: currentProducts,
      itemsLength: allItems.length,
    },
  };
}
