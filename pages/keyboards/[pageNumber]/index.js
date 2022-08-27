import KeyboardsPage from "../../../components/categories/Keyboards/KeyboardsPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { pass } from "../../api/hello";
// import { MongoClient } from "mongodb";
import { useEffect } from "react";
import { kbsActions } from "../../../store/keyboardsSlice";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const kbs = useSelector((state) => state.keyboards);
 
  useEffect(() => {
    // if (!kbs) {
    //   dispatch(kbsActions.setUpState(kbs));
    // }
    dispatch(kbsActions.applyDiscounts())
  }, []);


  return (
    <div className="container">
      <KeyboardsPage
        items={kbs || props.mouses}
      />
    </div>
  );
}