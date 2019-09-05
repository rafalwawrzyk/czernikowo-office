import React from 'react';
import HomeLeftText from '../homeLeftText/homeLeftText';
import HomeRight from '../homeRight/homeRight';
import {Wrapper} from './style.js';




const InfoLeft = (props) => (
    <Wrapper>
        <HomeRight img={props.img}/>
        <HomeLeftText href={props.href} text={props.text} btnText={props.btnText} textSecondary={props.textSecondary}/>
    </Wrapper>
)


export default InfoLeft;