import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	color: #405275;
	font-size: 1.6rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
`

export const PlatformStyled = styled.div`
	color: #405275;
	margin-right: 15px;
`

export const UlStyled = styled.ul`
	display: inline-flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 10px 0;
	padding: 0;
`
export const LiStyled = styled.li`
	display: inline-block;
	user-select: none;
	width: 50%;
`

export const CheckboxStyled = styled.div`
	${({ isCheck }) => css`
		background: #405275;
		border-radius: 4px;
		border: 2px solid #f6f6f6;
		height: 1.2em;
		left: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 1.2em;

		&::after {
			background-image: url(/checkbox-validate.png);
			background-size: contain;
			content: '';
			height: 100%;
			left: 0;
			opacity: ${isCheck ? 1 : 0};
			position: absolute;
			top: 0;
			width: 100%;
		}
	`}
`

export const LabelStyled = styled.label`
	cursor: pointer;
	display: inline-block;
	font-size: 1.4rem;
	padding-left: 1.7em;
	position: relative;
`

export const InputStyled = styled.input`
	opacity: 0;
	position: absolute;
	z-index: -1;
`
export const Hr = styled.hr`
	border-bottom: 3px solid rgba(64, 82, 117, 0.5);
`

export const SearchResultCount = styled.h5`
	font-size: 2rem;
	margin-bottom: 12px;
`

export const ProfileStatusBar = styled.div`
	display: inline-block;
	font-size: 1.2rem;
	img {
		height: 1.5rem;
		width: 1.5rem;
	}
	margin: 10px 0;
	span {
		margin-left: 0.8rem;
	}
	& > * {
		display: inline-block;
		vertical-align: middle;
	}
`
