import Document, { Head, Main, NextScript } from 'next/document';
import NavBar from '../components/navbar/navbar'
// import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat:400,900|Work+Sans:300&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
						integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
						crossorigin=""
					/>
					{/* <script
						src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
						integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
						crossorigin=""
					/> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
