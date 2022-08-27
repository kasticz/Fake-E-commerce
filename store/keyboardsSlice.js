import { createSlice } from "@reduxjs/toolkit";
import {
  setUpState,
  applyDiscounts,
  reset,
  makeAllUnViewable,
  sortByInputs,
} from "./mousesSlice";

const inKbs = [
  {
    title: "Redragon Devarajas",
    price: 5999,
    rating: 3.6,
    manufacturer: "Redragon",
    keys: 104,
    wireless: false,
    viewable: true,
    discount: null,
    type: "mechanic",
    id: 21,
    eligibleIds: [
      `4001-7000price`,
      `RedragonKbs`,
      `wiredKbs`,
      `71-105keys`,
      //   ">4rating",
      "mechanicKbs"
    ],
    images: [
      "/kbs/RedragonDevarajas.webp",
      "/kbs/RedragonDevarajas2.webp",
      "/kbs/RedragonDevarajas3.webp",
    ],
    mainChars: [
      ["Модель", "Redragon Devarajas"],
      ["Производитель", "Redragon"],
      ["Страна", "Китай"],
      ["Гарантия", "18 мес."],
    ],
    specificChars: [
      ["Тип клавиатуры", "механическая"],
      ["Тип подключения", "проводная"],
      ["Общее количество клавиш", "104"],
    ],
    sizes: [
      ["Ширина", "435 мм"],
      ["Высота", "39.5 мм"],
      ["Длина", "124 мм"],
      ["Вес", "1200 г"],
    ],
    overview:
      "Клавиатура Redragon Devarajas – стильная игровая модель с черным островным корпусом из металла и пластика. Предусматривается наличие 104-х клавиш с переключателями Tea, среди которых есть Fn-клавиши и отдельный цифровой блок. Комфортной эксплуатации способствует наличие яркой RGB-подсветки.Устройство Redragon Devarajas островного типа дополнено алюминиевым покрытием, защищающим от брызг и попадания капель воды на механизм. Подключение к компьютеру осуществляется при помощи кабеля длиной 1.8 м с интерфейсом USB и питанием по шине. Рабочий ресурс клавиш достигает 50 млн нажатий. Клавиатура весит 1.4 кг и обладает размерами 43.51x4.03x12.34 см.",
  },
  {
    title: "Logitech G613",
    price: 9999,
    rating: 4.2,
    manufacturer: "Logitech",
    keys: 120,
    wireless: true,
    viewable: true,
    discount: null,
    type: "mechanic",
    id: 23,
    eligibleIds: [
      `7001-10000price`,
      `LogitechKbs`,
      `wirelesswiredKbs`,
      `>105keys`,
      ">4rating",,
      "optoMechanicKbs"
    ],
    images: [
      "/kbs/LogitechG613.webp",
      "/kbs/LogitechG6132.webp",
      "/kbs/LogitechG6133.webp",
    ],
    mainChars: [
      ["Модель", "ASUS ROG Claymore II"],
      ["Производитель", "Asus"],
      ["Страна", "Китай"],
      ["Гарантия", "24 мес."],
    ],
    specificChars: [
      ["Тип клавиатуры", "оптомеханическая"],
      ["Тип подключения", "беспроводная/проводная"],
      ["Общее количество клавиш", "108"],
    ],
    sizes: [
      ["Ширина", "462 мм"],
      ["Высота", "39 мм"],
      ["Длина", "155 мм"],
      ["Вес", "1156 г"],
    ],
    overview:
      "Клавиатура ASUS ROG Claymore II [90MP01W0-BKRA00] разработана для геймеров. Устройство предусматривает подключение проводным и беспроводным способами. Данная модель оснащена оптико-механическими переключателями ROG RX, отсоединяемым цифровым блоком и рядом программируемых клавиш. Одной из примечательных особенностей ASUS ROG Claymore II является настраиваемая многоцветная подсветка. Подставка под запястья обладает приятными тактильными свойствами и повышает удобство длительных игровых сеансов. Клавиатура подзаряжается через интерфейсный разъем USB-C и дополнительно предлагает порт USB Type-A для подключения другого периферийного устройства.",
  },
  {
    title: "ASUS ROG Claymore II",
    price: 22999,
    rating: 4.6,
    manufacturer: "Asus",
    keys: 108,
    wireless: true,
    viewable: true,
    discount: 15,
    type: "optomechanic",
    id: 22,
    eligibleIds: [
      `>10000price`,
      `AsusKbs`,
      `wirelesswiredKbs`,
      `>105keys`,
      ">4rating",
      "optoMechanicKbs"
    ],
    images: [
      "/kbs/ASUSROGClaymoreII.webp",
      "/kbs/ASUSROGClaymoreII2.webp",
      "/kbs/ASUSROGClaymoreII3.webp",
    ],
    mainChars: [
      ["Модель", "ASUS ROG Claymore II"],
      ["Производитель", "Asus"],
      ["Страна", "Китай"],
      ["Гарантия", "24 мес."],
    ],
    specificChars: [
      ["Тип клавиатуры", "оптомеханическая"],
      ["Тип подключения", "беспроводная/проводная"],
      ["Общее количество клавиш", "108"],
    ],
    sizes: [
      ["Ширина", "462 мм"],
      ["Высота", "39 мм"],
      ["Длина", "155 мм"],
      ["Вес", "1156 г"],
    ],
    overview:
      "Клавиатура ASUS ROG Claymore II [90MP01W0-BKRA00] разработана для геймеров. Устройство предусматривает подключение проводным и беспроводным способами. Данная модель оснащена оптико-механическими переключателями ROG RX, отсоединяемым цифровым блоком и рядом программируемых клавиш. Одной из примечательных особенностей ASUS ROG Claymore II является настраиваемая многоцветная подсветка. Подставка под запястья обладает приятными тактильными свойствами и повышает удобство длительных игровых сеансов. Клавиатура подзаряжается через интерфейсный разъем USB-C и дополнительно предлагает порт USB Type-A для подключения другого периферийного устройства.",
  },
];

