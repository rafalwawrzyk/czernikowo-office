import styled from 'styled-components'
import ReactSVG from 'react-svg'




export const FooterBg = styled(ReactSVG)`
width: 100%;
margin-top: 50px;
svg{
    width: 100%;
    /* height: 300px; */
    height:auto;
    @media screen and (min-width:700px){
     height:300px;
}
}
`