import { createSlice } from "@reduxjs/toolkit";
import {
  setUpState,
  applyDiscounts,
  reset,
  makeAllUnViewable,
  sortByInputs,
} from "./mousesSlice";

// const inMats = [
//   {
//     title: "Razer Strider",
//     price: 3199,
//     rating: 4.5,
//     manufacturer: "Razer",
//     length: 450,
//     width: 410,
//     covering: "speed + control",
//     viewable: true,
//     discount: 15,
//     id: 61,
//     eligibleIds: [
//       `>1500price`,
//       `RazerMats`,
//       `>400width`,
//       `401-900length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/RazerStrider.webp",
//       "/mats/RazerStrider2.webp",
//       "/mats/RazerStrider3.webp",
//     ],
//     mainChars: [
//       ["Модель", "Razer Strider (L)"],
//       ["Производитель", "Razer"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "450 мм"],
//       ["Ширина", "410 мм"],
//       ["Толщина", "3 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Испытайте сочетание гладких движений и четкого контроля с Razer Strider - гибридным ковриком для мыши, который сочетает в себе гладкость твердой поверхности с гибкостью и портативностью мягких поверхностей. Созданный, чтобы предложить лучшее из обоих миров, единственный выбор, который вам нужно сделать, — это то, как вы хотите выиграть.Создан для оптимального баланса скорости и контроля - с легким скольжением для быстрых движений и высокой тормозной способностью для неизменной точности. Защитная строчка по краям предотвращает истирание, которое может возникнуть в результате интенсивного использования или транспортировки.",
//   },
//   {
//     title: "JETACCESS PANTEON GP-62SS",
//     price: 399,
//     rating: 4.9,
//     manufacturer: "Jet.A",
//     length: 360,
//     width: 280,
//     covering: "speed + control",
//     viewable: true,
//     discount: null,
//     id: 62,
//     eligibleIds: [
//       `300-900price`,
//       `Jet.AMats`,
//       `<300width`,
//       `300-400length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/JETAPANTEON.webp",
//       "/mats/JETAPANTEON2.webp",
//       "/mats/JETAPANTEON3.webp",
//     ],
//     mainChars: [
//       ["Модель", "JETACCESS PANTEON GP-62SS ALIEN PLANET"],
//       ["Производитель", "Jet.A"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "360 мм"],
//       ["Ширина", "280 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Коврик JETACCESS PANTEON GP-62SS ALIEN PLANET украшен эффектным фантастическим пейзажем. Такое покрытие не только упростит работу с мышкой, но и станет стильным дополнением компьютерного стола. Резиновая основа не позволит подложке скользить даже при резких движениях рукой.Изделие JETACCESS PANTEON GP-62SS ALIEN PLANET обладает размерами 36x28 см, достаточными для комфортного расположения мышки. Края коврика качественно прошиты, что защищает его от расслаивания и появления загнутых уголков. Особый верхний слой Speed + Control гарантирует точный и моментальный отклик мыши на команды.",
//   },
//   {
//     title: "DEXP OM-XS Zen Nirvana",
//     price: 299,
//     rating: 3.7,
//     manufacturer: "Dexp",
//     length: 220,
//     width: 180,
//     covering: "speed",
//     viewable: true,
//     discount: null,
//     id: 63,
//     eligibleIds: [
//       `<300price`,
//       `DexpMats`,
//       `<300width`,
//       `<300length`,
//       'speed'
//     //   ">4rating",
//     ],
//     images: [
//       "/mats/DexpOMXSZenNirvana.webp",
//       "/mats/DexpOMXSZenNirvana2.webp",
//       "/mats/DexpOMXSZenNirvana3.webp",
//     ],
//     mainChars: [
//       ["Модель", "DEXP OM-XS Zen Nirvana"],
//       ["Производитель", "Dexp"],
//       ["Страна", "Китай"],
//       ["Гарантия", "6 мес."],
//     ],
//     specificChars: [
//       ["Длина", "220 мм"],
//       ["Ширина", "180 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed"],
//     ],
//     overview:
//       "Коврик DEXP OM-XS Zen Nirvana имеет стильный рисунок, полностью соответствующий названию аксессуара. Модель позволит вам использовать мышь любого типа: оптическую, лазерную или механическую. Компактные размеры коврика (его габариты равны 180x220x3 мм) способствуют удобству его использования в любых ситуациях. Лицевая сторона коврика DEXP OM-XS Zen Nirvana произведена из износостойкой синтетической ткани. При изготовлении подложки была использована пористая резина: практичный и мягкий материал. Высокий коэффициент трения резины способствует отсутствию произвольного скольжения коврика по поверхности. Модель имеет прозрачную упаковку, на которой размещена информация о свойствах и технических характеристиках изделия."
//   },
//   {
//     title: "DEXP GM-S Black Speed",
//     price: 299,
//     rating: 4.3,
//     manufacturer: "Dexp",
//     length: 300,
//     width: 250,
//     covering: "speed",
//     viewable: true,
//     discount: null,
//     id: 64,
//     eligibleIds: [
//       `<300price`,
//       `DexpMats`,
//       `<300width`,
//       `300-400length`,
//       'speed',
//       ">4rating",
//     ],
//     images: [
//       "/mats/DEXPGMSBlackSpeed.webp",
//       "/mats/DEXPGMSBlackSpeed2.webp",
//       "/mats/DEXPGMSBlackSpeed3.webp",
//     ],
//     mainChars: [
//       ["Модель", "DEXP GM-S Black Speed"],
//       ["Производитель", "Dexp"],
//       ["Страна", "Китай"],
//       ["Гарантия", "6 мес."],
//     ],
//     specificChars: [
//       ["Длина", "300 мм"],
//       ["Ширина", "250 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed"],
//     ],
//     overview:
//       "Коврик DEXP GM-S Black Speed является маленьким ковриком, обладающим размерами 300x250x3 мм. Толщина изделия соответствует 3 мм, благодаря чему достигается комфортное управление мышью: аксессуар практически не ощущается под рукой. Выполнен коврик в черном цвете и содержит контрастную надпись, которая служит украшением модели. Аксессуар поставляется в картонной коробке свернутым в рулон.Изготовлен коврик DEXP GM-S Black Speed из прочной ткани, которая обеспечивает уверенное позиционирование мыши. Аксессуар предназначен для использования во время загрузки игровых приложений, поэтому позволяет достичь высокой точности в управлении игровыми процессами. На этом коврике мышь сможет выполнять быстро все действия, поэтому у вас будет больше шансов к победе. Резиновое основание коврика не допускает его скольжения по поверхности, делая его устойчивым даже при слишком интенсивных манипуляциях. Прошитые края обеспечивают долговечность изделия, позволяя вам долгое время пользоваться ковриком."
//   },
//   {
//     title: "JETACCESS PANTEON GP-163AM",
//     price: 499,
//     rating: 4.6,
//     manufacturer: "Jet.A",
//     length: 500,
//     width: 330,
//     covering: "control",
//     viewable: true,
//     discount: 15,
//     id: 65,
//     eligibleIds: [
//       `300-900price`,
//       `Jet.AMats`,
//       `300-400width`,
//       `401-900length`,
//       'control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/JETACCESSPANTEONGP163AMSPACESHINE.webp",
//       "/mats/JETACCESSPANTEONGP163AMSPACESHINE2.webp",
//       "/mats/JETACCESSPANTEONGP163AMSPACESHINE3.webp",
//     ],
//     mainChars: [
//       ["Модель", "JETACCESS PANTEON GP-163AM SPACE SHINE"],
//       ["Производитель", "Jet.A"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "500 мм"],
//       ["Ширина", "330 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "control"],
//     ],
//     overview:
//       "Коврик JETACCESS PANTEON GP-163AM SPACE SHINE дополнен специальным покрытием control, гарантирующим быстрый и точный отклик на команды. Большие размеры 50x33 см позволят разместить на таком коврике мышь вместе с клавиатурой. А резиновая основа не позволит аксессуару скользить.Изделие JETACCESS PANTEON GP-163AM SPACE SHINE дополнено красивым изображением космоса на черном фоне. Все края прошиты прочными нитками. Качественное исполнение аксессуара защищает от появления отслоившихся и скрученных уголков."
//   },
//   {
//     title: "JETACCESS PANTEON GP-48AL",
//     price: 699,
//     rating: 4.6,
//     manufacturer: "Jet.A",
//     length: 800,
//     width: 350,
//     covering: "control",
//     viewable: true,
//     discount: 10,
//     id: 66,
//     eligibleIds: [
//       `300-900price`,
//       `Jet.AMats`,
//       `300-400width`,
//       `401-900length`,
//       'control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/JETACCESSPANTEONGP48ALDARKSIDE.webp",
//       "/mats/JETACCESSPANTEONGP48ALDARKSIDE2.webp",
//       "/mats/JETACCESSPANTEONGP48ALDARKSIDE3.webp",
//     ],
//     mainChars: [
//       ["Модель", "JETACCESS PANTEON GP-48AL DARK SIDE"],
//       ["Производитель", "Jet.A"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "800 мм"],
//       ["Ширина", "350 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "control"],
//     ],
//     overview:
//       "Коврик JETACCESS PANTEON GP-48AL DARK SIDE с изображением светящегося инопланетянина по центру на черном фоне станет интересным украшением компьютерного стола. Огромные размеры 80x35 см позволят разместить на нем мышь вместе с клавиатурой, и такое соседство не будет мешать комфортной работе. А плотная резиновая основа не позволит коврику съезжать с положенного места.Аксессуар JETACCESS PANTEON GP-48AL DARK SIDE оснащен специальным тканевым покрытием, обеспечивающим максимально точный контроль за движениями мыши. Такие коврики особенно ценят любители компьютерных игр, где важна скорость и точность. Края изделия качественно прошиты, что не позволяет верхнему слою закручиваться по углам и быстро изнашиваться."
//   },
//   {
//     title: "Razer Sphex V2",
//     price: 1799,
//     rating: 4.4,
//     manufacturer: "Razer",
//     length: 355,
//     width: 254,
//     covering: "control",
//     viewable: true,
//     discount: 5,
//     id: 67,
//     eligibleIds: [
//       `>1500price`,
//       `RazerMats`,
//       `<300width`,
//       `300-400length`,
//       'control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/RazerSphexV2Regular.webp",
//       "/mats/RazerSphexV2Regular2.webp",
//       "/mats/RazerSphexV2Regular3.webp",
//     ],
//     mainChars: [
//       ["Модель", "Razer Sphex V2 Regular"],
//       ["Производитель", "Razer"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "355 мм"],
//       ["Ширина", "254 мм"],
//       ['Толщина', "0.5 мм"],
//       ["Тип покрытия", "control"],
//     ],
//     overview:
//       "Коврик Razer Sphex V2 Regular, украшенный логотипом производителя на черном фоне и яркими линиями всех цветов радуги, подходит для эксплуатации с лазерной или оптической игровой мышью. Аксессуар имеет средние для игрового коврика размеры: его длина равняется 355 мм, ширина - 254 мм, а толщина равняется всего 0.5 мм. Материалом для его изготовления послужил прочный и стойкий к износу поликарбонат, снабженный нескользящим основанием. Благодаря ему тонкий и легкий коврик уверенно держится на поверхности компьютерного стола. Коврик для игровой компьютерной мыши Razer Sphex V2 Regular позволяет геймеру полностью сосредоточиться на игровом процессе и легко, комфортно перемещать манипулятор. Контроль всех перемещений мыши, скользящей по поверхности коврика, обеспечит любителю шутеров точность стрельбы. Геймер сможет без проблем взять этот привлекательный и компактный аксессуар в поездку, разместив его даже в небольшой компьютерной сумке."
//   },
//   {
//     title: "Razer Goliathus",
//     price: 1500,
//     rating: 4.8,
//     manufacturer: "Razer",
//     length: 920,
//     width: 294,
//     covering: "speed+control",
//     viewable: true,
//     discount: 25,
//     id: 68,
//     eligibleIds: [
//       `901-1500price`,
//       `RazerMats`,
//       `<300width`,
//       `>900length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/RazerGoliathus.webp",
//       "/mats/RazerGoliathus2.webp",
//       "/mats/RazerGoliathus3.webp",
//     ],
//     mainChars: [
//       ["Модель", "Razer Goliathus"],
//       ["Производитель", "Razer"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "920 мм"],
//       ["Ширина", "294 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Коврик Razer Goliathus [RZ02-01072600-R3M1] обладает огромными размерами и может занимать до половины компьютерного стола. Его габариты составляют 92x29.4 см при толщине 3 мм. Резиновое основание изделия препятствует скольжению его по столу, а тканевая основа, наоборот, способствует беспрепятственному скольжению мыши по коврику. С такой маневренностью вы всегда будете на шаг впереди соперников. Кроме практичности и удобства, коврик Razer Goliathus [RZ02-01072600-R3M1] может похвастаться изображением из «Звездных войн», которое делает его еще более привлекательным."
//   },
//   {
//     title: "Razer Gigantus V2",
//     price: 3499,
//     rating: 4.7,
//     manufacturer: "Razer",
//     length: 940,
//     width: 410,
//     covering: "speed+control",
//     viewable: true,
//     discount: 30,
//     id: 69,
//     eligibleIds: [
//       `>1500price`,
//       `RazerMats`,
//       `>400width`,
//       `>900length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/RazerGigantusV2.webp",
//       "/mats/RazerGigantusV22.webp",
//       "/mats/RazerGigantusV23.webp",
//     ],
//     mainChars: [
//       ["Модель", "Razer Gigantus V2 (2XL)"],
//       ["Производитель", "Razer"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "940 мм"],
//       ["Ширина", "410 мм"],
//       ['Толщина', "4 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Коврик Razer Gigantus V2 [RZ02-03330400-R3M1] − удобный аксессуар прямоугольной формы, обладающий размерами 940x410x4 мм. Его толщина 4 мм обеспечивает высокую прочность изделия при сохранении комфорта эксплуатации: коврик будет почти не ощутим для пользователя. Верхнее покрытие по технологии speed + control изготавливается из мягкой и эластичной ткани, которая обладает плотной фактурой. Это способствует легкости и высокой скорости скольжения. При этом, точность скольжения сохраняется.Коврик Razer Gigantus V2 [RZ02-03330400-R3M1] ложится на резиновое основание, которое исключает его смещение даже при интенсивных движениях мышью. Пенный наполнитель, размещенный между тканевым и резиновым покрытиями, позволяет коврику оставаться плоским и ровным на любых поверхностях. Аксессуар будет одинаково эффективен для манипуляторов с любой чувствительностью сенсора."
//   },
//   {
//     title: "A4Tech X7-200MP",
//     price: 399,
//     rating: 4.6,
//     manufacturer: "A4Tech",
//     length: 250,
//     width: 200,
//     covering: "speed",
//     viewable: true,
//     discount: null,
//     id: 70,
//     eligibleIds: [
//       `300-900price`,
//       `A4TechMats`,
//       `<300width`,
//       `<300length`,
//       'speed',
//       ">4rating",
//     ],
//     images: [
//       "/mats/A4TechX7200MP.webp",
//       "/mats/A4TechX7200MP2.webp",
//       "/mats/A4TechX7200MP3.webp",
//     ],
//     mainChars: [
//       ["Модель", "A4Tech X7-200MP"],
//       ["Производитель", "A4Tech"],
//       ["Страна", "Китай"],
//       ["Гарантия", "3 мес."],
//     ],
//     specificChars: [
//       ["Длина", "250 мм"],
//       ["Ширина", "200 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed"],
//     ],
//     overview:
//       "Коврик A4Tech X7-200MP произведен из прочной ткани, а также обладает нескользящей основой, выполненной из хорошей резины. Таким образом, игровой аксессуар удобен в эксплуатации и тактильно приятен. Он дает возможность пользователю качественно контролировать управление мышью, благодаря чему игровой процесс становится более приятным.A4Tech X7-200MP обладает классическим цветовым исполнением – черный, а также украшен фирменным логотипом. Параметры коврика: ширина и длина – 200 мм и 250 мм, толщина достигает 3 мм.Коврик A4Tech X7-200MP – практичный и качественный аксессуар, который выделяется долговечностью."
//   },
//   {
//     title: "JETACCESS PANTEON GP-47AL",
//     price: 1150,
//     rating: 3.6,
//     manufacturer: "Jet.A",
//     length: 800,
//     width: 350,
//     covering: "control",
//     viewable: true,
//     discount: 5,
//     id: 71,
//     eligibleIds: [
//       `901-1500price`,
//       `Jet.AMats`,
//       `300-400width`,
//       `401-900length`,
//       'control',
//     //   ">4rating",
//     ],
//     images: [
//       "/mats/JETACCESSPANTEONGP47AL.webp",
//       "/mats/JETACCESSPANTEONGP47AL2.webp",
//       "/mats/JETACCESSPANTEONGP47AL3.webp",
//     ],
//     mainChars: [
//       ["Модель", "JETACCESS PANTEON GP-47AL GRAFFITI III"],
//       ["Производитель", "Jet.A"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "800 мм"],
//       ["Ширина", "350 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "control"],
//     ],
//     overview:
//       "Профессиональная игровая поверхность JETACCESS Panteon GP-47AL GRAFFITI III имеет тканевое покрытие, изготовленное по технологии ACCURATE, и обладает мягкой и максимально эластичной (плотной) фактурой, что обеспечивает высокую скорость и лёгкость скольжения, при этом в полном объеме сохраняя точность реакции мыши на любые действия пользователя.  Благодаря нескользящему основанию коврик плотно прилегает к столу и не смещается даже при резких движениях.Оверлок мягкой, но прочной синтетической нитью не только помогает сохранить внешний вид коврика, но и добавляет комфорта в использовании, защищая от травмирования руки краем коврика, при длительной игре. Кроме этого, обработка нитью позволяет чувствовать края и не вылетать за пределы коврика в самом напряженном сражении."
//   },
//   {
//     title: "A4Tech X7-300MP",
//     price: 750,
//     rating: 4.1,
//     manufacturer: "Jet.A",
//     length: 437,
//     width: 350,
//     covering: "speed",
//     viewable: true,
//     discount: null,
//     id: 72,
//     eligibleIds: [
//       `300-900price`,
//       `A4TechMats`,
//       `300-400width`,
//       `401-900length`,
//       'speed',
//       ">4rating",
//     ],
//     images: [
//       "/mats/A4TechX7300MP.webp",
//       "/mats/A4TechX7300MP2.webp",
//       "/mats/A4TechX7300MP3.webp",
//     ],
//     mainChars: [
//       ["Модель", "A4Tech X7-300MP"],
//       ["Производитель", "A4Tech"],
//       ["Страна", "Китай"],
//       ["Гарантия", "3 мес."],
//     ],
//     specificChars: [
//       ["Длина", "437 мм"],
//       ["Ширина", "350 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed"],
//     ],
//     overview:
//       "Коврик A4Tech X7-300MP изготовлен из прочной ткани, а материал основания – нескользящая резина, благодаря чему он тактильно приятен и удобен в эксплуатации. Аксессуар позволяет полностью контролировать управление мышью, что достаточно важно в процессе напряженной игры.A4Tech X7-300MP обладает стильным черным цветом, а также имеет фирменный логотип.     Параметры коврика: длина и ширина – 437 мм и 350 мм, толщина равняется 3 мм.A4Tech X7-300MP – качественный и практичный коврик, который порадует долговечностью."
//   },
//   {
//     title: "A4Tech Bloody",
//     price: 1150,
//     rating: 3.7,
//     manufacturer: "A4Tech",
//     length: 430,
//     width: 350,
//     covering: "speed+control",
//     viewable: true,
//     discount: null,
//     id: 73,
//     eligibleIds: [
//       `901-1500price`,
//       `A4TechMats`,
//       `300-400width`,
//       `401-900length`,
//       'speed+control',
//     //   ">4rating",
//     ],
//     images: [
//       "/mats/A4TechBloodyB080.webp",
//       "/mats/A4TechBloodyB0802.webp",
//       "/mats/A4TechBloodyB0803.webp",
//     ],
//     mainChars: [
//       ["Модель", "A4Tech Bloody B-080"],
//       ["Производитель", "A4Tech"],
//       ["Страна", "Китай"],
//       ["Гарантия", "3 мес."],
//     ],
//     specificChars: [
//       ["Длина", "430 мм"],
//       ["Ширина", "350 мм"],
//       ['Толщина', "4 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Коврик A4Tech Bloody B-080 является находкой для любителей компьютерных игр. Площадь A4Tech Bloody B-080 не сковывает движений игрока благодаря большим размерам: 430×350×4 мм. Модель обеспечивает точность движений и свободу действий мыши. Этот коврик изготовлен из качественной ткани с прорезиненной основой, которая не дает скользить. Аксессуар нежный на ощупь, хорошо сцепляется с рабочим столом и обеспечивает обладателю необходимый комфорт во время игры.Классический черный оттенок модели идеально будет сочетаться с любым интерьером. Данный аксессуар– это лучший выбор для тех, кто хочет обладать качественным ковриком, который длительное время сохраняет свой внешний вид и характеристики. Он превзойдет все ожидания пользователя."
//   },
//   {
//     title: "JETACCESS PANTEON GP-39SS",
//     price: 299,
//     rating: 3.0,
//     manufacturer: "Jet.A",
//     length: 360,
//     width: 280,
//     covering: "control",
//     viewable: true,
//     discount: null,
//     id: 74,
//     eligibleIds: [
//       `<300price`,
//       `Jet.AMats`,
//       `<300width`,
//       `300-400length`,
//       'control',
//     //   ">4rating",
//     ],
//     images: [
//       "/mats/JETACCESSPANTEONGP39SSSTALKERZONE.webp",
//       "/mats/JETACCESSPANTEONGP39SSSTALKERZONE2.webp",
//       "/mats/JETACCESSPANTEONGP39SSSTALKERZONE3.webp",
//     ],
//     mainChars: [
//       ["Модель", "JETACCESS PANTEON GP-39SS STALKER ZONE"],
//       ["Производитель", "Jet.A"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "360 мм"],
//       ["Ширина", "280 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "control"],
//     ],
//     overview:
//       "Коврик JETACCESS PANTEON GP-39SS STALKER ZONE дополнен изображением из популярной компьютерной игры. Благодаря профессиональному покрытию верхнего слоя гарантируется быстрый и моментальный отклик на любые команды. Изделие обладает толщиной 3 мм и размерами 36x28 см. Аксессуар JETACCESS PANTEON GP-39SS STALKER ZONE имеет резиновую основу, благодаря которой не скользит даже при резких движениях. Края коврика прочно прошиты, что защищает от неприятного расслаивания и закручивания уголков. Такой игровой аксессуар обеспечит максимум удобства работы с мышкой."
//   },
//   {
//     title: "Razer Goliathus Mobile Stealth",
//     price: 799,
//     rating: 4.5,
//     manufacturer: "Razer",
//     length: 270,
//     width: 215,
//     covering: "speed+control",
//     viewable: true,
//     discount: 10,
//     id: 75,
//     eligibleIds: [
//       `300-900price`,
//       `RazerMats`,
//       `<300width`,
//       `<300length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/RazerGoliathusMobileStealth.webp",
//       "/mats/RazerGoliathusMobileStealth2.webp",
//       "/mats/RazerGoliathusMobileStealth3.webp",
//     ],
//     mainChars: [
//       ["Модель", "Razer Goliathus Mobile Stealth"],
//       ["Производитель", "Razer"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "270 мм"],
//       ["Ширина", "215 мм"],
//       ['Толщина', "1.5 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Коврик Razer Goliathus Mobile Stealth обладает маленькими размерами и выполнен в классическом черном цвете. Несмотря на эти обстоятельства, коврик является игровым и призван не отвлекать геймера от участия в компьютерных баталиях.Верхнее покрытие коврика Razer Goliathus Mobile Stealth выполнено из ткани с мельчайшим плетением, позволяющим двигать курсором по экрану с миллиметровой точностью. Основание сделано из резины, что препятствует скольжению по столу. Толщина коврика составляет 1.5 мм, размеры – 27x21.5 см."
//   },
//   {
//     title: "Razer Goliathus Chroma Quartz",
//     price: 5499,
//     rating: 4.7,
//     manufacturer: "Razer",
//     length: 920,
//     width: 294,
//     covering: "speed+control",
//     viewable: true,
//     discount: 20,
//     id: 76,
//     eligibleIds: [
//       `>1500price`,
//       `RazerMats`,
//       `<300width`,
//       `>900length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/RazerGoliathusChromaQuartz.webp",
//       "/mats/RazerGoliathusChromaQuartz2.webp",
//       "/mats/RazerGoliathusChromaQuartz3.webp",
//     ],
//     mainChars: [
//       ["Модель", "Razer Goliathus Chroma Quartz"],
//       ["Производитель", "Razer"],
//       ["Страна", "Китай"],
//       ["Гарантия", "12 мес."],
//     ],
//     specificChars: [
//       ["Длина", "920 мм"],
//       ["Ширина", "294 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Игровой коврик Razer Goliathus Chroma Quartz с немаркой серой расцветкой и розовыми вставками дополнен RGB-подсветкой с питанием по облегченному кабелю 2.1 м с защитной оплеткой. Вы можете настроить синхронизацию подсветки с другими устройствами. Данная модель дополнена поддержкой Razer Synapse 3 и балансом контроля и скорости.Аксессуар Razer Goliathus Chroma Quartz дополнен специальным креплением для фиксации шнура компьютерной мыши. Тканевая поверхность совместима с любыми типами сенсора и моделями устройств, а прочная резиновая основа не дает коврику скользить по столу. Огромное изделие с размерами 92x29.4 см и толщиной 3 мм позволит разместить на нем клавиатуру вместе с мышкой."
//   },
//   {
//     title: "DEXP GM-XL Black Speed",
//     price: 999,
//     rating: 4.4,
//     manufacturer: "Dexp",
//     length: 900,
//     width: 400,
//     covering: "speed",
//     viewable: true,
//     discount: 10,
//     id: 77,
//     eligibleIds: [
//       `300-900price`,
//       `DexpMats`,
//       `300-400width`,
//       `401-900length`,
//       'speed',
//       ">4rating",
//     ],
//     images: [
//       "/mats/DEXPGMXLBLACKSPEED.webp",
//       "/mats/DEXPGMXLBLACKSPEED2.webp",
//       "/mats/DEXPGMXLBLACKSPEED3.webp",
//     ],
//     mainChars: [
//       ["Модель", "DEXP GM-XL Black Speed"],
//       ["Производитель", "DEXP"],
//       ["Страна", "Китай"],
//       ["Гарантия", "6 мес."],
//     ],
//     specificChars: [
//       ["Длина", "900 мм"],
//       ["Ширина", "400 мм"],
//       ['Толщина', "3 мм"],
//       ["Тип покрытия", "speed"],
//     ],
//     overview:
//       "Коврик DEXP GM-XL Black Speed представляет собой игровой аксессуар, обеспечивающий максимально точное и быстрое позиционирование мыши. Модель предназначена для использования любых типов манипуляторов. Изготовлен коврик из ткани, которая способствует легкому скольжению мыши, при этом, ваша рука не будет сильно скользить, поэтому все движения будут точными.DEXP GM-XL Black Speed является огромным ковриком, размеры которого достигают 900x400x3 мм. Такие размеры изделия позволяют застелить им всю поверхность рабочего стола, чтобы получить больше места для управления мышью. Это позволит снять ограничения и сосредоточиться на игровом процессе. Благодаря резиновому основанию обеспечивается устойчивость коврика: он не будет скользить по поверхности. Долговечность изделия достигается благодаря использованию качественных материалов, а также благодаря прошитым краям: это позволяет коврику сохранить внешний вид надолго. Коврик поставляется в картонной коробке свернутым в рулон."
//   },
//   {
//     title: "HyperX Fury S Speed Edition",
//     price: 1799,
//     rating: 4.8,
//     manufacturer: "HyperX",
//     length: 400,
//     width: 450,
//     covering: "speed",
//     viewable: true,
//     discount: 20,
//     id: 78,
//     eligibleIds: [
//       `901-1500price`,
//       `HyperXMats`,
//       `>400width`,
//       `300-400length`,
//       'speed',
//       ">4rating",
//     ],
//     images: [
//       "/mats/HyperXFurySSpeedEditionProL.webp",
//       "/mats/HyperXFurySSpeedEditionProL2.webp",
//       "/mats/HyperXFurySSpeedEditionProL3.webp",
//     ],
//     mainChars: [
//       ["Модель", "HyperX Fury S Speed Edition Pro L"],
//       ["Производитель", "HyperX"],
//       ["Страна", "Китай"],
//       ["Гарантия", "36 мес."],
//     ],
//     specificChars: [
//       ["Длина", "400 мм"],
//       ["Ширина", "450 мм"],
//       ['Толщина', "4 мм"],
//       ["Тип покрытия", "speed"],
//     ],
//     overview:
//       "Вместе с ковриком HyperX Fury S Speed Edition Pro L вы получите молниеносное перемещение компьютерного манипулятора, необходимое для точного позиционирования геймера и быстрой передачи его команд в многочисленных видеоиграх. Эта модель станет настоящей находкой для профессиональных и начинающих игроков, нуждающихся в надежной и долговечной основе для их компьютерного 'грызуна', способной в точности передать каждое его движение. Выполненный в черном цвете аксессуар украшен красной абстракцией, благодаря которой он придется по вкусу любому геймеру. Коврик HyperX Fury S Speed Edition Pro L имеет большие размеры - 400x450x4 мм (длина, ширина и толщина соответственно), благодаря чему движения компьютерной мыши не будут ограничены его габаритами. Гладкое тканевое покрытие высокого качества гарантирует превосходную скорость перемещения компьютерного 'грызуна', необходимую практически в каждой видеоигре. Прорезиненное основание - гарант недвижимости коврика даже при самых жарких виртуальных баталиях."
//   },
//   {
//     title: "HyperX Fury S Pro XL",
//     price: 2999,
//     rating: 4.3,
//     manufacturer: "HyperX",
//     length: 900,
//     width: 420,
//     covering: "speed+control",
//     viewable: true,
//     discount: null,
//     id: 79,
//     eligibleIds: [
//       `>1500price`,
//       `HyperXMats`,
//       `>400width`,
//       `401-900length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/HyperXFurySProXL.webp",
//       "/mats/HyperXFurySProXL2.webp",
//       "/mats/HyperXFurySProXL3.webp",
//     ],
//     mainChars: [
//       ["Модель", "HyperX Fury S Pro XL"],
//       ["Производитель", "HyperX"],
//       ["Страна", "Китай"],
//       ["Гарантия", "36 мес."],
//     ],
//     specificChars: [
//       ["Длина", "900 мм"],
//       ["Ширина", "420 мм"],
//       ['Толщина', "4 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Коврик HyperX FURY S - аксессуар для увлеченных геймеров, который отличается впечатляющими размерами: его длина составляет 900 мм, ширина - 420 мм, а толщина равняется 4 мм. Украшенный логотипом производителя черный коврик имеет большую площадь и обеспечивает свободное скольжение игровой компьютерной мыши по специальной тканевой поверхности. Основание аксессуара выполнено из резины, поэтому коврик не движется по поверхности компьютерного стола и всегда остается на положенном месте.Внушительная площадь поверхности коврика HyperX FURY S подарит геймеру свободу движения игрового манипулятора и полный контроль над всеми перемещениями курсора. Такую особенность изделия оценят профессиональные игроки в командные онлайн-шутеры, для которых важна точность перемещения мыши. Долговечный игровой коврик, получивший простроченный край, можно свернуть в трубочку для удобства перевозки в сумке для ноутбука или рюкзаке."
//   },
//   {
//     title: "HyperX Fury S (L)",
//     price: 1799,
//     rating: 4.9,
//     manufacturer: "HyperX",
//     length: 450,
//     width: 420,
//     covering: "speed+control",
//     viewable: true,
//     discount: 10,
//     id: 80,
//     eligibleIds: [
//       `>1500price`,
//       `HyperXMats`,
//       `>400width`,
//       `401-900length`,
//       'speed+control',
//       ">4rating",
//     ],
//     images: [
//       "/mats/HyperXFurySL.webp",
//       "/mats/HyperXFurySL2.webp",
//       "/mats/HyperXFurySL3.webp",
//     ],
//     mainChars: [
//       ["Модель", "HyperX Fury S (L)"],
//       ["Производитель", "HyperX"],
//       ["Страна", "Китай"],
//       ["Гарантия", "24 мес."],
//     ],
//     specificChars: [
//       ["Длина", "450 мм"],
//       ["Ширина", "420 мм"],
//       ['Толщина', "4 мм"],
//       ["Тип покрытия", "speed + control"],
//     ],
//     overview:
//       "Коврик HyperX Fury S Pro L [HX-MPFS-L] - это модель, созданная для профессионального гейминга. Конструкция этого аксессуара для компьютерных систем предусматривает неистирающиеся со временем края. Благодаря столько продуманному исполнению тканевая поверхность коврика не отслоится от прорезиненной основы. Приятная на ощупь лицевая сторона изделия гарантирует комфорт при прохождении различных компьютерных игр, а также быстрое и максимально точное перемещение манипулятора. Специальное покрытие коврика позволяет использовать его с оптическими моделями компьютерных мышей. Прорезиненная основа HyperX Fury S Pro L обеспечивает превосходное сцепление аксессуара с поверхностью рабочего стола. Представленная модель выполнена в глубоком черном цвете, ее дизайн также предусматривает красный логотип компании-производителя. Габариты изделия довольно большие и равняются 450x420x4 мм (длина, ширина и толщина соответственно). Комфортной транспортировке коврика способствует возможность его сворачивания в компактный рулон."
//   },
// ];

