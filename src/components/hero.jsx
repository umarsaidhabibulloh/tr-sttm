import React, { Component } from "react";

const herodata = {
  namaproduk: "BAKSO MASBRE",
  tagline: "Pokoknya Enak POL",
};

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="section hero">
        <div>
          <div className="name-container">
            <label className="name-label">{herodata.namaproduk}</label>
          </div>
          <div className="subname-container">
            <label className="tagline">{herodata.tagline}</label>
          </div>
          <div className="button-container">
            <button className="hero-button">PESAN DISINI</button>
          </div>
        </div>

        {/* <div>Video, Nama, Diskon, Produk Pilihan</div> */}
      </div>
    );
  }
}

export default Hero;
