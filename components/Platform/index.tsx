import { List, Map } from 'immutable'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlatformsSelector } from '~/selectors/platform'
import { getPlayersCountSelector } from '~/selectors/playersFound'
import { updateLocalEntities } from '~/store/actions'
import {
	CheckboxStyled,
	Hr,
	InputStyled,
	LabelStyled,
	LiStyled,
	PlatformStyled,
	ProfileStatusBar,
	SearchResultCount,
	UlStyled,
	Wrapper,
} from './Platform.styled'

function Platform() {
	const platforms: List<Map<string, string | boolean>> = useSelector(
		getPlatformsSelector,
	)
	const playersCount: number = useSelector(getPlayersCountSelector)
	const dispatch = useDispatch()

	function handleChangeCheckbox(index: number) {
		const newPlatformState = platforms.updateIn(
			[index, 'isChecked'],
			value => !value,
		)

		dispatch(updateLocalEntities('platforms', newPlatformState))
	}

	return (
		<Wrapper>
			{playersCount && (
				<SearchResultCount>
					<span>{playersCount}</span> Players found
				</SearchResultCount>
			)}
			<form>
				<PlatformStyled>Platform: </PlatformStyled>
				<div className="sm:flex sm:justify-between">
					<UlStyled className="sm:flex-no-wrap">
						{platforms.map((platform, index) => {
							const text = platform.get('text')
							const isChecked = platform.get('isChecked')

							return (
								<LiStyled key={text} className="sm:w-auto sm:mr-5">
									<LabelStyled htmlFor={text} className="sm:text-2xl">
										{text}
										<InputStyled
											type="checkbox"
											id={text}
											checked={isChecked}
											onChange={() => handleChangeCheckbox(index)}
										/>
										<CheckboxStyled isCheck={isChecked} />
									</LabelStyled>
								</LiStyled>
							)
						})}
					</UlStyled>
					<ProfileStatusBar>
						<img src="/locker.png" alt="" />
						<span>Private Profile</span>
					</ProfileStatusBar>
				</div>
			</form>
			<Hr />
		</Wrapper>
	)
}

export default Platform
