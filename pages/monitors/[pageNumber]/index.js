import MonitorsPage from "../../../components/categories/Monitors/MonitorsPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { pass } from "../../api/hello";
// import { MongoClient } from "mongodb";
import { useEffect } from "react";

import { monitorsActions } from "../../../store/monitorsSlice";

export default function Mouses(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mns = useSelector((state) => state.monitors);
 
  useEffect(() => {
    // if (!kbs) {
    //   dispatch(kbsActions.setUpState(kbs));
    // }
    dispatch(monitorsActions.applyDiscounts())
  }, []);


  return (
    <div className="container">
      <MonitorsPage
        items={mns || props.mouses}
      />
    </div>
  );
}