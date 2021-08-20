import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';
import DrawerNavigator from './DrawerNavigator';

function AppNavigator() {
	return (
		<NavigationContainer>
			<DrawerNavigator />
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

export default AppNavigator;