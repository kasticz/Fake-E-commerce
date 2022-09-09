import "./styles.sass";
import Nav from "../components/UI/Nav";
import SearchPanel from "../components/UI/SearchPanel";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import {CookiesProvider} from 'react-cookie'
import Footer from '../components/Footer'
import { useDispatch } from "react-redux";
import { UIActions } from "../store/UISlice";



function MyApp({ Component, pageProps }) {

  
  

  return (
    <CookiesProvider>
    <Provider store={store}>
      <Nav/>
      <SearchPanel/>
        <Component {...pageProps} />
        <Footer/>
    </Provider>
    </CookiesProvider>
  );
}

export default MyApp;


