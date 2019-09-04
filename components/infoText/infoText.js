import React from 'react'
import css from './styles.scss'
import styled from 'styled-components'


const AboutText = styled.p`
    text-align: center;
    font-size: 16px;
`


const InfoText = (props) => {
    return(
        <div>
            <AboutText>{props.infoText}</AboutText>
        </div>
    )
}



export default InfoText;