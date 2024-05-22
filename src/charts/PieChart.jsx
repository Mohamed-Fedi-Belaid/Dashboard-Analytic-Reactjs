import React from "react";
import { Chart } from "react-google-charts";
import  { useEffect, useState } from "react";


export const options = {
  title: "My Daily Activities",
};

export default function PieChart({dataArticleCountByCategory}) {

  const [listVar, setListVar] = useState([]);

  useEffect(() => {
    if (dataArticleCountByCategory) {
      const newListVar = [];
      for (let i = 0; i < dataArticleCountByCategory.length; i++) {
        console.log(dataArticleCountByCategory[i]);
        newListVar.push([
           
          dataArticleCountByCategory[i].category_name,
          dataArticleCountByCategory[i].total_price,
       
        ]);
      }
      console.log(newListVar)
      setListVar(newListVar);
    }
  }, [dataArticleCountByCategory]);

  const data = [["Element",  { role: "style" }], ...listVar];
  const options = {
    title:"Répartition des totale de vente par catégorie",
    bar: { groupWidth: "80%" },
  };










  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
