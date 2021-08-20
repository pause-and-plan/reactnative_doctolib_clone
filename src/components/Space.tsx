import * as React from 'react';
import { View } from 'react-native';

type SpaceProps = {
	horizontal?: Boolean,
	vertical?: Boolean,
	size?: number,
}
const Space = (props: SpaceProps) => {
	const { vertical = false, horizontal = false, size = 10 } = props;

	return <View style={{
		height: vertical ? size : 1,
		width: horizontal ? size : 1,
	}} />
}

export default Space;