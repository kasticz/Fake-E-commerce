import { kbsActions, filterKbs, kbsInputsActions } from "../../../store/keyboardsSlice";
import { useSelector, useDispatch } from "react-redux";
import CheckBoxInput from "../../UI/CheckBoxInput";
import ExpandableFilter from "../../UI/ExpandableFilter";
import { useRouter } from "next/router";
import styles from "../Mouses/MousesFilter.module.sass";

export default function KeyboardFilter(props) {
  const productType = 'keyboards'
  const router = useRouter();
  const inputs = useSelector((state) => state.keyboardsInputs);
  const dispatch = useDispatch();
  function dropFilter() {
    router.replace({
      pathname: router.pathname,
      query: { pageNumber: 1 },
    });
    dispatch(kbsActions.reset());
    dispatch(kbsInputsActions.resetInputs());
  }
  function changeProducts(e) {
    e.preventDefault();
    router.replace({
      pathname: router.pathname,
      query: {
        pageNumber: 1,
      },
    });
    dispatch(filterKbs({ inputs }));
    if(props.closeMobileFilter) props.closeMobileFilter()
  }

  return (
    <div className={styles.filterPanel}>
      <form onSubmit={changeProducts} className={styles.filterForm}>
        <CheckBoxInput
          sortType="rating"
          label="Рейтинг 4 и выше"
          productType={productType}
          input={{ id: ">4rating" }}
        />
        <ExpandableFilter inputs={5} filter="Цена">
          <CheckBoxInput
            label="Менее 1 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "<1000price" }}
          />
          <CheckBoxInput
            label="1 000- 4 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "1000-4000price" }}
          />
          <CheckBoxInput
            label="4 001 - 7 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "4001-7000price" }}
          />
          <CheckBoxInput
            label="7 001 - 10 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: "7001-10000price" }}
          />
          <CheckBoxInput
            label="Более 10 000"
            price={true}
            sortType="price"
            productType={productType}
            input={{ id: ">10000price" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={6} filter="Производитель">
          <CheckBoxInput
            label="SteelSeries"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "SteelSeriesKbs" }}
          />
          <CheckBoxInput
            label="Redragon"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "RedragonKbs" }}
          />
          <CheckBoxInput
            label="Logitech"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "LogitechKbs" }}
          />
          <CheckBoxInput
            label="Razer"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "RazerKbs" }}
          />
          <CheckBoxInput
            label="ASUS"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "AsusKbs" }}
          />
          <CheckBoxInput
            label="A4Tech"
            sortType="manufacturer"
            productType={productType}
            input={{ id: "A4TechKbs" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Общее количество клавиш">
          <CheckBoxInput
            label="Менее 71"
            sortType="keys"
            productType={productType}
            input={{ id: "<71keys" }}
          />
          <CheckBoxInput
            label="71 - 105"
            sortType="keys"
            productType={productType}
            input={{ id: "71-105keys" }}
          />
          <CheckBoxInput
            label="Более 105"
            sortType="keys"
            productType={productType}
            input={{ id: ">105keys" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Тип Подключения">
          <CheckBoxInput
            label="Проводная"
            sortType="wireless"
            productType={productType}
            input={{ id: "wiredKbs" }}
          />
          <CheckBoxInput
            label="Беспроводная"
            sortType="wireless"
            productType={productType}
            input={{ id: "wirelessKbs" }}
          />
          <CheckBoxInput
            label="Беспроводная/проводная"
            sortType="wireless"
            productType={productType}
            input={{ id: "wirelesswiredKbs" }}
          />
        </ExpandableFilter>
        <ExpandableFilter inputs={3} filter="Тип Клавиатуры">
          <CheckBoxInput
            label="Мембранная"
            sortType="kbType"
            productType={productType}
            input={{ id: "membranousKbs" }}
          />
          <CheckBoxInput
            label="Механическая"
            sortType="kbType"
            productType={productType}
            input={{ id: "mechanicKbs" }}
          />
          <CheckBoxInput
            label="Оптомеханическая"
            sortType="kbType"
            productType={productType}
            input={{ id: "optoMechanicKbs" }}
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
