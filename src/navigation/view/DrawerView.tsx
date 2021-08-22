import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../theme/colors";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { Theme } from "../../theme/theme";
import Divider from "../../components/Divider";
import Expanded from "../../components/Expanded";
import Space from "../../components/Space";
import Icon, { IconLibraryType, IconNameType } from "../../components/Icon";
import { RootDrawerParamList } from "../constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { SecureNavigationProp } from "../DrawerNavigator";

interface CustomDrawerProps {
  navigation: SecureNavigationProp;
}

const CustomDrawer = (props: CustomDrawerProps) => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.blue_dark }}>
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
          onPress={() => navigation.navigate("Home")}
        />
        <Space vertical size={Theme.space20} />
      </View>
    </View>
  );
};

type DrawerRouteItemProps = {
  label: String;
  disable?: boolean;
  iconName?: IconNameType;
  library?: IconLibraryType;
  onPress?: Function;
};

const DrawerRouteItem = (props: DrawerRouteItemProps) => {
  const {
    label,
    disable = false,
    iconName,
    library,
    onPress = () => {},
  } = props;
  return (
    <TouchableOpacity disabled={disable} onPress={() => onPress()}>
      <View
        style={{
          paddingVertical: Theme.space20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {iconName ? (
          <Icon
            name={iconName}
            library={library}
            style={{ paddingRight: Theme.space20 }}
            color={Colors.white4}
            size={32}
          />
        ) : null}
        <Text
          style={{
            color: disable ? Colors.white2 : Colors.white1,
            fontSize: disable ? Theme.fontSize14 : Theme.fontSize16,
            fontWeight: disable ? "100" : "normal",
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const DrawerHeader = () => {
  const layout = Dimensions.get("screen");
  const statusBarHeight = Constants.statusBarHeight;
  const headerHeight = getDefaultHeaderHeight(layout, false, statusBarHeight);

  return (
    <View
      style={{
        height: headerHeight,
        padding: Theme.space20,
        paddingTop: statusBarHeight,
        backgroundColor: Colors.blue_grey,
        justifyContent: "flex-end",
      }}
    >
      <Text style={{ color: Colors.white1, fontSize: Theme.fontSize18 }}>
        Xavier Niel
      </Text>
    </View>
  );
};

export default CustomDrawer;
