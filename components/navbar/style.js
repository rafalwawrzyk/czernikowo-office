import styled from 'styled-components'

export const NavWrapper = styled.div`
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

export const FullScreen = styled(NavWrapper)`
    margin-bottom: 30px;
`