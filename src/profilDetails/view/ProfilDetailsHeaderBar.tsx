import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import User from "../../randomUserAPI/models/user";
import Icon from "../../components/Icon";
import { Theme } from "../../theme/theme";
import { Colors } from "../../theme/colors";
import { RootStackParamList } from "../../navigation/constants";

type ProfilScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProfilDetails"
>;

interface ProfilDetailsHeaderBarProps {
  profil: User;
  headerShown: Boolean;
}
const ProfilDetailsHeaderBar = (props: ProfilDetailsHeaderBarProps) => {
  const { profil, headerShown } = props;
  const navigation = useNavigation<ProfilScreenNavigationProp>();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        display: "flex",
        paddingTop: Constants.statusBarHeight + 10,
        width: Dimensions.get("window").width,
        padding: 10,
        zIndex: 1000,
        backgroundColor: headerShown ? Colors.primary : undefined,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          materialCommunityIcons
          size={32}
          color={Colors.white1}
        />
      </TouchableOpacity>
      {headerShown && (
        <Text
          style={{
            color: Colors.white,
            padding: Theme.space5,
            fontSize: Theme.fontSize18,
            fontWeight: "bold",
          }}
        >
          {`Dr ${profil.name.first} ${profil.name.last}`}
        </Text>
      )}
      {/* @ts-ignore */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
          name="menu"
          materialCommunityIcons
          size={32}
          color={Colors.white1}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilDetailsHeaderBar;
