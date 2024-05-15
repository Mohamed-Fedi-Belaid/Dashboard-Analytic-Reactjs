import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const TunisiaMap = () => {
  const geoUrl = "/geo/tunisia.json"; // Chemin relatif vers le fichier GeoJSON local

  const data = [
    { total: 460.25, ville: 'Ben Arous', lat: 36.7333, lng: 10.1833 },
    { total: 1980, ville: 'Bizerte', lat: 37.2667, lng: 9.85 },
    { total: 1134.95, ville: 'Jendouba', lat: 36.4833, lng: 8.75 },
    { total: 3902.5, ville: 'Kasserine', lat: 35.1667, lng: 8.8333 },
    { total: 250, ville: 'Kef', lat: 36.1667, lng: 8.7333 },
    { total: 142.47, ville: 'Mahdia', lat: 35.5167, lng: 11.0667 },
    { total: 287.03, ville: 'Monastir', lat: 35.7667, lng: 10.8 },
    { total: 357.75, ville: 'Nabeul', lat: 36.45, lng: 10.75 },
    { total: 223, ville: 'Siliana', lat: 35.9, lng: 9.3667 },
    { total: 603.25, ville: 'Sousse', lat: 35.8, lng: 10.6 },
    { total: 1365.8, ville: 'Tunis', lat: 36.8, lng: 10.1667 },
  ];

  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#D6D6DA"
              stroke="#FFFFFF"
            />
          ))
        }
      </Geographies>
      {data.map((d, i) => (
        <Marker key={i} coordinates={[d.lng, d.lat]}>
          <circle r={8} fill="#F00" />
          <text textAnchor="middle" y={15} style={{ fontSize: 10, fill: "#5D5A6D" }}>
            {d.ville}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default TunisiaMap;
