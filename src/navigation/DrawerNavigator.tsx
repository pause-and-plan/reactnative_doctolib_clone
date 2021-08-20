import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PROFIL_SEARCH_PAGE_TITLE } from '../profilSearch/constants';
import ProfilSearchPage from '../profilSearch/view/ProfilSearchPage';
import { PROFIL_DETAILS_PAGE_TITLE } from '../profilDetails/constants';
import ProfilDetailsPage from '../profilDetails/view/ProfilDetailsPage';
import { Text } from 'react-native';
import CustomDrawer from './view/DrawerView';
import { Colors } from '../theme/colors';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator screenOptions={{ drawerPosition: "right" }} drawerContent={CustomDrawer} >
			<Drawer.Screen name={PROFIL_SEARCH_PAGE_TITLE} component={ProfilSearchPage} />
			<Drawer.Screen name={PROFIL_DETAILS_PAGE_TITLE} component={ProfilDetailsPage} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;