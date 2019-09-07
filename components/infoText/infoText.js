import React from 'react';
import {AboutText} from './style.js';


const InfoText = ({infoText}) => {
    return(
        <div>
            <AboutText>{infoText}</AboutText>
        </div>
    )
}



export default InfoText;