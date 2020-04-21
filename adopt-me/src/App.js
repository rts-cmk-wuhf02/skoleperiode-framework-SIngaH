import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import regeneratorRuntime from "regenerator-runtime";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
