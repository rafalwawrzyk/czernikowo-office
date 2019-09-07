import React from 'react'
import Button from '../button/button'
import Subheader from '../subheader/subheader'
import {Wrapper,
    TextSecondary} from './style'

const homeLeftText = ({text,textSecondary,btnText,href}) => (
    <Wrapper>
        <Subheader text={text}/>
            <TextSecondary>{textSecondary}</TextSecondary>
        <Button btnText={btnText} href={href}/>
    </Wrapper>
)


export default homeLeftText;