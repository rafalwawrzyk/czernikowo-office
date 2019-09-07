import React from 'react'
import {
    HeroWrapper,
HeroWrapperPage,
HeroImage
} from './style'



 const Hero = ({homeImage=false,img}) => {
    return(
        <>
        {homeImage ? 
            <HeroWrapper> 
            <HeroImage src={img}></HeroImage>
            </HeroWrapper>
        :
            <HeroWrapperPage>
                <HeroImage src={img} ></HeroImage>
            </HeroWrapperPage>
    
        }
        </>
    )
}


export default Hero;