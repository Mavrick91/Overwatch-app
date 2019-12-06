const path = require('path')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(
	withImages({
		webpack: config => {
			config.resolve.alias['~'] = path.resolve(__dirname)
			return config
		},
	}),
)
