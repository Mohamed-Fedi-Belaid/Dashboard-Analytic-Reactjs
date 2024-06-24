import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

export const data = [
  ["Department", "Revenues Change"],
  ["Shoes", { v: 12, f: "12.0%" }],
  ["Sports", { v: -7.3, f: "-7.3%" }],
  ["Toys", { v: 0, f: "0%" }],
  ["Electronics", { v: -2.1, f: "-2.1%" }],
  ["Food", { v: 22, f: "22.0%" }],
];

const options = {
  allowHtml: true,
  showRowNumber: true,
};

export function Table1({dataCAGR}) {
  const [listVar, setListVar] = useState([]);

  useEffect(() => {
    if (dataCAGR) {
      const newListVar = [];
      for (let i = 0; i < dataCAGR.length; i++) {
        console.log(dataCAGR[i]);
        newListVar.push([
            dataCAGR[i].nom,
            {v: dataCAGR[i].CAGR, f:dataCAGR[i].CAGR.toString()} ,
        ]);
      }

      setListVar(newListVar);
    }
  }, [dataCAGR]);

  const data = [["Catégories", "CAGR"], ...listVar];

  const options = {
    allowHtml: true,
    showRowNumber: true,
  };
  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
