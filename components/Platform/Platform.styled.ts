import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	font-size: 1.6rem;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 0.5px;
	color: #405275;
`

export const PlatformStyled = styled.span`
	margin-right: 15px;
	color: #405275;
`

export const UlStyled = styled.ul`
	display: inline-block;
	list-style: none;
	padding: 0;
	margin: 0;
`
export const LiStyled = styled.li`
	${({ theme: { breakpoints } }) => css`
		user-select: none;

		&:first-child {
			margin-top: 0;
		}

		@media only screen and (min-width: ${breakpoints.medium}) {
			&:first-child {
				margin-left: 0;
			}
		}

		@media only screen and (min-width: ${breakpoints.medium}) {
			margin-top: 0;
			display: inline-block;
			margin-left: 20px;
		}
	`}
`

export const CheckboxStyled = styled.div`
	${({ isCheck }) => css`
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		width: 1.2em;
		height: 1.2em;
		background: #405275;
		border: 2px solid #f6f6f6;
		border-radius: 4px;

		&::after {
			position: absolute;
			opacity: ${isCheck ? 1 : 0};
			content: '';
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url(/checkbox-validate.png);
			background-size: contain;
		}
	`}
`

export const LabelStyled = styled.label`
	position: relative;
	display: inline-block;
	padding-left: 1.7em;
	cursor: pointer;
	height: 1.2em;
	font-size: 1.6rem;
	margin-bottom: 15px;
`

export const InputStyled = styled.input`
	position: absolute;
	z-index: -1;
	opacity: 0;
`
export const Hr = styled.hr`
	${({ theme: { breakpoints } }) => css`
		border: 0;
		border-bottom: 3px solid rgba(64, 82, 117, 0.5);

		@media only screen and (min-width: ${breakpoints.medium}) {
			border-bottom-width: 6px;
		}
	`}
`

export const SearchResultCount = styled.h5`
	margin-bottom: 12px;
	font-size: 2rem;
`

export const ProfileStatusBar = styled.div`
	float: right;

	& > * {
		display: inline-block;
	}

	img {
		width: 1.5rem;
		height: 1.5rem;
	}

	span {
		margin-left: 1.5rem;
	}
`
