import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	display: table;
	table-layout: fixed;
	width: 100%;
`

export const FilterRow = styled.div`
	color: #405275;
	font-size: 1.6rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	margin: 10px 0;
	text-transform: uppercase;
`

export const Label = styled.span`
	margin-right: 6px;
`
export const Item = styled.span`
	${({ isChecked }) => css`
		margin: 0 3px;
		padding-right: 5px;
		border-width: 0 2px;
		border-right: 1px solid hsla(0, 0%, 100%, 0.5);
		color: ${isChecked ? '#fff' : '#333'};
		cursor: pointer;

		&:last-of-type {
			border-right: none;
		}
	`}
`

export const NoPlayerFound = styled.h5`
	font-size: 2rem;
	font-style: normal;
	font-variant: normal;
	font-weight: 700;
	line-height: normal;
	margin-top: 35px;
	text-transform: uppercase;
`
