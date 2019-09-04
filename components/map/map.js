import React, { useEffect,useState } from 'react';
import css from './styles.scss'
import Head from 'next/head'
import styled,{keyframes} from 'styled-components'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';






const loadingRollerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`


const MapWrapper = styled(Map)`
  width:100%;
  height:300px;
  margin-bottom: 50px;
  z-index:1;
  img{
    width:100%;
  }
  @media screen and (min-width: 900px) {
    margin-bottom: 0;
    width: 50%;
  }
`
const LoadingRoller = styled.div `
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
   left: 50%;
  transform: translateX(-50%);
  div {
    animation: ${loadingRollerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;
    -webkit-animation: ${loadingRollerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.loadingRoller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FF6734;
    margin: -3px 0 0 -3px;
  }
  .loadingRoller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .loadingRoller div:nth-child(1):after {
    top: 50px;
    left: 50px;
  }
  .loadingRoller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .loadingRoller div:nth-child(2):after {
    top: 54px;
    left: 45px;
  }
  .loadingRoller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .loadingRoller div:nth-child(3):after {
    top: 57px;
    left: 39px;
  }
  .loadingRoller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .loadingRoller div:nth-child(4):after {
    top: 58px;
    left: 32px;
  }
  .loadingRoller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .loadingRoller div:nth-child(5):after {
    top: 57px;
    left: 25px;
  }
  .loadingRoller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .loadingRoller div:nth-child(6):after {
    top: 54px;
    left: 19px;
  }
  .loadingRoller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .loadingRoller div:nth-child(7):after {
    top: 50px;
    left: 14px;
  }
  .loadingRoller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .loadingRoller div:nth-child(8):after {
    top: 45px;
    left: 10px;
  }
`



const MapLeaflet =() =>  {

  const [mapShowed, setMapShowed] = useState(false)
  const googleMapsUrl = 'https://www.google.com/maps/dir//Murszewska+Beata.+Us%C5%82ugi+ksi%C4%99gowe,+Le%C5%9Bna+1,+87-640+Czernikowo/@52.9441299,18.9271625,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471cc7a13ea0bc6b:0xd3b8e5bfe21b6eaa!2m2!1d18.9293512!2d52.9441299!3e0'
  
  const loader = <LoadingRoller><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></LoadingRoller>
  const position = [52.944304, 18.929330]
  const redirectFn = (url) => {
    let win = window.open(url,'_blank');
    win.focus()
  }
  
  // useEffect(() => {
  //   // create map
  //   console.log('from use effect')
  //   const L = require('leaflet')
  //   const map = L.map('map', {
  //     center: [52.944304, 18.929330],
  //     zoom: 16,
      
  //   });

  //    L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
  //         attribution:
  //           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       }).addTo(map)

  //    const marker = L.marker([52.944304, 18.929330]);
  //    marker.addTo(map)
  //    marker.on('click', () => redirectFn(googleMapsUrl));
  //    marker.bindPopup("Kliknij aby przejść do nawigacji").openPopup();
  //    setMapShowed(true)
  // },[]);



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


// var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
// });
