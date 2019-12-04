import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	padding: 42px 0;
`

export const H1 = styled.h1`
	font-size: 6.10352rem;
	margin: 0;
	text-transform: uppercase;
	font-weight: 400;
	font-style: italic;
	font-family: 'big noodle titling';
`
export const InputText = styled.input`
	${({ theme: { breakpoints } }) => css`
		height: 34px;
		width: 100%;
		margin-bottom: 10px;
		padding: 5px;
		margin-right: 0.5rem;
		border-radius: 5px;
		background-clip: padding-box;
		border: 3px solid rgba(51, 51, 51, 0.25);
		height: 18px;
		vertical-align: middle;
		font-size: 100%;

		@media only screen and (min-width: ${breakpoints.medium}) {
			width: 60%;
			margin-bottom: 0;
		}

		@media only screen and (min-width: ${breakpoints.large}) {
			width: 360px;
			margin-bottom: 0;
		}
	`}
`

export const InputSubmit = styled.input`
	vertical-align: top;
	padding: 6px 30px;
	color: #f6f6f6;
	background-color: #ff9c00;
	cursor: pointer;
	text-transform: uppercase;
	border: 3px solid transparent;
	font-size: 1.6rem;
	border-radius: 2px;
	outline: none;
	vertical-align: middle;

	&:hover {
		border-color: #ffb033;
		background-color: #ffb033;
	}
`
