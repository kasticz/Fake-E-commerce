import "./styles.sass";
import Nav from "../components/UI/Nav";
import SearchPanel from "../components/UI/SearchPanel";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Nav/>
      <SearchPanel/>
        <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;


