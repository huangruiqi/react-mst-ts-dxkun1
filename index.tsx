import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { Counter as Root } from "./models/Counter";

import "./style.css";

import { Counter } from "./components/Counter";

const root = Root.create({});

function App() {
  return (
    <Provider root={root}>
      <Counter />
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
