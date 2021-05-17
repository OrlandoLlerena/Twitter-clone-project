import React from "react";
import "./App.scss";
import Sidebar from "../src/Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widget/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
