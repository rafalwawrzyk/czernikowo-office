import React from 'react'
import Button from '../button/button'
import Subheader from '../subheader/subheader'
import {Wrapper,
    TextSecondary} from './style'

const homeLeftText = (props) => (
    <Wrapper>
        <Subheader text={props.text}/>
            <TextSecondary>{props.textSecondary}</TextSecondary>
        <Button btnText={props.btnText} href={props.href}/>
    </Wrapper>
)


export default homeLeftText;