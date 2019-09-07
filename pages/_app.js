import React, { useState } from 'react';
import App, { Container } from 'next/app';
import NavBar from '../components/navbar/navbar';
const GSAP = require('gsap');
const { TimelineLite } = GSAP;
import Head from 'next/head';
import Router from 'next/router';
import MorphTransition from 'nextjs-morph-page';

export default class MyApp extends App {
	constructor(props) {
		super(props);
		this.state = {
			navOpen: false,
			timeline: TimelineLite,
			firstOpen:false
		};
	}

	static async getInitialProps({ Component, Router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<MorphTransition timeout={300} classNames="morph">
					<div>
					<NavBar />
						<Component {...pageProps}/>	
					</div>
					
				</MorphTransition>
				<style jsx global>{`
					body,
					html {
						font-family: 'Work Sans', sans-serif;
						margin: 0;
						padding: 0;
						height: 100%;
					}
					body {
						width: 95%;
						margin-left: auto;
						margin-right: auto;
					}
					p,
					h1,
					h2,
					a,
					li {
						color: #525252;
					}
					.morph.enter {
						opacity: 0;
					}
					.morph.enter.active {
						opacity: 1;
						transition: opacity 300ms;
					}
					.morph.exit {
						opacity: 1;
					}
					.morph.exit.active {
						opacity: 0;
						transition: opacity 300ms;
					}
				`}</style>
			</Container>
		);
	}
}

