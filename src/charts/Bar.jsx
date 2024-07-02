import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
export const options = {
  chart: {
    title: "Nombre d'article vendu par saison",
    
  },
};

export function Bar({ dataNbArticleVenduParSaison = [] } ) {

    const [listVar, setListVar] = useState([]);

    useEffect(() => {
      if (dataNbArticleVenduParSaison) {
        const newListVar = [];
        for (let i = 0; i < dataNbArticleVenduParSaison.length; i++) {
          console.log(dataNbArticleVenduParSaison[i]);
            
          newListVar.push([
            dataNbArticleVenduParSaison[i].season,
            dataNbArticleVenduParSaison[i].number_of_products
            
        
            
          ]);
        }
        console.log(newListVar)
        setListVar(newListVar);
      }
    }, [dataNbArticleVenduParSaison]);
  
    const data = [
    
        ["Year", "ventes"],
        ...listVar
        
      ];

    return (
    <Chart
      chartType="Bar"
      width="97%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
