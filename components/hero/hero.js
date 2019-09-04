import React from 'react'
import styled from 'styled-components';
import css from './styles.scss'
import ReactSVG from 'react-svg'


const HeroWrapper = styled.div`
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

const HeroWrapperPage = styled(HeroWrapper)`
    padding: 30px 0;
   @media screen and (min-width:900px){
     position: static;
 }
`
const HeroImage = styled(ReactSVG)`
    width:100%;
     height:100%;
     svg{
         height:100%;
         width: 100%;
     }
`


// .heroWrapper{
//     margin-bottom: 50px;
//     max-width: 830px;
//     max-height: 585px;
//     margin-left: auto;
//     margin-right: auto;
//     :first-child{
//         width: 100%;
//         height: 100%;
//     }
//     @media screen and (min-width:900px){
//         max-width: 500px;
//         max-height: 450px;
//         margin-left: auto;
//         position: absolute;
//         right: 0;
//         top: 50%;
// }
//       @media screen and (min-width:1000px){
//         // max-width: 620px;
//       }
//       @media screen and (min-width:1100px){
//         // top: 240px;
//       }
//       @media screen and (min-width:1300px){
//         // max-width: 620px;
//         // top: 240px;
//       }
//       @media screen and (min-width:1400px){
//         max-width: 650px;
//         // top: 300px;
//       }
//       @media screen and (min-width:1600px){
//         // top: 360px;
//       }
//       @media screen and (min-width:1920px){
//         // max-width: 850px;
//         // top: 340px;
//     }
// }


// .heroWrapperPage{
//   @extend .heroWrapper;
//   padding: 30px 0;
//   @media screen and (min-width:900px){
//     position: static;
// }
// }

// .heroImage{
//     width:100%;
//     height:100%;
//     svg{
//         height:100%;
//         width: 100%;
//     }
   
// }



 const Hero = ({homeImage=false,...props}) => {
    //  <div className={homeImage ? css.heroWrapper : css.heroWrapperPage}>
    //      <ReactSVG src={props.img} className={css.heroImage}/>
    //  </div>
    return(
        <>
        {homeImage ? 
            <HeroWrapper> 
            <HeroImage src={props.img}></HeroImage>
            </HeroWrapper>
        :
            <HeroWrapperPage>
                <HeroImage src={props.img} ></HeroImage>
            </HeroWrapperPage>
    
        }
        </>
    )

    // <HeroWrapper>
    //     <HeroImage src={props.img} ></HeroImage>
    // </HeroWrapper>
}


export default Hero;