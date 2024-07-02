import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


export function ColumnChart({ dataNbVenteParCategorie = [] }) {
  const [listVar, setListVar] = useState([]);

  useEffect(() => {
    if (dataNbVenteParCategorie) {
      const newListVar = [];
      for (let i = 0; i < dataNbVenteParCategorie.length; i++) {
        console.log(dataNbVenteParCategorie[i]);
        newListVar.push([
          dataNbVenteParCategorie[i].nom,
          dataNbVenteParCategorie[i].SommeVente,
          "",
        ]);
      }
      console.log(newListVar)
      setListVar(newListVar);
    }
  }, [dataNbVenteParCategorie]);

  const data = [["Element", "Nombre de vente par catégorie", { role: "style" }], ...listVar];
  const options = {
    bar: { groupWidth: "80%" },
  };

  return (
    dataNbVenteParCategorie && <Chart
      chartType="ColumnChart"
      width="1000px"
      height="300px"
      data={data}
      options={options}
    />
  );
}