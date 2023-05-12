import { data } from "autoprefixer";
import React from "react";

export default function Office({ data }) {
  const list = [];

  data.forEach((item, index) => {
    list.push(
      <div key={index}>
        <div>Name: {item.name}</div>
        <div>Age: {item.age}</div>
      </div>
    );
  });

  return list;
}
