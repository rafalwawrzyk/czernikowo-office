import React from 'react'
import {
    HeroWrapper,
HeroWrapperPage,
HeroImage
} from './style'



 const Hero = ({homeImage=false,...props}) => {
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
}


export default Hero;