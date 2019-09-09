import styled,{keyframes} from 'styled-components';
import { Map } from 'react-leaflet-universal';




export const MapWrapper = styled(Map)`
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
