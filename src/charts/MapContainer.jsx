import React from 'react';

const MapContainer = () => {
  
 

  return (
    <div>
      <h1>HTML5/Javascript Country Map</h1>
      <div id="map" style={{ height: '500px', width: '100%' }} />
      { (
        <>
          <p>
            This map was created and can be edited at{' '}
            
          </p>
          <p>
            To remove the "Simplemaps.com Trial" text,{' '}
        purchase a map license Then, register
            your license at the link above (Options  Register Purchase). Or, simply replace the
            countrymap.js file in this folder (trial version) with the countrymap.js file that
            you are emailed (full version).
          </p>
          <p>To learn how to install this map on your web page, see the{' '}
      
          </p>
        </>
      ) }
    </div>
  );
};

export default MapContainer;
