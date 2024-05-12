import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/*  App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
