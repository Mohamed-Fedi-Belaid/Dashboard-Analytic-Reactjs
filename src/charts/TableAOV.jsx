import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const options = {
  allowHtml: true,
  showRowNumber: true,
};

export const formatters = [
  {
    type: "NumberFormat",
    column: 1,
    options: {},
  },
];

export function TableAOV({ apiUrl }) {
  const [data, setData] = useState([
    ["Période", "AOV"],
    ["01/01/2021 -> 31/12/2021", 0],
    ["01/01/2022 -> 31/12/2022", 0],
    ["01/01/2023 -> 31/12/2023", 0],
    ["01/01/2024 -> 31/12/2024", 0],
  ]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((dataAOV) => {
        const formattedData = [
          ["Période", "AOV"],
          ...dataAOV.map((item) => [`01/01/${item.periode} -> 31/12/${item.periode}`, item.AOV || 0]),
        ];
        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);

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