export const kbsSlice = createSlice({
  name: "keyboards",
  initialState: inKbs,
  reducers: {
    setUpState,
    applyDiscounts,
    reset,
    makeAllUnViewable,
    sortByInputs,
  },
});

export function filterKbs(payload) {
  const inputs = payload.inputs;
  return (dispatch) => {
    dispatch(kbsSlice.actions.makeAllUnViewable());
    dispatch(kbsSlice.actions.sortByInputs(inputs));
  };
}

const keyboardsInputs = {
  rating: {
    ">4rating": false,
  },
  price: {
    "<1000price": false,
    "1001-4000price": false,
    "4001-7000price": false,
    "7001-10000price": false,
    ">10000price": false,
  },
  keys: {
    "<71keys": false,
    "71-105keys": false,
    ">105keys": false,
  },
  manufacturer: {
    AsusKbs: false,
    LogitechKbs: false,
    RedragonKbs: false,
    RazerKbs: false,
    OklickKbs: false,
    A4TechKbs: false,
  },
  wireless: {
    wiredKbs: false,
    wirelessKbs: false,
    wirelesswiredKbs: false,
  },
  kbType:{
    membranousKbs: false,
    mechanicKbs: false,
    optoMechanicKbs: false,
  }
};

export const keyboardsInputsSlice = createSlice({
  name: "keyboardsInputs",
  initialState: keyboardsInputs,
  reducers: {
    addInput(state, payload) {
      state[payload.payload.sortType][payload.payload.value] =
        !state[payload.payload.sortType][payload.payload.value];
    },
    resetInputs(state) {
      state = keyboardsInputs;
      return state;
    },
  },
});

export const kbsActions = kbsSlice.actions;
export const kbsInputsActions = keyboardsInputsSlice.actions
export default kbsSlice;
