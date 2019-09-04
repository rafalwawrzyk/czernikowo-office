import React from 'react'
import css from './styles.scss'
import styled from 'styled-components'


const SpacerSect = styled.div`
     width: 10px;
    height: 10px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    background-color: #ff6734;
    margin:0 auto;
`

const Spacer = () => {
    return(
        <SpacerSect className={css.spacer}></SpacerSect>
    )
}


export default Spacer;