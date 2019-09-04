import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import css from './styles.scss';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Router from 'next/router';
import styled, {keyframes} from 'styled-components'


const Navigation = styled.nav`
		width: 100%;
	position: relative;
	height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 200;
	background-color:#fff;
	border-bottom:1px solid #FF6734;
	@media screen and (min-width:900px) {
		position: static;
		height: 100%;
		display: flex;
		align-items: center;
		border-bottom:none;
	}
`

const NavList = styled.div`
	width: 100%;
	/* height: 100vh; */
	text-align: center;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	opacity: 0;
	ul{
		margin-left:auto;
		margin-right:auto;
	}
	@media screen and (min-width:900px) {
		opacity: 1 !important;
		visibility:visible !important;
		top: 0;
		transform: none;
		position: static;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		ul{
			margin-left:0;
			margin-right:0;
		}
	}
	ul {
		list-style-type: none;
    padding: 0;
    width: 400px;
		@media screen and (min-width:900px) {
      display: flex;
      justify-content: space-between;
		}
		li {
			width: 100%;
			@media screen and (min-width:900px) {
				left: 0;
				width: auto;
        position: relative;
        text-align: center;
				
			}
		}
	}
`

const Hamburger = styled.div`
	width: 30px;
	height: 45px;
	display: flex;
	position: relative;
	margin-left: 10px;
	z-index: 300;
	@media screen and (min-width:900px) {
		display: none;
	}
`

const Line = styled.div`
		height: 2px;
	background-color: #ff6734;
	width: 100%;
	position: absolute;
	transform: translate(-50%, -50%);
`

const Line1 = styled(Line)`
		top: 30%;
		left: 50%;
`

const Line2 = styled(Line)`
		top: 50%;
		left: 50%;
`

const Line3 = styled(Line)`
		top: 70%;
		left: 50%;
`

const Linked = styled.li`
		text-decoration: none;
	position: relative;
	left: -500px;
`
const AnimeLines = keyframes`
	from{
    opacity:0;
    transform:translateY(-10px)
  }
  to{
    opacity:1;
    transform:translateY(0px)
  }
`

const AnimeLines2 = keyframes`
	from{
    opacity:0;
    transform:translateY(10px)
  }
  to{
    opacity:1;
    transform:translateY(0px)
  }
`

const NavItem = styled.a`
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
	width: 100%;
	display: block;
	padding: 10px 0;
	font-size: 30px;
	-webkit-backface-visibility: hidden;

	@media screen and (min-width:900px) {
		padding: none;
		color: #525252;
		font-size: 16px;
		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 2px;
			background-color: #ff6734;
			top: 0;
			opacity: 0;
			position: absolute
		}

		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 2px;
			background-color: #ff6734;
			bottom: 0;
			opacity: 0;
			position: absolute;
		}

		&:hover {
			cursor:pointer;
			&::after {
				animation-name: ${AnimeLines};
				animation-duration: 300ms;
				animation-timing-function: ease-in-out;
				animation-fill-mode: both;
			}
			&::before {
				animation-name: ${AnimeLines2};
				animation-duration: 300ms;
				animation-timing-function: ease-in-out;
				animation-fill-mode: both;
			}
		}
	}
`

// const handleRouteChange = url => {
//   console.log('App is changing to: ', url)
// }

// Router.events.on('routeChangeStart', handleRouteChange)

const navElems = [
	{
		name: 'Strona Główna',
		href: '/',
		refs: 'glowna'
	},
	{
		name: 'O nas',
		href: '/onas',
		refs: 'onas'
	},
	{
		name: 'Usługi',
		href: '/uslugi',
		refs: 'uslugi'
	},
	{
		name: 'Kontakt',
		href: '/kontakt',
		refs: 'kontakt'
	}
];

const Nav = (props) => {
	// refs
	let link = React.createRef('link');
	let line = React.createRef('line');
	let backgroundNav = React.createRef();
	let ulRef = React.createRef('ulRef');
	const router = useRouter();


	// array with refs
	let links = [];
	let lines = [];
	let fnRun = null;
	const getParentRef = props.getParentRef().current;

	// lifecycle method
	useEffect(() => {
		const GSAP = require('gsap');
		const { TimelineLite, Power3 } = GSAP;
		const tl = new TimelineLite({ paused: true, reversed: true });
		console.log('jest nav');
		// gsap animation

		fnRun = tl
			.to(lines[1], 0.1, { scale: 0 })
			.to(lines[0], 0.1, { top: '50%' })
			.to(lines[2], 0.1, { top: '50%' })
			.to(lines[0], 0.1, { rotation: '45deg' })
			.to(lines[2], 0.1, { rotation: '-45deg' })
			.to([ lines[0], lines[2] ], 0.2, { visibility: 'hidden' })
			.to(backgroundNav.current, 0.1, { height: '100%', backgroundColor: '#FF6734' })
			.to(ulRef.current, 0.1, { autoAlpha: 1 })
			.to([ lines[0], lines[2] ], 0.1, { backgroundColor: '#fff', visibility: 'visible' })
			.to([ links[0], links[1], links[2], links[3] ], 0.1, { x: 500 });
		// .staggerFrom(links, 0.1,{ x:-250,ease: Power3.easeOut},0.01)


	});

	const sizeCheck = () => {
		if (window.matchMedia('(max-width:900px)').matches) {
			return true;
		}
		return false;
	};

	// run or reverse gsap animation
	const hamburgerAction = () => {
    if(sizeCheck()){
      fnRun.reversed() ? fnRun.play() : fnRun.reverse();
      console.log(links);
      console.log(lines[0]);
    }else{
      console.log('nie włączam animaciji')
    }

	};

	const hamburgerLinkAction = (e, newHref) => {
		e.preventDefault();
		hamburgerAction();
		const href = newHref;
		const as = href;
		Router.push(href, as, { shallow: true });
	};

	return (
		<Navigation ref={backgroundNav}>
			<Hamburger onClick={() => hamburgerAction()}>
				<Line1
					ref={(line) => {
						lines.push(line);
					}}
				/>
				<Line2
					ref={(line) => {
						lines.push(line);
					}}
				/>
				<Line3
					ref={(line) => {
						lines.push(line);
					}}
				/>
			</Hamburger>
			<NavList ref={ulRef}>
				<ul>
					{Object.keys(navElems).map((elem, i) => {
						return (
							<Linked
								key={i}
								ref={(link) => {
									links.push(link);
								}}
							>
								<Link href={navElems[elem]['href']}>
									<NavItem
										onClick={(e) => hamburgerLinkAction(e, navElems[elem]['href'])}
									>
										{navElems[elem]['name']}
									</NavItem>
								</Link>
							</Linked>
						);
					})}
				</ul>
			</NavList>
		</Navigation>
	);
};

export default Nav;
