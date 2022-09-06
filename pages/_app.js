import "./styles.sass";
import Nav from "../components/UI/Nav";
import SearchPanel from "../components/UI/SearchPanel";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import {CookiesProvider} from 'react-cookie'

function MyApp({ Component, pageProps }) {

  

  return (
    <CookiesProvider>
    <Provider store={store}>
      <Nav/>
      <SearchPanel/>
        <Component {...pageProps} />
    </Provider>
    </CookiesProvider>
  );
}

export default MyApp;


