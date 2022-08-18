import "./styles.sass";
import Nav from "../components/UI/Nav";
import SearchPanel from "../components/UI/SearchPanel";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav/>
      <SearchPanel/>
        <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;


