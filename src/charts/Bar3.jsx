import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
export const options = {
  chart: {
    
    title: " Total des ventes par catégorie",
    
  },
};

export function Bar3({ dataRepartitionArticleParCategorie = [] } ) {

    const [listVar, setListVar] = useState([]);

    useEffect(() => {
      if (dataRepartitionArticleParCategorie) {
        const newListVar = [];
        for (let i = 0; i < dataRepartitionArticleParCategorie.length; i++) {
          console.log(dataRepartitionArticleParCategorie[i]);
            
          newListVar.push([
            dataRepartitionArticleParCategorie[i].category_name,
            
            dataRepartitionArticleParCategorie[i].total_price
            
        
            
          ]);
        }
        console.log(newListVar)
        setListVar(newListVar);
      }
    }, [dataRepartitionArticleParCategorie]);
  
    const data = [
    
        ["Nom de Catégorie","Total des ventes"],
        ...listVar
        
      ];

    return (
    <Chart
      chartType="Bar"
      width="1100px"
      height="400px"
      data={data}
      options={options}
    />
  );
}
