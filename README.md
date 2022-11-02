Суть приложения: Пример сайта на тему интернет-торговли игровыми девайсами.

Использовано: 
HTML
SASS
JavaScript
React
Next.js
MongoDB
Redux + Redux Toolkit
Firebase REST API + Firebase Authentication

Реализованные основные особенности:
1) База данных товаров состоит из 4 категорий(мыши, клавиатуры, мониторы, коврики) по 20 экземпляров в каждом и хранится в MongoDB.

2) На странице каждой категории реализована фильтрация по: a) рейтингу b) цене c) производителю d) дополнительным параметрам(свои для каждой категории). Также по некоторым параметрам присутствует сортировка.

3) У каждого товара есть своя отдельная страница, где перечислены все характеристики товара, его изображения и аналоги.

4) Есть корзина, где можно менять количество товара и удалять его. Также оттуда можно перейти к форме оформления заказа.
 При пустой корзине приложение покажет случайный из 80 товаров и предложит либо перейти на его страницу, либо сразу добавить в корзину.

5) Реализован текстовый поиск товаров на верхней панели.

6) Использованы основные особенности Next.js: a) бОльшая часть HTTP запросов отправляется через бэкенд. b) использование getStaticProps, getStaticPaths для прегенерации основных страниц. c) использование next router для навигации по страницам приложения, query параметры для сортировки.

7) Реализована система авторизации через Firebase REST API, все логины и пароли хранятся в базе данных firebase(не используйте реальные данные при регистрации).
 При регистрации и повторной авторизации в cookie-файлах сохраняются refresh token и acess token пользователя.
 Благодаря этому пользователю не придётся принудительно авторизоваться заново: приложение произведёт "тихую авторизацию" используя эти токены.
 Я знаю, что хранить эти токены таким образом небезопасно, но из-за нехватки знаний в бэкенде сделал так.

8) Динамическое обновление корзины авторизованного пользователя - последнее состояние корзины через HTTP запрос отправляется в базу данных firebase, и при обновлении страницы достаётся от туда же.

9) БОльшая часть интерфейсной логики приложения осуществляется при помощи Redux Toolkit (фильтрация товаров, все взаимодействия с корзиной, модальные окна и т.д.)

10) Приложение полностью адаптировано для всех экранов шириной от 320 px до 1920 px. Адаптация сделана как через уменьшение размеров элементов, изменение верстки, так и через добавление новых элементов("бургер") и скрытие старых.
 При изменении ширины экрана необходимо обновить страницу, чтобы страница полностью адаптировалась.

Характеристики товаров и их изображения были взяты с официального сайта DNS(https://www.dns-shop.ru/).
















This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
