import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
export const data = [
  [
    "Day",
    "Nombre de commande",
    
  ],
  [1, 1 ],
  [2, 1 ],
  [3, 3],
  [4, 3],
  [5, 4],
  [6, 1],
  [7, 1],
  [8, 2],
  [9, 1],
  [10, 1],
  [11, 2],
  [12, 7],
  [13, 1],
  [14, 2],
  [15, 4],
  [16, 14],
  [17, 3],
  [18, 1],
  [19, 3],
  [20, 1],
  [21, 2],
  [22, 1],
  [23, 2],
  [24, 2],

  
];

export const options = {
  chart: {
<<<<<<< HEAD
    title: "Evolution des commandes au cours du temps",
=======
    title: "Evolution des commande au cours du temps",
>>>>>>> d49360550675342ad915ae6e07a60f4f395f76bd
    
  },
};

export function LineChart({ dataCommandeCountByDayForLast3Years = [] }) {

  const [listVar, setListVar] = useState([]);

    useEffect(() => {
      if (dataCommandeCountByDayForLast3Years) {
        const newListVar = [];
        for (let i = 0; i < dataCommandeCountByDayForLast3Years.length; i++) {
          console.log(dataCommandeCountByDayForLast3Years[i]);
            
          newListVar.push([
            dataCommandeCountByDayForLast3Years[i].day,
            dataCommandeCountByDayForLast3Years[i].commandeCount
            
        
            
          ]);
        }
        console.log(newListVar)
        setListVar(newListVar);
      }
    }, [dataCommandeCountByDayForLast3Years]);
  
    const data = [
    
<<<<<<< HEAD
        ["Year", ""],
=======
        ["Year", "ventes"],
>>>>>>> d49360550675342ad915ae6e07a60f4f395f76bd
        ...listVar
        
      ];

  return (
    <Chart
      chartType="Line"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
