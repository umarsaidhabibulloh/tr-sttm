import React, { Component } from "react";

// const data = {
//   icon: "",
//   nama: "Menyehatkan",
//   tagline: "Sehat itu mahal",
//   deskripsi: [
//     { icon: "forest", desc: "Terbuat dari Bahan Alami" },
//     { icon: "spa", desc: "Tanpa bahan pengawet" },
//     { icon: "feedback", desc: "Bergizi tinggi" },
//   ],
//      image:""
// };

class Feature extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="aspect-[3/4] bg-white w-72 rounded-lg relative shadow-gray-600 shadow-xl hover:scale-110 transform duration-500">
        <div className="h-full">
          <div
            className="h-56 flex items-end bg-red-600 bg-opacity-20 rounded-t-lg text-gray-90 bg-center bg-cover bg-blend-lighten"
            style={{ backgroundImage: `url("assets/img/masbre.png")` }}
          >
            <div className="p-4 text-left flex flex-wrap w-full">
              <div className="w-full flex justify-end">
                <label className="text-2xl font-bold">
                  {data ? data.nama : null}
                </label>
              </div>
              <div className="w-full flex justify-end">
                <label className="italic">{data ? data.tagline : null}</label>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap pl-4 pr-4 pt-8 space-y-2">
            {data
              ? data.deskripsi.map((kucing) => (
                  <div className="w-full text-left flex items-center">
                    <span className="material-icons">{kucing.icon}</span>&nbsp;
                    <label>{kucing.desc}</label>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
