import React from 'react'
import {
	Wrapper,
	PlatformStyled,
	UlStyled,
	LiStyled,
	CheckboxStyled,
	LabelStyled,
	InputStyled,
	Hr,
} from './Platform.styled'
import { List } from 'immutable'

function Platform() {
	const [platforms, setPlatforms] = React.useState(
		List([
			{ text: 'pc', isChecked: false },
			{ text: 'playstation 4', isChecked: false },
			{ text: 'xbox one', isChecked: false },
			{ text: 'nintendo switch', isChecked: false },
		]),
	)

	function handleChangeCheckbox(index: number) {
		const newPlatformState = platforms.updateIn(
			[index, 'isChecked'],
			value => !value,
		)

		setPlatforms(newPlatformState)
	}

	return (
		<Wrapper>
			<form>
				<PlatformStyled>Platform: </PlatformStyled>
				<UlStyled>
					{platforms.map((platform, index) => {
						return (
							<LiStyled key={platform.text}>
								<LabelStyled htmlFor={platform.text}>
									{platform.text}
									<InputStyled
										type="checkbox"
										id={platform.text}
										checked={platform.isChecked}
										onChange={() => handleChangeCheckbox(index)}
									/>
									<CheckboxStyled isCheck={platform.isChecked} />
								</LabelStyled>
							</LiStyled>
						)
					})}
				</UlStyled>
			</form>
			<Hr />
		</Wrapper>
	)
}

export default Platform
