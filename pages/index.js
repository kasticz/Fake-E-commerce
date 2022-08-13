import Discounts from "../components/discounts/Discounts";
import Nav from "../components/UI/Nav";
import { Fragment, useEffect, useState } from "react";
import SearchPanel from "../components/UI/SearchPanel";
import Categories from "../components/categories/Categories";
import getImages from "../store/getImages";


export default function Home(props) {
  
  

  console.log(props.images)
  return (
    <Fragment>
      <Nav />
      <SearchPanel />
      <main className="main">
        <div className="container">
          <Discounts />
          <Categories />
        </div>
      </main>
    </Fragment>
  );
}


