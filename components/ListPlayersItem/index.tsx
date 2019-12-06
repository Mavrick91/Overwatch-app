import React from 'react'
import {
	Wrapper,
	Image,
	PlayerBadge,
	PlayerBadgeLock,
	PlayerBadgeName,
	PLayerBadgeLevel,
	ImagePlatform,
} from './ListPlayersItem.styled'

type Props = {
	name: string
	level: number
	platform: string
	isPublic: boolean
}

function ListPlayersItem({ name, level, platform, isPublic }) {
	return (
		<Wrapper>
			<PlayerBadge>
				<Image backgroundImage="https://d15f34w2p8l1cc.cloudfront.net/overwatch/80a050ad65c0544eb4b09020c672d0326aa88137fdb3d4374c9cd28cd2525ef0.png" />
				<PlayerBadgeLock>
					{!isPublic && <img src={`/locker.png`} alt="" />}
				</PlayerBadgeLock>
				<PlayerBadgeName>{name}</PlayerBadgeName>
				<PLayerBadgeLevel>
					<div>{level}</div>
				</PLayerBadgeLevel>
				<ImagePlatform>
					<img src={`/${platform}.png`} alt="" />
				</ImagePlatform>
			</PlayerBadge>
		</Wrapper>
	)
}

export default ListPlayersItem
