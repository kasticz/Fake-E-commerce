import {
  monitorsActions,
  filterMns,
  monitorsInputsActions,
} from "../../../store/monitorsSlice";
import { useSelector, useDispatch } from "react-redux";
import CheckBoxInput from "../../UI/CheckBoxInput";
import ExpandableFilter from "../../UI/ExpandableFilter";
import { useRouter } from "next/router";
import styles from "../Mouses/MousesFilter.module.sass";
import { useEffect } from "react";

export default function KeyboardFilter(props) {
  const productType = "monitors";
  const router = useRouter();
  const inputs = useSelector((state) => state.monitorsInputs);
  const dispatch = useDispatch();
  function dropFilter() {
    router.replace({
      pathname: router.pathname,
      query: { pageNumber: 1 },
    });
    dispatch(monitorsActions.reset());
    dispatch(monitorsInputsActions.resetInputs());
  }
  function changeProducts(e) {
    e.preventDefault();
    router.replace({
      pathname: router.pathname,
      query: {
        pageNumber: 1,
      },
    });
    dispatch(filterMns({ inputs }));
    if(props.closeMobileFilter) props.closeMobileFilter()
  }
  useEffect(()=>{
    return ()=>{
      dispatch(monitorsActions.reset());
      dispatch(monitorsInputsActions.resetInputs());
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
            label="Менее 11 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "<11000price" }}
          />
          <CheckBoxInput
            label="11 000 - 15 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "11000-15000price" }}
          />
          <CheckBoxInput
            label="15 001 - 20 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "15001-20000price" }}
          />
          <CheckBoxInput
            label="Более 20 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: ">20000price" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={5} filter="Производитель">
          <CheckBoxInput
            label="Acer"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "AcerMns" }}
          />
          <CheckBoxInput
            label="AOC"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "AOCMns" }}
          />
          <CheckBoxInput
            label="Asus"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "AsusMns" }}
          />
          <CheckBoxInput
            label="LG"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "LGMns" }}
          />
          <CheckBoxInput
            label="Philips"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "PhilipsMns" }}
          />
        </ExpandableFilter>
        <ExpandableFilter
          inputs={5}
          filter="Частота при максимальном разрешении (Гц)"
        >
          <CheckBoxInput
            label="60 ГЦ"
            sortType="maxHz"
            productType={productType}
            input={{ id: "60hz" }}
          />
          <CheckBoxInput
            label="75 ГЦ"
            sortType="maxHz"
            productType={productType}
            input={{ id: "75hz" }}
          />
          <CheckBoxInput
            label="144 ГЦ"
            sortType="maxHz"
            productType={productType}
            input={{ id: "144hz" }}
          />
          <CheckBoxInput
            label="165 ГЦ"
            sortType="maxHz"
            productType={productType}
            input={{ id: "165hz" }}
          />
          <CheckBoxInput
            label="240 ГЦ"
            sortType="maxHz"
            productType={productType}
            input={{ id: "240hz" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Технология изготовления матрицы">
          <CheckBoxInput
            label="TN"
            sortType="matrix"
            productType={productType}
            input={{ id: "TNMns" }}
          />
          <CheckBoxInput
            label="IPS"
            sortType="matrix"
            productType={productType}
            input={{ id: "IPSMns" }}
          />
          <CheckBoxInput
            label="VA"
            sortType="matrix"
            productType={productType}
            input={{ id: "VAMns" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={4} filter="Диагональ экрана (дюйм)">
          <CheckBoxInput
            label="Менее 23"
            sortType="diagonal"
            productType={productType}
            input={{ id: "<23dia" }}
          />
          <CheckBoxInput
            label="23-26.99"
            sortType="diagonal"
            productType={productType}
            input={{ id: "23-26.99dia" }}
          />
          <CheckBoxInput
            label="27-30.99"
            sortType="diagonal"
            productType={productType}
            input={{ id: "27-30.99dia" }}
          />
          <CheckBoxInput
            label="31 и более"
            sortType="diagonal"
            productType={productType}
            input={{ id: ">31dia" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Разрешение экрана (пиксели)">
          <CheckBoxInput
            label="1920x1080"
            sortType="resolution"
            productType={productType}
            input={{ id: "1920x1080" }}
          />
          <CheckBoxInput
            label="2560x1440"
            sortType="resolution"
            productType={productType}
            input={{ id: "2560x1440" }}
          />
          <CheckBoxInput
            label="3840x2160"
            sortType="resolution"
            productType={productType}
            input={{ id: "3840x2160" }}
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
