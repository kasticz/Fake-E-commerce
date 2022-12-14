import {
  filterMouses,
  mouseSortingActions,
  mouseInputsActions,
} from "../../../store/mousesSlice";
import { useSelector, useDispatch } from "react-redux";
import CheckBoxInput from "../../UI/CheckBoxInput";
import ExpandableFilter from "../../UI/ExpandableFilter";
import { useRouter } from "next/router";
import styles from "./MousesFilter.module.sass";
import { useEffect } from "react";

export default function FilterPanel(props) {
  const clientWidth = useSelector(state=>state.UI.dimensions.clientWidth)

  
  const productType = 'mouses'
  const router = useRouter();
  const inputs = useSelector((state) => state.mousesInputs);
  const dispatch = useDispatch();
  function dropFilter() {
    router.replace({
      pathname: router.pathname,
      query: { pageNumber: 1 },
    });
    dispatch(mouseSortingActions.reset());
    dispatch(mouseInputsActions.resetInputs());
  }
  function changeProducts(e) {
    e.preventDefault();
    
    router.replace({
      pathname: router.pathname,
      query: {
        pageNumber: 1,
      },
    });   
    dispatch(filterMouses({ inputs }));
    if(props.closeMobileFilter) props.closeMobileFilter()
  }

  useEffect(()=>{
    return ()=>{
    dispatch(mouseSortingActions.reset());
    dispatch(mouseInputsActions.resetInputs());
    }
  },[])


  return (
    <div style={{display: props.mobileStatus || clientWidth > 770 ? 'flex' : 'none'}} className={styles.filterPanel}>
      <form onSubmit={changeProducts} className={styles.filterForm}>
        <CheckBoxInput
          sortType="rating"
          label="Рейтинг 4 и выше"
          productType = {productType}
          input={{ id: ">4rating" }}
        />
        <ExpandableFilter inputs={4} filter="Цена">
          <CheckBoxInput
            label="Менее 5 000"
            price={true}
            sortType="price"
            productType = {productType}
            input={{ id: "<5000price" }}
          />
          <CheckBoxInput
            label="5 001-10 000"
            price={true}
            sortType="price"
          productType = {productType}
            input={{ id: "5001-10000price" }}
          />
          <CheckBoxInput
            label="10 001 - 15 000"
            price={true}
            sortType="price"
           productType = {productType}
            input={{ id: "10001-15000price" }}
          />
          <CheckBoxInput
            label="Более 15 000"
            price={true}
            sortType="price"
            productType = {productType}
            input={{ id: ">15000price" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={6} filter="Производитель">
          <CheckBoxInput
            label="SteelSeries"
            sortType="manufacturer"
           productType = {productType}
            input={{ id: "SteelSeriesMouses" }}
          />
          <CheckBoxInput
            label="Sven"
            sortType="manufacturer"
            productType = {productType}
            input={{ id: "SvenMouses" }}
          />
          <CheckBoxInput
            label="Logitech"
            sortType="manufacturer"
            productType = {productType}
            input={{ id: "LogitechMouses" }}
          />
          <CheckBoxInput
            label="Razer"
            sortType="manufacturer"
            productType = {productType}
            input={{ id: "RazerMouses" }}
          />
          <CheckBoxInput
            label="ASUS"
            sortType="manufacturer"
            productType = {productType}
            input={{ id: "AsusMouses" }}
          />
          <CheckBoxInput
            label="A4Tech"
            sortType="manufacturer"
            productType = {productType}
            input={{ id: "A4TechMouses" }}
          />
        </ExpandableFilter>
        <ExpandableFilter
          inputs={5}
          filter="Максимальное разрешение датчика (dpi)"
        >
          <CheckBoxInput
            label="5000 и менее"
            sortType="dpi"
            productType = {productType}
            input={{ id: "<5000dpi" }}
          />
          <CheckBoxInput
            label="5 001-10 000"
            sortType="dpi"
            productType = {productType}
            input={{ id: "5001-10000dpi" }}
          />
          <CheckBoxInput
            label="10 001 - 15 000"
            sortType="dpi"
            productType = {productType}
            input={{ id: "10001-15000dpi" }}
          />
          <CheckBoxInput
            label="15 001 - 20 000"
            sortType="dpi"
            productType = {productType}
            input={{ id: "15001-20000dpi" }}
          />
          <CheckBoxInput
            label="Более 20 000"
            sortType="dpi"
           productType = {productType}
            input={{ id: ">20000dpi" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Тип Подключения">
          <CheckBoxInput
            label="Проводная"
            sortType="wireless"
            productType = {productType}
            input={{ id: "wiredMouse" }}
          />
          <CheckBoxInput
            label="Беспроводная"
            sortType="wireless"
            productType = {productType}
            input={{ id: "wirelessMouse" }}
          />
          <CheckBoxInput
            label="Беспроводная/проводная"
            sortType="wireless"
            productType = {productType}
            input={{ id: "wirelesswiredMouse" }}
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
