import { createSlice } from "@reduxjs/toolkit";
import {
  setUpState,
  applyDiscounts,
  reset,
  makeAllUnViewable,
  sortByInputs,
} from "./mousesSlice";

const inMns = [
  {
    title: "Acer KA220HQbi",
    price: 8999,
    rating: 3.7,
    manufacturer: "Acer",
    diagonal: 21.5,
    maxHz: 60,
    matrix: "TN",
    resolution: "1920x1080",
    viewable: true,
    discount: null,
    id: 41,
    eligibleIds: [
      `<11000price`,
      `AcerMns`,
      `<23dia`,
      `TNMns`,
      //   ">4rating",
      "60hz",
      "1920x1080",
    ],
    images: [
      "/mns/AcerKA220HQbi.webp",
      "/mns/AcerKA220HQbi2.webp",
      "/mns/AcerKA220HQbi3.webp",
    ],
    mainChars: [
      ["Модель", "Acer KA220HQbi"],
      ["Производитель", "Acer"],
      ["Страна", "Китай"],
      ["Гарантия", "36 мес."],
    ],
    specificChars: [
      ["Технология изготовления матрицы", "TN"],
      ["Диагональ экрана", "21.5 дюймов"],
      ["Частота при максимальном разрешении", "60 ГЦ"],
      ["Максимальное разрешение", "1920x1080"],
    ],
    sizes: [
      ["Ширина с подставкой", "503 мм"],
      ["Максимальная высота с подставкой", "379 мм"],
      ["Толщина с подставкой", "181 мм"],
      ["Вес с подставкой", "3.25 кг"],
    ],
    overview:
      "Монитор Acer KA220HQbi с диагональю экрана 21.5 дюймов обеспечит трансляцию изображения в высокочетком разрешении 1920x1080 пикселей. Матовое покрытие экрана гарантирует комфортную работу за монитором, если он установлен рядом с окном или в помещении со слишком ярким освещением. Монитор Acer KA220HQbi располагает двумя видеоинтерфейсами: HDMI и VGA (D-Sub) для подключения к системному блоку. Элегантная подставка обеспечивает устойчивость монитора на компьютерном столе.",
  },
  {
    title: "AOC Q27G2S/EU",
    price: 26999,
    rating: 4.5,
    manufacturer: "AOC",
    diagonal: 27,
    maxHz: 165,
    matrix: "IPS",
    resolution: "2560x1440",
    viewable: true,
    discount: 25,
    id: 42,
    eligibleIds: [
      `>20000price`,
      `AOCMns`,
      `27-30.99dia`,
      `IPSMns`,
      ">4rating",
      "165hz",
      "2560x1440",
    ],
    images: [
      "/mns/AOCQ27G2SEU.webp",
      "/mns/AOCQ27G2SEU2.webp",
      "/mns/AOCQ27G2SEU3.webp",
    ],
    mainChars: [
      ["Модель", "AOC Q27G2S/EU"],
      ["Производитель", "AOC"],
      ["Страна", "Китай"],
      ["Гарантия", "36 мес."],
    ],
    specificChars: [
      ["Технология изготовления матрицы", "IPS"],
      ["Диагональ экрана", "27 дюймов"],
      ["Частота при максимальном разрешении", "165 ГЦ"],
      ["Максимальное разрешение", "2560x1440"],
    ],
    sizes: [
      ["Ширина с подставкой", "611.8 мм"],
      ["Максимальная высота с подставкой", "528.6 мм"],
      ["Толщина с подставкой", "227.4 мм"],
      ["Вес с подставкой", "5.6 кг"],
    ],
    overview:
      "Монитор AOC Q27G2S/EU разработан с учетом требований геймеров, поэтому он воплощает в себе мощные технические характеристики, высокое качество изображения и продуманную эргономику. В данном мониторе установлен экран диагональю 27 дюймов стандарта Quad HD с тонкой рамкой, позволяя максимально погрузиться в игровой процесс. Матрица IPS с матовым покрытием обеспечивает создание картинки высокой четкости с реалистичной передачей цветов и отсутствием бликов. Благодаря частоте обновления 165 Гц вы сможете наслаждаться плавным геймингом без задержек отображения графики.Для подключения внешнего оборудования в AOC Q27G2S/EU имеются 2 разъема HDMI, а также видеовход DisplayPort. Эргономичная конструкция подставки позволяет регулировать угол наклона, изменять высоту до 130 мм, осуществлять поворот влево/вправо и переводить экран в режим портретной ориентации.",
  },
  {
    title: "AOC C27G2ZU/BK",
    price: 24999,
    rating: 4.4,
    manufacturer: "AOC",
    diagonal: 27,
    maxHz: 240,
    matrix: "VA",
    resolution: "1920x1080",
    viewable: true,
    discount: 35,
    id: 43,
    eligibleIds: [
      `15001-20000price`,
      `AOCMns`,
      `27-30.99dia`,
      `VAMns`,
      ">4rating",
      "240hz",
      "1920x1080",
    ],
    images: [
      "/mns/AOCC27G2ZUBK.webp",
      "/mns/AOCC27G2ZUBK2.webp",
      "/mns/AOCC27G2ZUBK3.webp",
    ],
    mainChars: [
      ["Модель", "AOC C27G2ZU/BK"],
      ["Производитель", "AOC"],
      ["Страна", "Китай"],
      ["Гарантия", "36 мес."],
    ],
    specificChars: [
      ["Технология изготовления матрицы", "VA"],
      ["Диагональ экрана", "27 дюймов"],
      ["Частота при максимальном разрешении", "240 ГЦ"],
      ["Максимальное разрешение", "1920x1080"],
    ],
    sizes: [
      ["Ширина с подставкой", "612.37 мм"],
      ["Максимальная высота с подставкой", "528.6 мм"],
      ["Толщина с подставкой", "227.4 мм"],
      ["Вес с подставкой", "5.5 кг"],
    ],
    overview:
      "Монитор AOC C27G2ZU/BK [C27G2ZU/BK/01] с изогнутым экраном 1500R создан для обеспечения увлекательного погружения в мир компьютерных игр. Панель VA с диагональю 27 дюйма и разрешением 1920x1080 пикселей позволяет оценить по-настоящему реалистичное изображение. Благодаря времени отклика 0.5 мс, частоте обновления 240 Гц и низкой задержке на входе достигается плавная передача динамичных сцен без смазывания и разрыва кадров. Отмечается совместимость с технологиями FreeSync Premium и G-Sync.Монитор AOC C27G2ZU/BK характеризуется наличием видеовыходов HDMI и DisplayPort, а также получил четыре порта USB под периферийные устройства и разъем для наушников. Аудиосистема с двумя динамиками мощностью по 2 Вт воспроизводит насыщенный реалистичный звук. Подставка с регулировкой высоты, поворотом влево/вправо и изменением угла наклона вперед/назад способствует простой настройке оптимального положения экрана.",
  },
];

