import React,{createRef} from 'react';
import Nav from '../nav/nav';
import Logo from '../logo/logo';
import {FullScreen} from './style.js';


const NavBar = ({timeline}) => {
    const navBarRef = React.createRef();
    const getNavBar = ()=>{
        return navBarRef
    }
    return(
        <FullScreen ref={navBarRef}>
            <Nav getParentRef={getNavBar} timeline={timeline}/>
            <Logo/>
        </FullScreen>
    )
}




export default NavBar;