import React from 'react';
import Link from 'next/link';
import {LogoImage} from './style.js';


const Logo = () => (
    <LogoImage>
        <Link href="/">
            <img src="/static/logo.png" alt="logo-czernikowo"/>
        </Link>
    </LogoImage>
)


export default Logo;