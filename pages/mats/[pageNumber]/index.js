import MatsPage from "../../../components/categories/Mats/MatsPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { pass } from "../../api/hello";
// import { MongoClient } from "mongodb";
import { useEffect } from "react";

import { matsActions } from "../../../store/matsSlice";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mats = useSelector((state) => state.mats);
 
  useEffect(() => {
    // if (!kbs) {
    //   dispatch(kbsActions.setUpState(kbs));
    // }
    dispatch(matsActions.applyDiscounts())
  }, []);


  return (
    <div className="container">
      <MatsPage
        items={mats || props.mouses}
      />
    </div>
  );
}