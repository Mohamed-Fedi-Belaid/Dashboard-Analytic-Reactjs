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
          "",
        ]);
      }
      console.log(newListVar);
      setListVar(newListVar);
    }
  }, [dataRepartitionArticleParSousCategorie]);

  const data = [["Element", "Nombre de vente", { role: "style" }], ...listVar];
  const options = {
    title: "Répartition des articles par sous catégorie",
    bar: { groupWidth: "100%" },
    titleTextStyle: {
      fontSize: 18, // Change this to your desired font size
    },
    hAxis: {
      textStyle: {
        fontSize: 12, // Change this to your desired font size
      },
    },
    vAxis: {
      textStyle: {
        fontSize: 12, // Change this to your desired font size
      },
    },
  };

  return (
<<<<<<< HEAD
    dataRepartitionArticleParSousCategorie && (
      <div style={{ width: "98.5%" }}>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    )
=======
    dataRepartitionArticleParSousCategorie && <Chart
      chartType="ColumnChart"
      width="1000px"
      height="300px"
      data={data}
      options={options}
    />
>>>>>>> d49360550675342ad915ae6e07a60f4f395f76bd
  );
}
