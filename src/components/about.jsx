import React, { Component } from "react";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="section description">
        <div className="title-container">
          <label>BAKSO MASBRE</label>
        </div>
        <div className="desc-container">
          <div className="desc-col">Deskripsi Kolom 1</div>
          <div className="desc-col">Deskripsi Kolom 2</div>
        </div>
      </div>
    );
  }
}

export default About;
