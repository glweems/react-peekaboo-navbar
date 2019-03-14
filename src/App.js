import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";

const navlinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" }
];
export default class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100rem" }}>
        <Navbar brand={{ name: "peekaboo", to: "home" }} links={navlinks} />
        <div className="container" />
      </div>
    );
  }
}
