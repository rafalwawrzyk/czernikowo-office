import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { Navigation, NavList, Hamburger, Line1, Line2, Line3, Linked, NavItem } from './style';

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

const Nav = () => {
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

	// lifecycle method
	useEffect(() => {
		const GSAP = require('gsap');
		const { TimelineLite, Power3 } = GSAP;
		const tl = new TimelineLite({ paused: true, reversed: true });
		// gsap animation

		fnRun = tl
			.to(lines[1], 0.1, { scale: 0 })
			.to(lines[0], 0.1, { top: '50%' })
			.to(lines[2], 0.1, { top: '50%' })
			.to(lines[0], 0.1, { rotation: '45deg' })
			.to(lines[2], 0.1, { rotation: '-45deg' })
			.to([ lines[0], lines[2] ], 0.2, { visibility: 'hidden' })
			.to(backgroundNav.current, 0.1, { height: '100%', backgroundColor: '#FF6734' })
			.to(ulRef.current, 0.1, { autoAlpha: 1,display:'block' })
			.to([ lines[0], lines[2] ], 0.1, { backgroundColor: '#fff', visibility: 'visible' });
	});

	const sizeCheck = () => {
		if (window.matchMedia('(max-width:900px)').matches) {
			return true;
		}
		return false;
	};

	// run or reverse gsap animation
	const hamburgerAction = () => {
		if (sizeCheck()) {
			fnRun.reversed() ? fnRun.play() : fnRun.reverse();
			console.log(links);
			console.log(lines[0]);
		} else {
			console.log('nie włączam animaciji');
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
									<NavItem onClick={(e) => hamburgerLinkAction(e, navElems[elem]['href'])}>
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
