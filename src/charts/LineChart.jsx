import React from "react";
import { Chart } from "react-google-charts";

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
    title: "Evolution des commande au cours du 30 derniers jours",
    
  },
};

export function LineChart() {
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
