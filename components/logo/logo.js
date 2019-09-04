import React from 'react'
import Link from 'next/link'
import css from './styles.scss'
import styled from 'styled-components'

const LogoImage = styled.div`
     width: 40px;
     height: 40px;
     position: fixed;
     top:5px;
     right:5px;
     z-index:300;
     @media screen and (min-width:900px){
         width: 50px;
         height: 50px;
         top:auto;
         right:0;
     }
     img{
         position:absolute;
         top:0;
         width:100%;
         height:100%;
     }
`

const Logo = () => (
    <LogoImage>
        <Link href="/">
            <img src="/static/logo.png" alt="logo-czernikowo"/>
        </Link>
    </LogoImage>
)


export default Logo;