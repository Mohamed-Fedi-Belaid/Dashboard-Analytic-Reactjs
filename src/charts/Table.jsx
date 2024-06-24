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

export function Table({dataSommeVenteParUser}) {
  const [listVar, setListVar] = useState([]);

  useEffect(() => {
    if (dataSommeVenteParUser) {
      const newListVar = [];
      for (let i = 0; i < dataSommeVenteParUser.length; i++) {
        console.log(dataSommeVenteParUser[i]);
        newListVar.push([
            dataSommeVenteParUser[i].user,
            {v: dataSommeVenteParUser[i].Total, f:dataSommeVenteParUser[i].Total.toString()} ,
        ]);
      }

      setListVar(newListVar);
    }
  }, [dataSommeVenteParUser]);

  const data = [["Meilleur Commercant", "Somme des ventes"], ...listVar];

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
