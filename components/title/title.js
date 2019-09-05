import React from 'react'
import {HeaderButton,
	Spacer,
	PageTitle,
	SubpageTitle,
	TextColored} from './style'
import Button from '../button/button'


const Title = ({homeTitle=false,...props}) => {
    return(
        <div>
            {homeTitle ? 
            <PageTitle>
                <span>{props.titlePartOne}</span>
                {homeTitle ? <Spacer/> : null}
                <TextColored> {props.titleColored}</TextColored>
                <br/>
                {props.titleRest} 
                
            </PageTitle> : 
            <SubpageTitle>
                <span>{props.titlePartOne}</span>
                {homeTitle ? <br/> : null}
                <TextColored> {props.titleColored}</TextColored>
                <br/>
                {props.titleRest} 
            </SubpageTitle>}
            {/* <h1 className={homeTitle ? css.pageTitle : css.subpageTitle} >
                <span>{props.titlePartOne}</span>
                {homeTitle ? <br/> : null}
                <TextColored> {props.titleColored}</TextColored>
                <br/>
                {props.titleRest} 
            </h1> */}
            {homeTitle ? <HeaderButton>
                <Button btnText="Sprawdź ofertę" bigger={true} href="/uslugi"/>
            </HeaderButton> : null}
        </div>
    )
}


export default Title;