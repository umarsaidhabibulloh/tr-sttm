import React, { Component } from "react";

class Feature extends Component {
  state = {};
  render() {
    const { detailfitur } = this.props;
    return (
      <div style={{ padding: "12px" }}>
        <div>Nomor Fitur: {detailfitur.nomor}</div>
        <div>Nama Fitur: {detailfitur.nama}</div>
      </div>
    );
  }
}

export default Feature;
