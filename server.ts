const next = require('next')
const express = require('express')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const devProxy = {
	'/en-us': {
		target: 'https://playoverwatch.com/',
		changeOrigin: true,
	},
}
app
	.prepare()
	.then(() => {
		const server = express()

		// Set up the proxy.
		if (dev && devProxy) {
			const proxyMiddleware = require('http-proxy-middleware')
			Object.keys(devProxy).forEach(function(context) {
				server.use(proxyMiddleware(context, devProxy[context]))
			})
		}

		server.all('*', (req, res) => handle(req, res))

		server.listen(port, err => {
			if (err) {
				throw err
			}
			console.log(`> Ready on port ${port}`)
		})
	})
	.catch(err => {
		console.log('An error occurred, unable to start the server')
		console.log(err)
	})
