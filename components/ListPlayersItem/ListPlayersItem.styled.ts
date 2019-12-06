import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	display: table;
	table-layout: fixed;
	min-width: 385px;
	margin: 12px 0;
	padding: 0 6px;
	cursor: pointer;
	float: left;

	@media screen and (min-width: 25em) {
		width: 100%;
	}
	@media screen and (min-width: 48em) {
		width: 50%;
	}
	@media screen and (min-width: 62em) {
		width: 25%;
	}
`

export const PlayerBadge = styled.a`
	display: table-row;
	background-color: #3c4860;

	& > * {
		display: table-cell;
		vertical-align: middle;
	}
`

export const Image = styled.div`
	${({ backgroundImage }) => css`
		width: 60px;
		height: 60px;
		background-size: cover;
		background-image: url(${backgroundImage});
	`}
`

export const PlayerBadgeLock = styled.div`
	width: 21px;

	img {
		width: 21px;
		height: 21px;
		margin-left: 1rem;
	}
`

export const PlayerBadgeName = styled.div`
	padding: 0 5%;
	text-align: left;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	color: hsla(0, 0%, 96.5%, 0.8);

	@media only screen and (min-width: 768px) {
		font-size: 1.75rem;
		line-height: 2rem;
		white-space: normal;
	}
`

export const PLayerBadgeLevel = styled.div`
	text-align: right;
	padding-right: 0;
	width: 65px;

	& > div {
		display: inline-block;
		font-family: FuturaNo2D, century gothic, arial, sans-serif;
		font-weight: 600;
		padding: 4px 10px;
		border-radius: 3px;
		line-height: 1;
		font-weight: 700;
		background-color: hsla(0, 0%, 96.5%, 0.8);
		color: #3c4860;
	}
`

export const ImagePlatform = styled.div`
	padding: 0 3%;
	text-align: right;
	width: 12%;

	img {
		height: 24px;
		width: 24px;
		fill: #f6f6f6;
		stroke: #f6f6f6;
		stroke-width: 0;
	}
`
