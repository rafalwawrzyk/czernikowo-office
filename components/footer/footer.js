import React from 'react'
import css from './footer.scss'
import ReactSVG from 'react-svg'
import footerImg from '../../static/undraw_best_place_r685.svg'
import styled from 'styled-components'

const FooterBg = styled(ReactSVG)`
    width: 100%;
    margin-top: 50px;
    svg{
        width: 100%;
        height: 300px;
    }
`



const Footer = (props) => (
    <FooterBg src={footerImg} className={css.footerBg}/>
)



export default Footer;