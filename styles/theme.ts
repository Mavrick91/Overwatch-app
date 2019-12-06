import colors from './colors'
import { createGlobalStyle } from 'styled-components'

export const theme = {
	colors,
}

export const GlobalStyle = createGlobalStyle`
	html {
		font-size: 10px;
		box-sizing: border-box;
	}

	body {
		color: #333;
		fill: #333;
		padding: 0;
		margin: 0;
		background-color: #f6f6f6;
		max-width: 100%;
		overflow-x: hidden;
		font-family: Arial, sans-serif;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 400;
		font-variant: normal;
		line-height: 1.4;
	}

	html, body, #__next {
		height: 100%;
	}

	* {
		box-sizing: inherit;
    background-repeat: no-repeat;
    vertical-align: inherit;
    white-space: inherit;
    text-overflow: inherit;
		text-shadow: inherit;
		border-style: none;
		border-color: unset;
		border-width: 0;
	}

	@font-face {
		font-family: 'big noodle titling';
		src: url(/big_noodle_titling.ttf);
	}
`