export const mnsSlice = createSlice({
  name: "monitors",
  initialState: inMns,
  reducers: {
    setUpState,
    applyDiscounts,
    reset,
    makeAllUnViewable,
    sortByInputs,
  },
});

export function filterMns(payload) {
  const inputs = payload.inputs;
  console.log(inputs);
  return (dispatch) => {
    dispatch(mnsSlice.actions.makeAllUnViewable());
    dispatch(mnsSlice.actions.sortByInputs(inputs));
  };
}

const monitorsInputs = {
  rating: {
    ">4rating": false,
  },
  price: {
    "<11000price": false,
    "11001-15000price": false,
    "15001-20000price": false,
    ">20000price": false,
  },
  maxHz: {
    "60hz": false,
    "75hz": false,
    "144hz": false,
    "165hz": false,
    "240hz": false,
  },
  manufacturer: {
    AcerMns: false,
    AocMns: false,
    AsusMns: false,
    LGMns: false,
    PhilipsMns: false,
  },
  matrix: {
    IPSMns: false,
    TNMns: false,
    VAMns: false,
  },
  diagonal: {
    "<23dia": false,
    "23-26.99dia": false,
    "27-30.99dia": false,
    ">31dia": false,
  },
  resolution: {
    "1920x1080": false,
    "2560x1440": false,
    "3840x2160": false,
  },
};

export const monitorsInputsSlice = createSlice({
  name: "monitorsInputs",
  initialState: monitorsInputs,
  reducers: {
    addInput(state, payload) {
      state[payload.payload.sortType][payload.payload.value] =
        !state[payload.payload.sortType][payload.payload.value];
    },
    resetInputs(state) {
      state = monitorsInputs;
      return state;
    },
  },
});

export const monitorsActions = mnsSlice.actions;
export const monitorsInputsActions = monitorsInputsSlice.actions;
export default mnsSlice;
