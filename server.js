const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const nodemailer = require('nodemailer');

// evironment variables
require('dotenv').config();

// const main = require('./mailer')

app.prepare().then(() => {
	const server = express();

	server.use(bodyParser.json());

	server.post('/api/contact', (req, res) => {
		const { email = '', name = '', message = '' } = req.body;

		async function main() {
			// Generate test SMTP service account from ethereal.email
			// Only needed if you don't have a real mail account for testing
			let testAccount = await nodemailer.createTestAccount();

			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				service: 'Gmail',
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: process.env.EMAIL_ADDRESS, // generated ethereal user
					pass: process.env.PASSWORD // generated ethereal password
				}
			});

			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: email, // sender address
				to: 'czernikowostrona@gmail.com', // list of receivers
				subject: `Nowa wiadomość od ${name}`, // Subject line
				text: message // plain text body
			});

			console.log('Message sent: %s', info.messageId);
			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		}

		main().catch(console.error);
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, (err) => {
		if (err) throw err;
		console.log('> Read on http://localhost:3000');
	});
});
