import * as React from 'react';
import { View } from 'react-native';
import { Colors } from '../theme/colors';

interface DividerProps {
	color?: string,
}

const Divider = (props?: DividerProps) => {
	return <View style={{
		height: 1,
		width: "100%",
		backgroundColor: props?.color ?? Colors.white2,
	}} />
}

export default Divider;