export const matsSlice = createSlice({
  name: "mats",
  // initialState: inMats,
  initialState: false,
  reducers: {
    setUpState,
    applyDiscounts,
    reset,
    makeAllUnViewable,
    sortByInputs,
  },
});

export function filterMats(payload) {
  const inputs = payload.inputs;
  return (dispatch) => {
    dispatch(matsSlice.actions.makeAllUnViewable());
    dispatch(matsSlice.actions.sortByInputs(inputs));
  };
}

const matsInputs = {
  rating: {
    ">4rating": false,
  },
  price: {
    "<300price": false,
    "300-900price": false,
    "901-1500price": false,
    ">1500price": false,
  },
  length: {
    "<300length": false,
    "300-400length": false,
    "401-900length": false,
    ">900length": false,
  },
  manufacturer: {
    A4Tech: false,
    DexpMats: false,
    "Jet.AMats": false,
    RazerMats: false,
    HyperXMats: false
  },
  width: {
    "<300width": false,
    "300-400width": false,
    ">400width": false,
  },
  covering: {
    control: false,
    speed: false,
    "speed+control": false,
  },
};

export const matsInputsSlice = createSlice({
  name: "matsInputs",
  initialState: matsInputs,
  reducers: {
    addInput(state, payload) {
      state[payload.payload.sortType][payload.payload.value] =
        !state[payload.payload.sortType][payload.payload.value];
    },
    resetInputs(state) {
      state = matsInputs;
      return state;
    },
  },
});

export const matsActions = matsSlice.actions;
export const matsInputsActions = matsInputsSlice.actions;
export default matsSlice;
