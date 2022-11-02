import {
  matsActions,
  filterMats,
  matsInputsActions,
} from "../../../store/matsSlice";
import { useSelector, useDispatch } from "react-redux";
import CheckBoxInput from "../../UI/CheckBoxInput";
import ExpandableFilter from "../../UI/ExpandableFilter";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../Mouses/MousesFilter.module.sass";

export default function MatsFilter(props) {
  const productType = "mats";
  const router = useRouter();
  const inputs = useSelector((state) => state.matsInputs);
  const dispatch = useDispatch();
  function dropFilter() {
    router.replace({
      pathname: router.pathname,
      query: { pageNumber: 1 },
    });
    dispatch(matsActions.reset());
    dispatch(matsInputsActions.resetInputs());
  }
  function changeProducts(e) {
    e.preventDefault();
    router.replace({
      pathname: router.pathname,
      query: {
        pageNumber: 1,
      },
    });
    dispatch(filterMats({ inputs }));
    if(props.closeMobileFilter) props.closeMobileFilter()
  }
  useEffect(()=>{
    return ()=>{
      dispatch(matsActions.reset());
      dispatch(matsInputsActions.resetInputs());
    }
  },[])

  return (
    <div className={styles.filterPanel}>
      <form onSubmit={changeProducts} className={styles.filterForm}>
        <CheckBoxInput
          sortType="rating"
          label="Рейтинг 4 и выше"
          productType={productType}
          input={{ id: ">4rating" }}
        />
        <ExpandableFilter inputs={4} filter="Цена">
          <CheckBoxInput
            label="Менее 300"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "<300price" }}
          />
          <CheckBoxInput
            label="300-900"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "300-900price" }}
          />
          <CheckBoxInput
            label="901-1 500"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "901-1500price" }}
          />
          <CheckBoxInput
            label="Более 1 500"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: ">1500price" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={5} filter="Производитель">
          <CheckBoxInput
            label="A4Tech"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "A4TechMats" }}
          />
          <CheckBoxInput
            label="DEXP"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "DexpMats" }}
          />
          <CheckBoxInput
            label="Jet.A"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "Jet.AMats" }}
          />
          <CheckBoxInput
            label="Razer"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "RazerMats" }}
          />
                    <CheckBoxInput
            label="HyperX"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "HyperXMats" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={4} filter="Длина (мм)">
          <CheckBoxInput
            label="Менее 300"
            sortType="length"
            productType={productType}
            input={{ id: "<300length" }}
          />
          <CheckBoxInput
            label="300 - 400"
            sortType="length"
            productType={productType}
            input={{ id: "300-400length" }}
          />
          <CheckBoxInput
            label="401 - 900"
            sortType="length"
            productType={productType}
            input={{ id: "401-900length" }}
          />
          <CheckBoxInput
            label="Более 900"
            sortType="length"
            productType={productType}
            input={{ id: ">900length" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Ширина (мм)">
          <CheckBoxInput
            label="Менее 300"
            sortType="width"
            productType={productType}
            input={{ id: "<300width" }}
          />
          <CheckBoxInput
            label="300 - 400"
            sortType="width"
            productType={productType}
            input={{ id: "300-400width" }}
          />
          <CheckBoxInput
            label="Более 400"
            sortType="width"
            productType={productType}
            input={{ id: ">400width" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Тип покрытия">
          <CheckBoxInput
            label="control"
            sortType="covering"
            productType={productType}
            input={{ id: "control" }}
          />
          <CheckBoxInput
            label="speed"
         sortType="covering"
            productType={productType}
            input={{ id: "speed" }}
          />
          <CheckBoxInput
            label="speed + control"
          sortType="covering"
            productType={productType}
            input={{ id: "speed+control" }}
          />
        </ExpandableFilter>
        <button className={styles.applyFilter}>Применить фильтр</button>
        <button
          onClick={dropFilter}
          type="button"
          className={styles.dropFilter}
        >
          Сбросить фильтр
        </button>
      </form>
      <button onClick={props.closeMobileFilter} className={styles.mobileClose}>X</button>
    </div>
  );
}
