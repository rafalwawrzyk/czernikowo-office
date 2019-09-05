import ReactSVG from 'react-svg';
import styled from 'styled-components';


export const RightImage = styled(ReactSVG)`
    width:50%;
    height:100%;
    display: none;
    @media screen and (min-width:900px){
        display: block;
    }
    svg{
        height:100%;
        width: 100%;
    }
`