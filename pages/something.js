import { Fragment } from "react";

export default function Something (props) {
  async function sendDataTry() {
    const response = await fetch("./api/hello");
    const answer = await response.json();
  }

  async function sendData() {
    const data = [
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
          "mechanicKbs",
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
          ["Общее количество клавиш", "104 клавиши"],
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
        rating: 3.7,
        manufacturer: "Logitech",
        keys: 120,
        wireless: true,
        viewable: true,
        discount: 5,
        type: "mechanic",
        id: 22,
        eligibleIds: [
          `7001-10000price`,
          `LogitechKbs`,
          `wirelessKbs`,
          `>105keys`,
          // ">4rating",
          "mechanicKbs",
        ],
        images: [
          "/kbs/LogitechG613.webp",
          "/kbs/LogitechG6132.webp",
          "/kbs/LogitechG6133.webp",
        ],
        mainChars: [
          ["Модель", "Logitech G613"],
          ["Производитель", "Logitech"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "механическая"],
          ["Тип подключения", "беспроводная"],
          ["Общее количество клавиш", "120 клавиш"],
        ],
        sizes: [
          ["Ширина", "478 мм"],
          ["Высота", "33 мм"],
          ["Длина", "216 мм"],
          ["Вес", "1410 г"],
        ],
        overview:
          "Механический механизм клавиш клавиатуры Logitech G613 рассчитан на повышенные нагрузки – он надежен, долговечен, что и не удивительно, ведь это игровая клавиатура. При всем этом вам будет обеспечен мгновенный отклик на нажатия. Общее количество клавиш равно 120, в их число входят макро-клавиши и мультимедиа. Это полноразмерная клавиатура с подставкой для рук, позволяющей снизить напряжение в запястьях, что особенно ценно, когда ваши виртуальные баталии длятся несколько часов. Logitech G613 отличается беспроводным типом подключения, что весьма удобно, а также наличием подставки для телефона и приемника LIGHTSPEED.",
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
        id: 23,
        eligibleIds: [
          `>10000price`,
          `AsusKbs`,
          `wirelesswiredKbs`,
          `>105keys`,
          ">4rating",
          "optoMechanicKbs",
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
          ["Общее количество клавиш", "108 клавиш"],
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
        title: "Logitech MX Keys",
        price: 8999,
        rating: 4.6,
        manufacturer: "Logitech",
        keys: 80,
        wireless: true,
        viewable: true,
        discount: 15,
        type: "membranous",
        id: 24,
        eligibleIds: [
          `7001-10000price`,
          `LogitechKbs`,
          `wirelessKbs`,
          `71-105keys`,
          ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/LogitechMXKeysMiniPale.webp",
          "/kbs/LogitechMXKeysMiniPale2.webp",
          "/kbs/LogitechMXKeysMiniPale3.webp",
        ],
        mainChars: [
          ["Модель", "Logitech MX Keys Mini Pale"],
          ["Производитель", "Logitech"],
          ["Страна", "Китай"],
          ["Гарантия", "36 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "беспроводная"],
          ["Общее количество клавиш", "80 клавиш"],
        ],
        sizes: [
          ["Ширина", "296 мм"],
          ["Высота", "21 мм"],
          ["Длина", "132 мм"],
          ["Вес", "506 г"],
        ],
        overview:
          "Клавиатура беспроводная Logitech MX Keys Mini Pale [920-010501] – компактная модель с лаконичным черным корпусом, которую можно носить в сумке и брать с собой в любое место. Приятная белая подсветка подстраивается под освещение в комнате, а в интеллектуальном режиме автоматически включается при приближении пальцев к клавиатуре. Клавиши с углублениями под кончики пальцев нажимаются плавно и легко. Прибор со встроенной АКБ заряжается от USB-порта, работая на полном заряде до 10 дней, а если отключить подсветку – до 5 месяцев.  Модель Logitech MX Keys Mini Pale дополнена горячими клавишами, функциями добавления эмодзи и диктовки. При включенном микрофоне система преобразует речь в текст, делая работу еще приятнее и проще. С помощью Bluetooth Low Energy вы объедините клавиатуру с тремя ПК или ноутбуками на основе разных ОС. Технология FLOW поможет моментально переключаться между устройствами для удобной работы в одном потоке.",
      },
      {
        title: "Logitech Wireless Keyboard K270",
        price: 2699,
        rating: 4.3,
        manufacturer: "Logitech",
        keys: 112,
        wireless: true,
        viewable: true,
        discount: null,
        type: "membranous",
        id: 25,
        eligibleIds: [
          `1000-4000price`,
          `LogitechKbs`,
          `wirelessKbs`,
          `>105keys`,
          ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/LogitechWirelessKeyboardK270.webp",
          "/kbs/LogitechWirelessKeyboardK2702.webp",
          "/kbs/LogitechWirelessKeyboardK2703.webp",
        ],
        mainChars: [
          ["Модель", "Logitech Wireless Keyboard K270"],
          ["Производитель", "Logitech"],
          ["Страна", "Китай"],
          ["Гарантия", "36 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "беспроводная"],
          ["Общее количество клавиш", "112 клавиш "],
        ],
        sizes: [
          ["Ширина", "442 мм"],
          ["Высота", "18 мм"],
          ["Длина", "150 мм"],
          ["Вес", "500 г"],
        ],
        overview:
          "Клавиатура Logitech Wireless Keyboard K270 имеет классическую раскладку – 112 кнопок, из которых 8 являются дополнительными функциональными клавишами. Черный корпус изготовлен из пластика. В основе модели лежит мембранный механизм. Беспроводная связь обеспечивает подключение к компьютеру. Небольшой приемник Logitech Unifying использует интерфейс USB. Для быстрого функционирования устройства не понадобится наличие дополнительного программного обеспечения.Клавиши защищены от износа благодаря УФ-покрытию. В верхнем правом углу модель имеет переключатель питания. Длительная работа устройства обеспечивается за счет двух батареек AAA. Установка их производится в отсек, который находится с обратной стороны. Максимальное расстояние для поддержания беспроводного соединения составляет 10 м. Высота клавиатуры Logitech Wireless Keyboard K270 регулируется с помощью подставок.",
      },
      {
        title: "A4Tech Fstyler FBK25",
        price: 1199,
        rating: 3.4,
        manufacturer: "A4Tech",
        keys: 103,
        wireless: true,
        viewable: true,
        discount: 20,
        type: "membranous",
        id: 26,
        eligibleIds: [
          `<1000price`,
          `A4TechKbs`,
          `wirelessKbs`,
          `71-105keys`,
          // ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/A4TechFstylerFBK25.webp",
          "/kbs/A4TechFstylerFBK2522.webp",
          "/kbs/A4TechFstylerFBK2523.webp",
        ],
        mainChars: [
          ["Модель", "A4Tech Fstyler FBK25"],
          ["Производитель", "A4Tech"],
          ["Страна", "Китай"],
          ["Гарантия", "12 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "беспроводная"],
          ["Общее количество клавиш", "103 клавиши"],
        ],
        sizes: [
          ["Ширина", "396 мм"],
          ["Высота", "25 мм"],
          ["Длина", "145 мм"],
          ["Вес", "469 г"],
        ],
        overview:
          "Клавиатура A4Tech Fstyler FBK25 станет надежной помощницей для повседневной работы и учебы. Она подключается беспроводным способом посредством технологии Bluetooth или по радиоканалу на частоте 2.4 ГГц. Данная клавиатура оснащена 103 клавишами, включая цифровой блок. Мембранный механизм клавиш отличается четким откликом и низким уровнем шума. Особенностью клавиатуры является встроенная подставка для удобного размещения мобильного телефона. В комплекте с клавиатурой A4Tech Fstyler FBK25 поставляются сменные цветные панели, элемент питания АА и приемник USB.",
      },
      {
        title: "SteelSeries Apex 7 TKL",
        price: 13999,
        rating: 4.4,
        manufacturer: "SteelSeries",
        keys: 84,
        wireless: false,
        viewable: true,
        discount: 10,
        type: "mechanic",
        id: 27,
        eligibleIds: [
          `>10000price`,
          `SteelSeriesKbs`,
          `wiredKbs`,
          `71-105keys`,
          ">4rating",
          "mechanicKbs",
        ],
        images: [
          "/kbs/SteelSeriesApex7TKL.webp",
          "/kbs/SteelSeriesApex7TKL2.webp",
          "/kbs/SteelSeriesApex7TKL3.webp",
        ],
        mainChars: [
          ["Модель", "SteelSeries Apex 7 TKL"],
          ["Производитель", "SteelSeries"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "механическая"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "84 клавиши"],
        ],
        sizes: [
          ["Ширина", "355.4 мм"],
          ["Высота", "40.4 мм"],
          ["Длина", "139.26 мм"],
          ["Вес", "771.11 г"],
        ],
        overview:
          "Клавиатура проводная SteelSeries APEX 7 TKL представляет собой надежную клавиатуру с прочными и сверхбыстрыми механическими переключателями SteelSeries QX2, которые обеспечивают мгновенную реакцию, что идеально для игр. В правом верхнем углу устройства находится дисплей OLED Smart, который напрямую отображает информацию из приложений и игр. Он также позволяет изменять настройки, менять профили. Корпус клавиатуры сделан из авиационного алюминия, что обеспечивает прочность, долговечность и небольшой вес конструкции.В качестве дополнительного элемента для комфортной игры на SteelSeries APEX 7 TKL используется мягкая подставка, которая крепится при помощи магнита, обеспечивая быстрое и легкое соединение с корпусом. Подставка позволяет защитить ладони, а мягкое покрытие способствует комфортному печатанию или процессу игры. Клавиатура поддерживает сохранение макросов с возможностью их предварительной настройки, оснащена пятью сохраняемыми профилями и предусматривает поддержку управления эффектами PRISM.",
      },
      {
        title: "ASUS TUF Gaming K3",
        price: 9999,
        rating: 4.7,
        manufacturer: "Asus",
        keys: 104,
        wireless: false,
        viewable: true,
        discount: null,
        type: "mechanic",
        id: 28,
        eligibleIds: [
          `7001-10000price`,
          `AsusKbs`,
          `wiredKbs`,
          `71-105keys`,
          ">4rating",
          "mechanicKbs",
        ],
        images: [
          "/kbs/ASUSTUFGamingK3.webp",
          "/kbs/ASUSTUFGamingK32.webp",
          "/kbs/ASUSTUFGamingK33.webp",
        ],
        mainChars: [
          ["Модель", "ASUS TUF Gaming K3"],
          ["Производитель", "Asus"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "механическая"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "104 клавиши"],
        ],
        sizes: [
          ["Ширина", "438.7 мм"],
          ["Высота", "38.75 мм"],
          ["Длина", "130.9 мм"],
          ["Вес", "1110 г"],
        ],
        overview:
          "Клавиатура проводная ASUS TUF Gaming K3 [90MP01Q0-BKRA00] имеет все необходимое, чтобы сделать игровой процесс максимально комфортным и быстрым на действия соперников. В данной конфигурации используются механические линейные переключатели Kailh Red с длительным ресурсом службы. Прочная алюминиевая рана гарантирует надежность конструкции.Клавиатура оснащена программируемыми клавишами с возможностью записи макросов. Для хранения настроек предусмотрена встроенная память. Подсветка Aura характеризуется независимой настройкой цветов и динамических эффектов, а также предоставляет возможность синхронизации с другими совместимыми устройствами. Из других особенностей ASUS TUF Gaming K3 отмечается эргономичная подставка под запястья на магнитном креплении.",
      },
    
      {
        title: "A4Tech KR-85",
        price: 799,
        rating: 4.3,
        manufacturer: "A4Tech",
        keys: 104,
        wireless: false,
        viewable: true,
        discount: null,
        type: "membranous",
        id: 29,
        eligibleIds: [
          `<1000price`,
          `A4TechKbs`,
          `wiredKbs`,
          `71-105keys`,
          ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/A4TechKR85.webp",
          "/kbs/A4TechKR852.webp",
          "/kbs/A4TechKR853.webp",
        ],
        mainChars: [
          ["Модель", "A4Tech KR-85"],
          ["Производитель", "A4Tech"],
          ["Страна", "Китай"],
          ["Гарантия", "12 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "104 клавиши"],
        ],
        sizes: [
          ["Ширина", "454 мм"],
          ["Высота", "27 мм"],
          ["Длина", "154 мм"],
          ["Вес", "580 г"],
        ],
        overview:
          "Клавиатура проводная A4Tech KR-85 оптимальна для работы и учебы. Мембранный ход клавиш характеризуется хорошим откликом и низким уровнем шума, что обеспечивает комфортное использование. Для подключения к компьютеру используется длинный провод с USB-разъемом. На панели предусмотрено 104 клавиши, а с левой стороны – цифровой блок для удобных расчетов. Клавиатура проводная A4Tech KR-85 изготовлена из качественного и долговечного пластика. Поверхность черного цвета без труда очищается от загрязнений. Буквы и цифры нанесены белым цветом методом лазерной гравировки, что предотвращает преждевременное стирание. С помощью выдвижных ножек можно регулировать угол наклона. Для часто используемых команд предусмотрены широкие кнопки.",
      },
      {
        title: "Logitech K120",
        price: 999,
        rating: 4.4,
        manufacturer: "Logitech",
        keys: 104,
        wireless: false,
        viewable: true,
        discount: null,
        type: "membranous",
        id: 30,
        eligibleIds: [
          `<1000price`,
          `LogitechKbs`,
          `wiredKbs`,
          `71-105keys`,
          ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/LogitechK120.webp",
          "/kbs/LogitechK1202.webp",
          "/kbs/LogitechK1203.webp",
        ],
        mainChars: [
          ["Модель", "Logitech K120"],
          ["Производитель", "Logitech"],
          ["Страна", "Китай"],
          ["Гарантия", "36 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "104 клавиши"],
        ],
        sizes: [
          ["Ширина", "450 мм"],
          ["Высота", "23.5 мм"],
          ["Длина", "155 мм"],
          ["Вес", "550 г"],
        ],
        overview:
          "Клавиатура проводная Logitech K120 [920-002506/22] – удобная и надежная рабочая модель с классическим дизайном. Полноразмерная раскладка с отдельным цифровым блоком облегчит работу с цифрами, а клавиши с глубоким профилем облегчат быстрый набор текста. Прибор подключается через USB-кабель длиной 1.5 м, не требуя установки ПО и какой-либо настройки.  Модель Logitech K120 [920-002506/22] совместима с разными версиями Windows, радуя удобством и безотказной работой на разных устройствах. Пластиковый корпус защищен от брызг и проливания, дополнен удобными наклонными ножками. Мембранные клавиши выдерживают до 10 млн нажатий, нажимаются тихо и плавно, не раздражая вас и окружающих.",
      },
      {
        title: "Redragon Lakshmi",
        price: 2999,
        rating: 4.8,
        manufacturer: "Redragon",
        keys: 61,
        wireless: false,
        viewable: true,
        discount: 5,
        type: "mechanic",
        id: 31,
        eligibleIds: [
          `1000-4000price`,
          `RedragonKbs`,
          `wiredKbs`,
          `<71keys`,
          ">4rating",
          "mechanicKbs",
        ],
        images: [
          "/kbs/RedragonLakshmi.webp",
          "/kbs/RedragonLakshmi2.webp",
          "/kbs/RedragonLakshmi3.webp",
        ],
        mainChars: [
          ["Модель", "Redragon Lakshmi"],
          ["Производитель", "Redragon"],
          ["Страна", "Китай"],
          ["Гарантия", "12 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "механическая"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "61 клавиша"],
        ],
        sizes: [
          ["Ширина", "291 мм"],
          ["Высота", "36 мм"],
          ["Длина", "102 мм"],
          ["Вес", "570 г"],
        ],
        overview:
          "Клавиатура проводная Redragon Lakshmi – модель механического типа, которая идеально подходит для прохождения разнообразных игр. Устройство в классическом черном цвете корпуса укомплектовано 61 клавишей со встроенной подсветкой, которая не только обеспечивает периферию привлекательным внешним видом, но и дарит комфорт при работе за компьютером в темноте. Для своего безупречного функционирования модель использует линейные переключатели Outemu Red, отличающиеся тихой работой и молниеносным откликом на нажатие.Проводная клавиатура Redragon Lakshmi с раскладкой ANSI облачена в ударопрочный пластиковый корпус с защитой от попадания воды. Комфортное подключение устройства к компьютеру обеспечивает 1.8-метровый отсоединяемый провод с интерфейсом USB на конце. Компактные размеры клавиатуры, соответствующие 291x36x102 мм, позволят с легкостью найти ей место на любом компьютерном столе и здорово сэкономить свободное пространство на нем.",
      },
      {
        title: "Redragon Draconic",
        price: 5499,
        rating: 4.4,
        manufacturer: "Redragon",
        keys: 61,
        wireless: true,
        viewable: true,
        discount: null,
        type: "mechanic",
        id: 32,
        eligibleIds: [
          `4001-7000price`,
          `RedragonKbs`,
          `wirelesswiredKbs`,
          `<71keys`,
          ">4rating",
          "mechanicKbs",
        ],
        images: [
          "/kbs/RedragonDraconic.webp",
          "/kbs/RedragonDraconic2.webp",
          "/kbs/RedragonDraconic3.webp",
        ],
        mainChars: [
          ["Модель", "Redragon Draconic"],
          ["Производитель", "Redragon"],
          ["Страна", "Китай"],
          ["Гарантия", "12 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "механическая"],
          ["Тип подключения", "беспроводная/проводная"],
          ["Общее количество клавиш", "61 клавиша"],
        ],
        sizes: [
          ["Ширина", "292 мм"],
          ["Высота", "36 мм"],
          ["Длина", "102 мм"],
          ["Вес", "650 г"],
        ],
        overview:
          "Клавиатура Redragon Draconic [77696] выполнена в прочном пластиковом корпусе черного цвета и поможет сэкономить пространство на рабочем столе. Данная модель оснащена 61 клавишами с тактильными механическими переключателями Outemu Tea, которые точно реагируют на нажатия и отличаются повышенным ресурсом службы. В клавиши интегрированы светодиоды RGB, формирующие яркие световые эффекты. Клавиатура Redragon Draconic подключается по беспроводной технологии Bluetooth или посредством USB-кабеля. Автономная работа в беспроводном режиме осуществляется на основе аккумулятора.",
      },
      {
        title: "Razer Huntsman V2 TKL",
        price: 13499,
        rating: 3.8,
        manufacturer: "Razer",
        keys: 87,
        wireless: false,
        viewable: true,
        discount: 15,
        type: "optomechanic",
        id: 33,
        eligibleIds: [
          `>10000price`,
          `RazerKbs`,
          `wiredKbs`,
          `71-105keys`,
          // ">4rating",
          "optoMechanicKbs",
        ],
        images: [
          "/kbs/RazerHuntsmanV2TKL.webp",
          "/kbs/RazerHuntsmanV2TKL2.webp",
          "/kbs/RazerHuntsmanV2TKL3.webp",
        ],
        mainChars: [
          ["Модель", "Razer Huntsman V2 TKL"],
          ["Производитель", "Razer"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "оптомеханическая"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "87 клавиш"],
        ],
        sizes: [
          ["Ширина", "362 мм"],
          ["Высота", "37 мм"],
          ["Длина", "140 мм"],
          ["Вес", "930 г"],
        ],
        overview:
          "Клавиатура проводная Razer Huntsman V2 TKL [RZ03-03940800-R3R1] – стильное, компактное и функциональное устройство для требовательных геймеров. Данная модель выполнена в типоразмере TKL, поэтому поможет сэкономить пространство без ущерба функциональности и эргономики. В конструкции клавиатуры Razer Huntsman V2 TKL предусмотрена съемная подставка под запястья из приятных на ощупь материалов. Оптомеханические линейные переключатели Razer Clicky Optical быстро и точно обрабатывают каждое нажатие. Среди других особенностей клавиатуры отмечаются технология NKRO, красочная многоцветная подсветка и подключение по USB-кабелю.",
      },
      {
        title: "Razer Huntsman V2",
        price: 14999,
        rating: 4.3,
        manufacturer: "Razer",
        keys: 108,
        wireless: false,
        viewable: true,
        discount: 5,
        type: "optomechanic",
        id: 34,
        eligibleIds: [
          `>10000price`,
          `RazerKbs`,
          `wiredKbs`,
          `>105keys`,
          ">4rating",
          "optoMechanicKbs",
        ],
        images: [
          "/kbs/RazerHuntsmanV2.webp",
          "/kbs/RazerHuntsmanV22.webp",
          "/kbs/RazerHuntsmanV23.webp",
        ],
        mainChars: [
          ["Модель", "Razer Huntsman V2"],
          ["Производитель", "Razer"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "оптомеханическая"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "108 клавиш"],
        ],
        sizes: [
          ["Ширина", "444 мм"],
          ["Высота", "38 мм"],
          ["Длина", "140 мм"],
          ["Вес", "1198 г"],
        ],
        overview:
          "Клавиатура проводная Razer Huntsman V2 [RZ03-03930700-R3R1] выполнена в надежном износостойком корпусе и выделяется эффектной многоцветной подсветкой для максимального погружения в игру. Оптомеханические переключатели Razer Clicky Optical отличаются высокой скоростью и точностью срабатывания. Данная модель полноразмерного форм-фактора оснащена 108 клавишами, среди которых отмечаются мультимедийные клавиши. В конструкции предусмотрена съемная подставка под запястья, которая повышает комфорт и снижает усталость. Подключение Razer Huntsman V2 осуществляется по проводному интерфейсу USB.",
      },
      {
        title: "A4Tech Bloody B328",
        price: 3299,
        rating: 3.8,
        manufacturer: "A4Tech",
        keys: 104,
        wireless: false,
        viewable: true,
        discount: null,
        type: "optomechanic",
        id: 35,
        eligibleIds: [
          `1000-4000price`,
          `A4TechKbs`,
          `wiredKbs`,
          `71-105keys`,
          // ">4rating",
          "optoMechanicKbs",
        ],
        images: [
          "/kbs/A4TechBloodyB328.webp",
          "/kbs/A4TechBloodyB3282.webp",
          "/kbs/A4TechBloodyB3283.webp",
        ],
        mainChars: [
          ["Модель", "A4Tech Bloody B328"],
          ["Производитель", "A4Tech"],
          ["Страна", "Китай"],
          ["Гарантия", "12 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "оптомеханическая"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "104 клавиши"],
        ],
        sizes: [
          ["Ширина", "465 мм"],
          ["Высота", "40 мм"],
          ["Длина", "200 мм"],
          ["Вес", "912 г"],
        ],
        overview:
          "Перед Вами уникальная игровая клавиатура A4Tech Bloody B328, которая оборудована большим количеством исключительных опций, которые необходимы геймерам во время игры. Представленное устройство оборудовано опцией сверхбыстрого отклика, благодаря чему персонажи, управляемые Вами в игре, будут максимально быстро исполнять Ваши приказы. Модель оснащена 8 прорезиненными клавишами, что обеспечивает максимально комфортные условиях для пальцев рук в условиях многочасовых игровых сессий.Отличительной особенностью клавиатуры A4Tech Bloody B328 является особенный влагоустойчивый корпус. Для того, чтобы клавиатура была устойчива в процессе ожесточенных боевых баталий во время игры, не двигалась с места, она имеет увеличенный вес по сравнению с обыкновенными клавиатурами. Также конструкция агрегата предусматривает наличие подставки для рук. Покрытие корпуса – матовое. За счет этого прикасаться к клавиатуре особенно приятно, так же на ней не остается следов от пальцев. Длина сетевого кабеля – 1.8 м.",
      },
      {
        title: "SteelSeries Apex 100",
        price: 3499,
        rating: 4.4,
        manufacturer: "SteelSeries",
        keys: 104,
        wireless: false,
        viewable: true,
        discount: 15,
        type: "membranous",
        id: 36,
        eligibleIds: [
          `1000-4000price`,
          `SteelSeriesKbs`,
          `wiredKbs`,
          `71-105keys`,
          ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/SteelSeriesApex100.webp",
          "/kbs/SteelSeriesApex1002.webp",
          "/kbs/SteelSeriesApex1003.webp",
        ],
        mainChars: [
          ["Модель", "SteelSeries Apex 100"],
          ["Производитель", "SteelSeries"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "104 клавиши"],
        ],
        sizes: [
          ["Ширина", "460 мм"],
          ["Высота", "25 мм"],
          ["Длина", "153 мм"],
          ["Вес", "1100 г"],
        ],
        overview:
          "Клавиатура SteelSeries APEX 100 позиционируется как удобное игровое оборудование, но универсальность этой модели позволяет продуктивно использовать ее и в рабочих целях. Выполненная в строгом черном цвете проводная клавиатура оснащена бесшумными в работе клавишами и эффектной синей подсветкой, которая дает возможность играть или работать в темном помещении. В общей сложности эта модель, снабженная размещенным в правой части цифровым блоком, получила 104 клавиши.Полноразмерная игровая клавиатура SteelSeries APEX 100 подключается к ПК привычным способом: для этого используется двухметровый кабель с разъемом USB на конце. Использованный для изготовления корпуса клавиатуры пластик черного цвета имеет приятную на ощупь, немного шероховатую поверхность. Клавиатура ориентирована на широкий круг пользователей, включая любителей видеоигр, и предлагает весь необходимый пользователю ПК функционал.",
      },
      {
        title: "SteelSeries Apex 3",
        price: 6499,
        rating: 4.4,
        manufacturer: "SteelSeries",
        keys: 106,
        wireless: false,
        viewable: true,
        discount: null,
        type: "membranous",
        id: 37,
        eligibleIds: [
          `4001-7000price`,
          `SteelSeriesKbs`,
          `wiredKbs`,
          `>105keys`,
          ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/SteelSeriesApex3.webp",
          "/kbs/SteelSeriesApex32.webp",
          "/kbs/SteelSeriesApex33.webp",
        ],
        mainChars: [
          ["Модель", "SteelSeries Apex 3"],
          ["Производитель", "SteelSeries"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "106 клавиш"],
        ],
        sizes: [
          ["Ширина", "444.7 мм"],
          ["Высота", "39.7 мм"],
          ["Длина", "151.6 мм"],
          ["Вес", "816 г"],
        ],
        overview:
          "Клавиатура Steelseries Apex 3 – удобная и яркая игровая модель с черным корпусом и RGB-подсветкой. Мембранная конструкция оснащена 106-ю клавишами, включая отдельный цифровой блок, программируемые и две дополнительные кнопки для управления подсветкой и мультимедиа. Комфортной эксплуатации способствует наличие бесшумной работы, не раздражающей окружающих.Классическое устройство Steelseries Apex 3 оснащено прочным пластиковым корпусом с эффективной защитой от брызг и попадания воды внутрь механизма. Также конструкция дополнена удобной подставкой для рук. Клавиатура подключается при помощи кабеля с USB-портом, а потому не отключится в самый разгар игры из-за севшего аккумулятора. Прибор весит 816 г и обладает размерами 44.47x3.969x15.162 см.",
      },
      {
        title: "Razer BlackWidow V3 Pro",
        price: 16999,
        rating: 2.9,
        manufacturer: "Razer",
        keys: 107,
        wireless: true,
        viewable: true,
        discount: 15,
        type: "mechanic",
        id: 38,
        eligibleIds: [
          `>10000price`,
          `RazerKbs`,
          `wirelesswiredKbs`,
          `>105keys`,
          // ">4rating",
          "mechanicKbs",
        ],
        images: [
          "/kbs/RazerBlackWidowV3Pro.webp",
          "/kbs/RazerBlackWidowV3Pro2.webp",
          "/kbs/RazerBlackWidowV3Pro3.webp",
        ],
        mainChars: [
          ["Модель", "Razer BlackWidow V3 Pro"],
          ["Производитель", "Razer"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "механическая"],
          ["Тип подключения", "беспроводная/проводная"],
          ["Общее количество клавиш", "107 клавиш"],
        ],
        sizes: [
          ["Ширина", "479 мм"],
          ["Высота", "260 мм"],
          ["Глубина", "58 мм"],
          ["Вес", "1375 г"],
        ],
        overview:
          "Клавиатура проводная, беспроводная Razer BlackWidow V3 Pro может «похвастаться» наличием подставки под запястья, обеспечивающей максимум удобства в процессе ее эксплуатации. Особенностью аксессуара является функция N-Key Rollover, распознающая нажатие сразу на несколько клавиш. При сражении в игровых баталиях или выполнении важных задач в темное время суток как нельзя кстати придется мощная подсветка.Еще одно достоинство Razer BlackWidow V3 Pro – многофункциональном колесико, обеспечивающее легкое управление аксессуаром. Матовое покрытие исключит возможность появления следов от пальцев и различных загрязнений на поверхности клавиатуры. С программируемыми клавишами у вас появится мгновенный доступ к наиболее используемым командам. Дополнительные кнопки в верхней части корпуса незаменимы для управления проигрываемыми треками.",
      },
      {
        title: "Razer Cynosa V2",
        price: 3999,
        rating: 4.3 ,
        manufacturer: "Razer",
        keys: 110,
        wireless: false,
        viewable: true,
        discount: null,
        type: "membranous",
        id: 39,
        eligibleIds: [
          `1000-4000price`,
          `RazerKbs`,
          `wiredKbs`,
          `>105keys`,
          ">4rating",
          "membranousKbs",
        ],
        images: [
          "/kbs/RazerCynosaV2.webp",
          "/kbs/RazerCynosaV22.webp",
          "/kbs/RazerCynosaV23.webp",
        ],
        mainChars: [
          ["Модель", "Razer Cynosa V2"],
          ["Производитель", "Razer"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "мембранная"],
          ["Тип подключения", "проводная"],
          ["Общее количество клавиш", "110 клавиш"],
        ],
        sizes: [
          ["Ширина", "464 мм"],
          ["Высота", "31 мм"],
          ["Длина", "168 мм"],
          ["Вес", "850 г"],
        ],
        overview:
          "Клавиатура Razer Cynosa V2 с проводным подключением отлично подходит для самых долгих и экспрессивных игровых сетов. Модель с частотой опроса 1000 Гц состоит из 110 клавиш с мембранным механизмом нажатия. Среди них предусмотрено 6 дополнительных кнопок для управления мультимедиа, а также программируемые. Все клавиши обладают бесшумным ходом и многоцветной подсветкой.Классическая полноразмерная модель в пластиковом корпусе защищена от проливания влаги. Это обозначает, что опрокинутая чашка кофе или минеральной воды не принесут ей никакого вреда. Также клавиатура Razer Cynosa V2 оснащена функцией anti-ghosting, предотвращающей фиктивные нажатия.",
      },
      {
        title: "ASUS ROG Falchion",
        price: 16999,
        rating: 4.5 ,
        manufacturer: "Asus",
        keys: 68,
        wireless: true,
        viewable: true,
        discount: 5,
        type: "mechanic",
        id: 40,
        eligibleIds: [
          `>10000price`,
          `AsusKbs`,
          `wirelesswiredKbs`,
          `<71keys`,
          ">4rating",
          "mechanicKbs",
        ],
        images: [
          "/kbs/ASUSROGFalchion.webp",
          "/kbs/ASUSROGFalchion2.webp",
          "/kbs/ASUSROGFalchion3.webp",
        ],
        mainChars: [
          ["Модель", "ASUS ROG Falchion"],
          ["Производитель", "Asus"],
          ["Страна", "Китай"],
          ["Гарантия", "24 мес."],
        ],
        specificChars: [
          ["Тип клавиатуры", "механическая"],
          ["Тип подключения", "беспроводная/проводная"],
          ["Общее количество клавиш", "68 клавиш"],
        ],
        sizes: [
          ["Ширина", "305 мм"],
          ["Высота", "38.5 мм"],
          ["Длина", "101 мм"],
          ["Вес", "520 г"],
        ],
        overview:
          "Клавиатура беспроводная, проводная ASUS ROG Falchion [90MP01Y0-BKRA01] обеспечит беспрецедентную точность при введении данных, ведь ее основу составили переключатели Cherry MX, которые выдерживают до нескольких миллионов нажатий. Автономную работу аксессуара на протяжении 450 часов гарантирует мощный аккумулятор. Кроме того, возможно подключение устройства посредством соответствующего USB-разъема.В процессе создания корпуса клавиатуры беспроводной, проводной ASUS ROG Falchion [90MP01Y0-BKRA01] производитель задействовал износоустойчивый пластик, которому не свойственно накапливание загрязнений и появление частиц пыли. Мощная RGB-подсветка призвана создать дополнительное удобство при использовании аксессуара при слабом освещении. Это устройство относится к механическому типу, который отличает масса весомых достоинств – высокий срок службы, возможность доступа к командам посредством сочетания нескольких клавиш и легкость при очистке от накопившихся загрязнений.",
      },
    ];

    for(let pr of data){
      
      const response = await fetch("./api/hello", {
        method: "POST",
        body: JSON.stringify(pr),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(pr)
    }


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
