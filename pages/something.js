import { Fragment } from "react";

export default function (props) {

    async function sendDataTry(){
        const response = await fetch('./api/hello')
        const answer = await response.json();
        console.log(answer);
    }

  async function sendData() {
    const data = {
      title: "SteelSeries Rival 3",
      price: 3199,
      rating: 4.6,
      manufacturer: "SteelSeries",
      dpi: "8500",
      wireless: false,
      viewable: true,
      discount: 25,
      id: 1,
      eligibleIds: [
        `<5000price`,
        `SteelSeriesMouses`,
        `wiredMouse`,
        `5001-1000dpi`,
        ">4rating",
      ],
      images: [
        "/mouses/exampleMouse.webp",
        "/mouses/exampleMouse2.webp",
        "/mouses/exampleMouse3.webp",
      ],
      mainChars: [
        ["Модель", "SteelSeries Rival 3"],
        ["Производитель", "SteelSeries"],
        ["Страна", "Китай"],
        ["Гарантия", "24 мес."],
      ],
      specificChars: [
        ["Максимальное разрешение датчика", "8500"],
        ["Тип Подключения", "проводная"],
        ["Тип сенсора мыши", "оптический светодиодный"],
      ],
      sizes: [
        ["Ширина", "67 мм"],
        ["Высота", "37.9 мм"],
        ["Длина", "120.6 мм"],
        ["Вес", "77 г"],
      ],
      analogs: [1],
      overview:
        "Мышь проводная SteelSeries Rival 3 - оптимальный вариант для прохождения игр любой жанровой направленности. Отличительной особенностью этой модели стала высокая разрешающая способность оптического датчика, максимальный показатель которой может достигать 8500 dpi. Даже играя за широкоформатным экраном монитора, вы получите высокую точность движений. Модель оформлена в черном цвете корпуса. Ее дизайн гармонично дополняет эффектная разноцветная подсветка логотипа. Устройство располагает шестью кнопками с возможностью их программирования под различные задачи. Проводная мышь SteelSeries Rival 3 предназначена для использования правой рукой. Облаченная в корпус из матового пластика модель приятна на ощупь, также на ней малозаметны отпечатки пальцев. Устройство подключается к компьютеру или ноутбуку при помощи кабеля с длиной 1.8 м и интерфейсом USB на конце. О долговечности манипулятора свидетельствует внушительный ресурс кнопок, достигающий 60 млн нажатий. Весящая 77 г мышь обладает размерами 67x37.9x120.6 мм.",
    };

    const response = await fetch("./api/hello", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const answer = await response.json();
    console.log(answer);
  }
  return (
    <Fragment>
      <button
        onClick={sendData}
        style={{
          margin: "0 auto",
          marginTop: "15rem",
          display: "block",
          background: "red",
        }}
      >
        PRESS ME
      </button>

      <button
        onClick={sendDataTry}
        style={{
          margin: "0 auto",
          marginTop: "13rem",
          display: "block",
          background: "red",
        }}
      >
        PRESS ME TRY
      </button>
    </Fragment>
  );
}
