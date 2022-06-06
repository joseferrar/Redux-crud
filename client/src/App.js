import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import TestComponent from "./components/TestComponent";

function App() {
console.log(process.env)

  return (
    <Provider store={store}>
      <div className="App">
        <TestComponent/>
      </div>
    </Provider>
  );
}

export default App;
