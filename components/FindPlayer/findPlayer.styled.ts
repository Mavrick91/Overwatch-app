import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 0 0 42px 0;
`

export const H1 = styled.h1`
	font-family: 'big noodle titling';
	font-size: 4rem;
	font-style: italic;
	font-weight: 400;
	margin: 0;
	text-transform: uppercase;
`

export const InputText = styled.input`
	background-clip: padding-box;
	border-radius: 5px;
	border: 3px solid rgba(51, 51, 51, 0.25);
	font-size: 100%;
	height: 34px;
	margin-bottom: 10px;
	margin-right: 0.5rem;
	padding: 5px;
	vertical-align: middle;
	width: 100%;
`

export const InputSubmit = styled.input`
	background-color: #ff9c00;
	border-radius: 2px;
	border: 3px solid transparent;
	color: #f6f6f6;
	cursor: pointer;
	font-family: 'Arial';
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 0.025em;
	outline: none;
	padding: 6px 30px;
	text-transform: uppercase;
	vertical-align: middle;
	vertical-align: top;
	width: 100%;

	&:hover {
		background-color: #ffb033;
		border-color: #ffb033;
	}
`
