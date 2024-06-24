import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Période",
    { type: "date", label: "Taux de conversion" },
    
  ],
  [
    "Mike",
    new Date(2008, 1, 28, 0, 31, 26),
    
  ],
  [
    "Bob",
    new Date(2007, 5, 1, 0),
  
  ],
  [
    "Alice",
    new Date(2006, 7, 16),
  
  ],
];

export const options = {
  showRowNumber: true,
};



export function TableTauxConversion() {
  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
      
    />
  );
}
