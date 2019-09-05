import React from 'react';
import HomeLeftText from '../homeLeftText/homeLeftText';
import HomeRight from '../homeRight/homeRight';
import {Wrapper} from './style';


const InfoRight = (props) => (
    <Wrapper>
        <HomeLeftText href={props.href} text={props.text} btnText={props.btnText} textSecondary={props.textSecondary}/>
        <HomeRight img={props.img}/>
    </Wrapper>
)


export default InfoRight;