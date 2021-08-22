import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./view/DrawerView";
import StackNavigator from "./StackNavigator";
import { RootDrawerParamList, STACK_NAVIGATOR } from "./constants";
import HomePage from "../Home/view/HomePage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export type SecureNavigationProp = NativeStackNavigationProp<
  RootDrawerParamList,
  "SecureNavigation"
>;

function DrawerNavigator() {
  const navigation = useNavigation<SecureNavigationProp>();

  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: "right" }}
      drawerContent={() => CustomDrawer({ navigation })}
    >
      <Drawer.Screen
        name={"Home"}
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={"SecureNavigation"}
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
