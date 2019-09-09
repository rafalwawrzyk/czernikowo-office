import styled,{keyframes} from 'styled-components';


export const loadingRollerAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`


export const LoadingRoller = styled.div `
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