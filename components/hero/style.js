import styled from 'styled-components';
import ReactSVG from 'react-svg';




export const HeroWrapper = styled.div`
    margin-bottom: 50px;
     max-width: 830px;
     max-height: 585px;
     margin-left: auto;
     margin-right: auto;
     :first-child{
         width: 100%;
         height: 100%;
     }
     @media screen and (min-width:900px){
         max-width: 500px;
         max-height: 450px;
         margin-left: auto;
         right: 0;
         top: 50%;
 }
       @media screen and (min-width:1000px){
          max-width: 620px;
          top:330px;
       }
       @media screen and (min-width:1100px){
          top: 360px;
       }
       @media screen and (min-width:1300px){
          max-width: 620px;
          top: 350px;
          position: absolute;

       }
       @media screen and (min-width:1400px){
         max-width: 650px;
          top: 300px;
       }
       @media screen and (min-width:1600px){
          top: 360px;
       }
       @media screen and (min-width:1920px){
          max-width: 850px;
          top: 340px;
          margin-bottom:250px;
     }
`

export const HeroWrapperPage = styled(HeroWrapper)`
    padding: 30px 0;
   @media screen and (min-width:900px){
     position: static;
 }
`
export const HeroImage = styled(ReactSVG)`
    width:100%;
     height:100%;
     svg{
         height:100%;
         width: 100%;
     }
`