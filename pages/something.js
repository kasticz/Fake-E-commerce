import { Fragment } from "react";

export default function Something (props) {
  async function sendDataTry() {
    const response = await fetch("./api/hello");
    const answer = await response.json();
  }

  async function sendData() {
    const data = {
      title: "A4Tech Bloody AL9/AL90 Blazing",
      price: 2799,
      rating: 4.3,
      manufacturer: "A4Tech",
      dpi: "8200",
      wireless: false,
      viewable: true,
      discount: null,
      id: 20,
      eligibleIds: [
        `<5000price`,
        `A4TechMouses`,
        `wiredMouse`,
        `5001-10000dpi`,
        ">4rating",
      ],
      images: [
        "/mouses/A4TechBloodyAL9AL90Blazing.webp",
        "/mouses/A4TechBloodyAL9AL90Blazing2.webp",
        "/mouses/A4TechBloodyAL9AL90Blazing3.webp",
      ],
      mainChars: [
        ["Модель", "A4Tech Bloody AL9/AL90 Blazing"],
        ["Производитель", "A4Tech"],
        ["Страна", "Китай"],
        ["Гарантия", "12 мес."],
      ],
      specificChars: [
        ["Максимальное разрешение датчика", "8200 "],
        ["Тип подключения", "проводная"],
        ["Тип сенсора мыши", "оптический лазерный"],
      ],
      sizes: [
        ["Ширина", "67 мм"],
        ["Высота", "42.5 мм"],
        ["Длина", "124 мм"],
        ["Вес", "146 г"],
      ],
      overview:
        "Мышь проводная A4Tech Bloody AL9 Blazing имеет Bloody-стилизацию в красных и черных тонах с синей LED-подсветкой. Эргономичная форма поможет геймерам сохранить точность кликов, не отяжеляя кисть правой руки. Заявленная износостойкость пластиковых кнопок равна двадцати миллионам кликов. Технология 16-ступенчатой калибровки, 8200-точечное разрешение и металлические ножки Armor Boot-X'Glide Pro Metal Mouse Feet гарантируют высокую точность и чувствительность мыши, независимо от использующейся поверхности.При восьми кнопках, имеющихся на рабочем корпусе A4Tech Bloody AL9 Blazing, встроенная в нее память в 160 Кб позволяет создавать целые пользовательские интерфейсы, сохраняя до 4000 комбинаций или отдельных команд.",
    };

    const response = await fetch("./api/hello", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const answer = await response.json();
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
