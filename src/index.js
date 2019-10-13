import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store, actions } from "./store";

import { Container } from "./Container";
import { Hello } from "./Hello";

import "./styles.css";

const App_ = props => {
  const handleActions = value => {
    actions.BUTTON_CLICK(value);
  };

  const helloProps = {
    handleActions,
    addition0: "You may type.",
    addition1:
      "If it the same OR you have typed less than 5 characters, I do not rerender.",
    addition2: "Else you will see your input above",
    val: props.reduxState.val
  };

  return (
    <div className="App">
      <h1>
        <Hello {...helloProps}>Hello Redux</Hello>
      </h1>
      <h2 />
    </div>
  );
};

const App = Container(App_);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
