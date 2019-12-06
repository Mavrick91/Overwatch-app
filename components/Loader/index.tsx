import React from 'react'
import { Wrapper, Text } from './Loader.styled'
import { DotLoader } from 'react-spinners'

function Loader({ text }) {
	return (
		<Wrapper>
			<Text>{text && text}</Text>
			<DotLoader
				sizeUnit={'px'}
				size={110}
				color={'#FF9C00'}
				loading={true}
				css="margin: 0 auto"
			/>
		</Wrapper>
	)
}

export default Loader
