import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
export const options = {
  chart: {
    title: "Nombre d'articles vendus par mois",
    
    
  },
};

export function Bar2({ dataSommeVenteParMois = [] } ) {

    const [listVar, setListVar] = useState([]);

    useEffect(() => {
      if (dataSommeVenteParMois) {
        const newListVar = [];
        for (let i = 0; i < dataSommeVenteParMois.length; i++) {
          console.log(dataSommeVenteParMois[i]);
            
          newListVar.push([
            dataSommeVenteParMois[i].mois,
            dataSommeVenteParMois[i].somme,
            
        
            
          ]);
        }
        console.log(newListVar)
        setListVar(newListVar);
      }
    }, [dataSommeVenteParMois]);
  
    const data = [
    
        ["Mois", ""],
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
