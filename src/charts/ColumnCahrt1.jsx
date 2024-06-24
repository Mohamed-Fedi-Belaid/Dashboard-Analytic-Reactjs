import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";



export function ColumnChart1({ dataRepartitionArticleParSousCategorie = [] }) {
  const [listVar, setListVar] = useState([]);

  useEffect(() => {
    if (dataRepartitionArticleParSousCategorie) {
      const newListVar = [];
      for (let i = 0; i < dataRepartitionArticleParSousCategorie.length; i++) {
        console.log(dataRepartitionArticleParSousCategorie[i]);
        newListVar.push([
           
            dataRepartitionArticleParSousCategorie[i].nom,
            dataRepartitionArticleParSousCategorie[i].sum,
          "#ff907a",
        ]);
      }
      console.log(newListVar)
      setListVar(newListVar);
    }
  }, [dataRepartitionArticleParSousCategorie]);

  const data = [["Element", "Nombre de vente", { role: "style" }], ...listVar];
  const options = {
    title:"Répartition des articles par sous catégorie",
    bar: { groupWidth: "100%" },
  };

  return (
    dataRepartitionArticleParSousCategorie && <Chart
      chartType="ColumnChart"
      width="600px"
      height="300px"
      data={data}
      options={options}
    />
  );
}