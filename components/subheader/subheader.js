import React from 'react';
import css from './styles.scss'
import styled from 'styled-components'


const SubheaderTitle = styled.h2`
    font-size:16px;
    text-align: center;
    @media screen and (min-width:400px){
        font-size:1.1rem;
    }
    @media screen and (min-width:550px){
        font-size:20px;
    }
    @media screen and (min-width:650px){
        font-size:27px;
    }
    @media screen and (min-width:900px){
        text-align: left;
    }
`

const SubheaderCentered = styled.h2`
    text-align:center;
`
// .subheaderCentered{
//     text-align: center;
// }

    const SubheaderSpan = styled.span`
        color:#FF6734;
    `

const Subheader = ({subheaderCentered=false,...props}) => {
    const splittedText = props.text.split(" ");
    const lastWord = splittedText[splittedText.length -1];
    const normalText = splittedText.slice(0,-1).join(" ");

    return(
        <>
            {subheaderCentered ? 
                    <SubheaderCentered>
                        {normalText} <SubheaderSpan> {lastWord}</SubheaderSpan>
                    </SubheaderCentered> 
                    : 
                    <SubheaderTitle>
                        {normalText} <SubheaderSpan> {lastWord}</SubheaderSpan>
                    </SubheaderTitle> 
        }
        </>
        // <SubheaderTitle>
        //     {normalText} <SubheaderSpan> {lastWord}</SubheaderSpan>
        // </SubheaderTitle>
        // <h2 className={subheaderCentered ? css.subheaderCentered :null}>{normalText} <span className={ css.subheaderSpan}> {lastWord}</span></h2>
    )
}


export default Subheader;