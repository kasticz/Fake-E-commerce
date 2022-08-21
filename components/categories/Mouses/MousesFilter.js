import {
  filter,
  mouseSortingActions,
  mouseInputsActions,
} from "../../../store/mousesSlice";
import { useSelector, useDispatch } from "react-redux";
import CheckBoxInput from "../../UI/CheckBoxInput";
import ExpandableFilter from "../../UI/ExpandableFilter";
import { useRouter } from "next/router";
import styles from "./MousesFilter.module.sass";

export default function FilterPanel(props) {
  const router = useRouter()
  const inputs = useSelector((state) => state.mousesInputs);
  const dispatch = useDispatch();
  function dropFilter() {
    router.replace({
      pathname: router.pathname,
      query:{pageNumber:1}
    })
    dispatch(mouseSortingActions.reset());
    dispatch(mouseInputsActions.resetInputs());
  }
  function changeProducts(e) {
    router.replace({
      pathname: router.pathname,
      query:{pageNumber:1, sortType: router.query.sortType || ``, sortOrder: router.query.sortOrder || ``}
    })
    e.preventDefault();
    dispatch(filter({ inputs }));
  }

  return (
    <div className={styles.filterPanel}>
      <form onSubmit={changeProducts} className={styles.filterForm}>
        <CheckBoxInput
          sortType="rating"
          label="Рейтинг 4 и выше"
          input={{ id: ">4rating" }}
        />
        <ExpandableFilter inputs={4} filter="Цена">
          <CheckBoxInput
            label="Менее 5 000"
            price={true}
            sortType="price"
            input={{ id: "<5000price" }}
          />
          <CheckBoxInput
            label="5 001-15 000"
            price={true}
            sortType="price"
            input={{ id: "5001-15000price" }}
          />
          <CheckBoxInput
            label="15 001 - 30 000"
            price={true}
            sortType="price"
            input={{ id: "15001-30000price" }}
          />
          <CheckBoxInput
            label="Более 30 000"
            price={true}
            sortType="price"
            input={{ id: ">30000price" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={5} filter="Производитель">
          <CheckBoxInput
            label="SteelSeries"
            sortType="manufacturer"
            input={{ id: "SteelSeriesMouses" }}
          />
          <CheckBoxInput
            label="Sven"
            sortType="manufacturer"
            input={{ id: "SvenMouses" }}
          />
          <CheckBoxInput
            label="Logitech"
            sortType="manufacturer"
            input={{ id: "LogitechMouses" }}
          />
          <CheckBoxInput
            label="Razer"
            sortType="manufacturer"
            input={{ id: "RazerMouses" }}
          />
          <CheckBoxInput
            label="OKlick"
            sortType="manufacturer"
            input={{ id: "OKlickMouses" }}
          />
        </ExpandableFilter>
        <ExpandableFilter
          inputs={5}
          filter="Максимальное разрешение датчика (dpi)"
        >
          <CheckBoxInput
            label="Менее 5 000"
            sortType="dpi"
            input={{ id: "<5000dpi" }}
          />
          <CheckBoxInput
            label="5 001-10 000"
            sortType="dpi"
            input={{ id: "5001-10000dpi" }}
          />
          <CheckBoxInput
            label="10 001 - 15 000"
            sortType="dpi"
            input={{ id: "10001-15000dpi" }}
          />
          <CheckBoxInput
            label="15 001 - 20 000"
            sortType="dpi"
            input={{ id: "15001-20000dpi" }}
          />
          <CheckBoxInput
            label="Более 20 000"
            sortType="dpi"
            input={{ id: ">20000dpi" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={2} filter="Тип Подключения">
          <CheckBoxInput
            label="Проводная"
            sortType="wireless"
            input={{ id: "wiredMouse" }}
          />
          <CheckBoxInput
            label="Беспроводная"
            sortType="wireless"
            input={{ id: "wirelessMouse" }}
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
    </div>
  );
}
