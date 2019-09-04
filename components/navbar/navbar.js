import React,{createRef} from 'react'
import Nav from '../nav/nav'
import Logo from '../logo/logo'
import css from './styles.scss'
import styled from 'styled-components'

const NavWrapper = styled.div`
     display:flex;
  justify-content:space-between;
  @media screen and (min-width:900px) {
    position: absolute;
    height: 100px;
    width: 95%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    z-index: 300;
    }
`

const FullScreen = styled(NavWrapper)`
    margin-bottom: 30px;
`

const NavBar = (props) => {
    const navBarRef = React.createRef();
    const getNavBar = ()=>{
        return navBarRef
    }
    return(
        <FullScreen ref={navBarRef}>
            <Nav getParentRef={getNavBar} timeline={props.timeline}/>
            <Logo/>
        </FullScreen>
    )
}




export default NavBar;