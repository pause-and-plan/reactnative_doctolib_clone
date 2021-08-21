import * as React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { HeaderHeightContext, getDefaultHeaderHeight } from '@react-navigation/elements';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { Theme } from '../../theme/theme';
import Divider from '../../components/Divider';
import Expanded from '../../components/Expanded';
import Space from '../../components/Space';

import { Ionicons } from '@expo/vector-icons';
import Icon, { IconLibraryType, IconNameType } from '../../components/Icon';

const CustomDrawer = () => {
	return <View style={{ flex: 1, backgroundColor: Colors.blue_dark }}>
		<DrawerHeader />
		<View style={{ paddingHorizontal: Theme.space20, flex: 1 }}>
			<DrawerRouteItem label={"Mes rendez-vous"} />
			<Divider />
			<DrawerRouteItem label={"Mes documents"} />
			<Divider />
			<DrawerRouteItem label={"Mon compte"} />
			<Divider />
			<DrawerRouteItem label={"Mes proches"} />
			<Divider />
			<DrawerRouteItem label={"v10.10.10"} disable={true} />
			<Expanded />
			<DrawerRouteItem
				label={"Se deconnecter"}
				iconName={"lock"}
				library="fontAwesome"
			/>
			<Space vertical size={Theme.space20} />
		</View>
	</View >
}

type DrawerRouteItemProps = {
	label: String,
	disable?: Boolean,
	iconName?: IconNameType,
	library?: IconLibraryType
};

const DrawerRouteItem = (props: DrawerRouteItemProps) => {
	const { label, disable = false, iconName, library } = props;
	return <View style={{
		paddingVertical: Theme.space20,
		flexDirection: "row",
		alignItems: "center"
	}}>
		{iconName ? <Icon
			name={iconName}
			library={library}
			style={{ paddingRight: Theme.space20 }}
			color={Colors.white4}
			size={32}
		/> : null}
		<Text style={{
			color: disable ? Colors.white2 : Colors.white1,
			fontSize: disable ? Theme.fontSize14 : Theme.fontSize16,
			fontWeight: disable ? "100" : "normal",
		}}>
			{label}
		</Text>
	</View>
}

const DrawerHeader = () => {
	const layout = Dimensions.get("screen");
	const statusBarHeight = Constants.statusBarHeight;
	const headerHeight = getDefaultHeaderHeight(layout, false, statusBarHeight);

	return <View style={{
		height: headerHeight,
		padding: Theme.space20,
		paddingTop: statusBarHeight,
		backgroundColor: Colors.blue_grey,
		justifyContent: "flex-end"
	}}>
		<Text style={{ color: Colors.white1, fontSize: Theme.fontSize18 }}>
			Xavier Niel
		</Text>
	</View>
}

export default CustomDrawer;