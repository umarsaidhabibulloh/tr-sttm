import React, { Component } from "react";
import About from "./components/about";
import BuyNow from "./components/buynow";
import Hero from "./components/hero";
import KeyFeatures from "./components/keyfeatures";
import "./App.css";
import Feature from "./components/features/feature";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        {/* <Feature /> */}
        <Hero />
        <About />
        <KeyFeatures />
        <BuyNow />
      </div>
    );
  }
}

export default App;
