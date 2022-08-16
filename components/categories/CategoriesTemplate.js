import Input from "../UI/Input";
import { useRef, useState } from "react";
import styles from "./CategoriesTemplate.module.sass";
import CheckBoxInput from "../UI/CheckBoxInput";
import ExpandableFilter from "./ExpandableFilter";
import SortPanel from "./SortPanel";
import CategoryItems from "./CategoryItems";

export default function CategoriesTemplate(props) {
  return (
    <main className={styles.productsPage}>
      <div className={styles.filterPanel}>
        <form className={styles.filterForm}>
          <CheckBoxInput label="Рейтинг 4 и выше" input={{ id: "rating4" }} />
          <ExpandableFilter inputs={4} filter="Цена">
            <CheckBoxInput
              label="Менее 5 000"
              price={true}
              input={{ id: ">5000price" }}
            />
            <CheckBoxInput
              label="5 001-15 000"
              price={true}
              input={{ id: "5001-15000price" }}
            />
            <CheckBoxInput
              label="Более 15 000"
              price={true}
              input={{ id: ">15000price" }}
            />
            <CheckBoxInput
              label="Более 30 000"
              price={true}
              input={{ id: ">30000price" }}
            />
          </ExpandableFilter>
          <ExpandableFilter inputs={5} filter="Производитель">
            <CheckBoxInput
              label="SteelSeries"
              input={{ id: "SteelSeriesMouses" }}
            />
            <CheckBoxInput label="Sven" input={{ id: "SvenMouses" }} />
            <CheckBoxInput label="Logitech" input={{ id: "LogitechMouses" }} />
            <CheckBoxInput label="Razer" input={{ id: "RazerMouses" }} />
            <CheckBoxInput label="OKlick" input={{ id: "OKlickMouses" }} />
          </ExpandableFilter>
          <ExpandableFilter
            inputs={5}
            filter="Максимальное разрешение датчика (dpi)"
          >
            <CheckBoxInput label="Менее 5 000" input={{ id: "<5000dpi" }} />
            <CheckBoxInput
              label="5 001-10 000"
              input={{ id: "5001-10001dpi" }}
            />
            <CheckBoxInput
              label="10 001 - 15 000"
              input={{ id: "10001-15001dpi" }}
            />
            <CheckBoxInput
              label="15 001 - 20 000"
              input={{ id: "15001-20001dpi" }}
            />
            <CheckBoxInput label="Более 20 001" input={{ id: ">20001dpi" }} />
          </ExpandableFilter>
          <ExpandableFilter inputs={5} filter="Тип Подключения">
            <CheckBoxInput label="Проводная" input={{ id: "wiredMouse" }} />
            <CheckBoxInput
              label="Беспроводная"
              input={{ id: "wirelessMouse" }}
            />
          </ExpandableFilter>
        </form>
      </div>
      <div className={styles.productsMain}>
        <SortPanel/>
        <CategoryItems/>
      </div>
    </main>
  );
}
