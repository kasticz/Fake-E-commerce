import "./styles.sass";
import Nav from "../components/UI/Nav";
import SearchPanel from "../components/UI/SearchPanel";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import {CookiesProvider} from 'react-cookie'
import Footer from '../components/Footer'
import Burger from "../components/UI/mobile/Burger";
import Head from "next/head";



function MyApp({ Component, pageProps }) {

  
  

  return (
    <CookiesProvider>
    <Provider store={store}>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Интернет-магазин игровых товаров</title>
      </Head>
      <Nav/>
      <SearchPanel/>
        <Component {...pageProps} />
        <Burger/>
        <Footer/>
    </Provider>
    </CookiesProvider>
  );
}

export default MyApp;


