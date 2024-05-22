import React, { useEffect, useRef } from 'react';


import tunisiaGeoJSON from './tunisia.json'; // Assurez-vous que ce chemin est correct

const TunisiaMap = () => {




  
  return (
    <div>
     
     
     
    
        <h1>HTML5/Javascript Country Map</h1>
        
        <div id="map"></div>
        <script type="text/javascript" src="../charts/countrymap.js"></script>		
        <script  type="text/javascript" src="../charts/mapdata.js"></script>
    
    </div>
  );
};

export default TunisiaMap;