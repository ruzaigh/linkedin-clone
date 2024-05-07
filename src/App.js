import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/*  App Body */}
      <div className="app__body">
        <Sidebar />
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
