

import MousesPage from "../../components/categories/Mouses/MousesPage";
import {useRouter} from 'next/router'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { mouseSortingActions } from "../../store/mousesSlice";

export default function Mouses(props) {
  const dispatch = useDispatch()
  const router = useRouter()
  const sortType = router.query.sortType || false
  const sortOrder = router.query.sortOrder || false
  return (
    <div className="container">
      <MousesPage sortData={{sortType,sortOrder}} />
    </div>
  );
}
