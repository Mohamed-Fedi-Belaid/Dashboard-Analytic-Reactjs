import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Période", "Taux de Rétention"],
  ["01/01/2021 -> 31/12/2021", 0],
  ["01/01/2022 -> 31/12/2022", 0],
  ["01/01/2023 -> 31/09/2023", 0],
  ["01/10/2023 -> 31/12/2023 ", 0],
  ["01/01/2024 -> 31/03/2024", 0],
  ["01/04/2024 -> 30/05/2024", 0],  
  
];

export const options = {
  allowHtml: true,
  showRowNumber: true,
};

export const formatters = [
  {
    type: "NumberFormat",
    column: 1,
    options: {
      suffix: "%",
    },
  },
];

export function TableTauxRetention() {
  return (
    <Chart
      chartType="Table"
      width="120%"
     
      height="400px"
      data={data}
      options={options}
      formatters={formatters}
    />
  );
}

