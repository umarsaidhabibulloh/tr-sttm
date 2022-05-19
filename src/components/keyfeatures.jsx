import React, { Component } from "react";
import Feature from "./features/feature";

const featuredata = [
  {
    nama: "Rasanya Enak",
    tagline: "Rasa Bintang Lima",
    deskripsi: [
      { icon: "kitchen", desc: "Diuji oleh Chef Juna" },
      { icon: "book", desc: "Resep nenek moyang" },
    ],
  },
  {
    nama: "Bentuknya Unik",
    tagline: "Baso Bulat Sempurna",
    deskripsi: [{ icon: "circle", desc: "Dicetak oleh Sailormoon" }],
  },
];

class KeyFeatures extends Component {
  state = {};
  render() {
    return (
      <div className="section p-2" style={{ paddingLeft: "20px" }}>
        <div className="flex flex-wrap">
          {featuredata.map((fitur) => (
            <div className="p-2">
              <Feature data={fitur} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default KeyFeatures;
