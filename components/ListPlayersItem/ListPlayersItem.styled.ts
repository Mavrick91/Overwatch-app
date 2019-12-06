import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	cursor: pointer;
	display: table;
	float: left;
	margin: 12px 0;
	padding: 0 6px;
	table-layout: fixed;
	width: 100%;
`

export const PlayerBadge = styled.a`
	background-color: #3c4860;
	display: table-row;
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
	img {
		height: 21px;
		margin-left: 1rem;
		width: 21px;
	}
	width: 21px;
`

export const PlayerBadgeName = styled.div`
	color: hsla(0, 0%, 96.5%, 0.8);
	overflow: hidden;
	padding: 0 5%;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
`

export const PLayerBadgeLevel = styled.div`
	padding-right: 0;
	text-align: right;
	width: 65px;

	& > div {
		background-color: hsla(0, 0%, 96.5%, 0.8);
		border-radius: 3px;
		color: #3c4860;
		display: inline-block;
		font-family: FuturaNo2D, century gothic, arial, sans-serif;
		font-weight: 600;
		font-weight: 700;
		line-height: 1;
		padding: 4px 10px;
	}
`

export const ImagePlatform = styled.div`
	img {
		fill: #f6f6f6;
		height: 24px;
		stroke-width: 0;
		stroke: #f6f6f6;
		width: 24px;
	}
	padding: 0 3%;
	text-align: right;
	width: 12%;
`
