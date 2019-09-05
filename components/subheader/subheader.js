import React from 'react';
import {SubheaderTitle,
    SubheaderCentered,
    SubheaderSpan} from './style.js';

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