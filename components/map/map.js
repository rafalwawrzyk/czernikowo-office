import React from 'react';
import {
  MapWrapper
} from './style.js';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';



const MapLeaflet =() =>  {
  const googleMapsUrl = 'https://www.google.com/maps/dir//Murszewska+Beata.+Us%C5%82ugi+ksi%C4%99gowe,+Le%C5%9Bna+1,+87-640+Czernikowo/@52.9441299,18.9271625,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471cc7a13ea0bc6b:0xd3b8e5bfe21b6eaa!2m2!1d18.9293512!2d52.9441299!3e0'
  const position = [52.944304, 18.929330]
  const redirectFn = (url) => {
    let win = window.open(url,'_blank');
    win.focus()
  }
  return(
    <>
          <MapWrapper
          center={position}
          zoom={16}
        >
          <TileLayer
            attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
          />
          <Marker 
          position={position} 
          onClick={() => redirectFn(googleMapsUrl)}
          onMouseOver={e => {
            e.target.openPopup();
          }}
          onMouseOut={e => {
            e.target.closePopup();
          }}
          >
          <Popup>Kliknij aby przejść do nawigacji</Popup>
          </Marker>
        </MapWrapper>
    </> 
  ) 
}

export default MapLeaflet;
