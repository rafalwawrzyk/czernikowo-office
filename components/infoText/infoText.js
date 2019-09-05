import React from 'react';
import {AboutText} from './style.js';


const InfoText = (props) => {
    return(
        <div>
            <AboutText>{props.infoText}</AboutText>
        </div>
    )
}



export default InfoText;