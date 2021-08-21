import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './view/DrawerView';
import StackNavigator from './StackNavigator';
import { STACK_NAVIGATOR } from './constants';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{ drawerPosition: "right" }}
			drawerContent={CustomDrawer}
		>
			<Drawer.Screen
				name={STACK_NAVIGATOR}
				component={StackNavigator}
				options={{ headerShown: false }}
			/>
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;