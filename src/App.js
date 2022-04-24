import React, { useEffect, useState } from "react";

import useFetch from "./useFetch";
import style from "./components/MsgBody.syle.css";
const App = () => {
  const { data, error, loading, dataElement } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const loadingMsg = <h1>Data is loading!!!Please Wait!</h1>;

  return (
    <div>
      <div className="intro_appJs">
        <h1>
          Fething Data From{" "}
          <a href="https://jsonplaceholder.typicode.com/posts">This!!</a>
        </h1>
      </div>
      {error && <p> 404 !! Invalid !! Error</p>}
      {loading && <h1>Hello</h1>}
      {dataElement}
      <div>{loading && loadingMsg}</div>
    </div>
  );
};

export default App;
