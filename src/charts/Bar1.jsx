import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
export const options = {
  chart: {
    title: "Répartition des articles par catégorie",
    subtitle: "Nombre d'article vendu et total des ventes",
    
  },
};

export function Bar1({ dataRepartitionArticleParCategorie = [] } ) {

    const [listVar, setListVar] = useState([]);

    useEffect(() => {
      if (dataRepartitionArticleParCategorie) {
        const newListVar = [];
        for (let i = 0; i < dataRepartitionArticleParCategorie.length; i++) {
          console.log(dataRepartitionArticleParCategorie[i]);
            
          newListVar.push([
            dataRepartitionArticleParCategorie[i].category_name,
            dataRepartitionArticleParCategorie[i].article_count,
            dataRepartitionArticleParCategorie[i].total_price
            
        
            
          ]);
        }
        console.log(newListVar)
        setListVar(newListVar);
      }
    }, [dataRepartitionArticleParCategorie]);
  
    const data = [
    
        ["Nom de Catégorie", "Nombre d'article vendu","Total des ventes"],
        ...listVar
        
      ];

    return (
    <Chart
      chartType="Bar"
      width="1000px"
      height="400px"
      data={data}
      options={options}
    />
  );
}
