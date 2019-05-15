import React from "react";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>TODO</h1>
        {routes}
      </div>
    </div>
  );
}

export default App;
