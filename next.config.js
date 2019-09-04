// next.config.js
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

// module.exports = withPlugins([
// 	[
// 		withSass,
// 		{
// 			cssModules: true,
// 			cssLoaderOptions: {
// 				importLoaders: 1,
// 				localIdentName: '[local]___[hash:base64:5]'
// 			}
// 		}
// 	],
// 	withImages
// ]);



module.exports = withImages();

