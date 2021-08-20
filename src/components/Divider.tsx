import * as React from 'react';
import { View } from 'react-native';
import { Colors } from '../theme/colors';


const Divider = () => {
	return <View style={{
		height: 1,
		width: "100%",
		backgroundColor: Colors.white2,
	}} />
}

export default Divider;