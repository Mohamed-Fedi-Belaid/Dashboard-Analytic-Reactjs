import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Catégorie", "2010 Population", "2000 Population"],
  ["Agroalimentaire", 8175000, 8008000],
  ["High-Tech", 3792000, 3694000],
  ["Santé et Beauté", 2695000, 2896000],
  ["Récharge Téléphonique", 2099000, 1953000],
  ["Jeux et Jouets", 1526000, 1517000],
  ["Fourniture scolaire et Bureautique", 1526000, 1517000],
];

export const options = {
  chart: {
    title: "Nombre de vente par catégorie",
    subtitle: "Based on most recent and previous census data",
  },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  bars: "horizontal",
  axes: {
    y: {
      0: { side: "right" },
    },
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
