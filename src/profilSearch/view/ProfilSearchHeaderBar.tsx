import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import Icon from "../../components/Icon";
import Images from "../../services/images";
import { Colors } from "../../theme/colors";
import { Theme } from "../../theme/theme";
import Constants from "expo-constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/constants";
import { Input } from "native-base";
import Space from "../../components/Space";

interface ProfilSearchHeaderBarProps {
  filter: string;
  setFilter: Function;
  resetFilter: Function;
}

type ProfilScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProfilSearch"
>;

const ProfilSearchHeaderBar = (props: ProfilSearchHeaderBarProps) => {
  const { filter, setFilter, resetFilter } = props;
  const navigation = useNavigation<ProfilScreenNavigationProp>();

  const [searchbarShown, setSearchbarShown] = useState(false);
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        width: Dimensions.get("window").width,
        backgroundColor: Colors.primary,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: Dimensions.get("window").width,
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            resetFilter();
            setSearchbarShown(!searchbarShown);
          }}
        >
          <Icon
            name="search-outline"
            ionicons
            size={32}
            color={Colors.white1}
          />
        </TouchableOpacity>
        <Image
          source={Images.doctolib_logo}
          style={{ width: 100, height: 30 }}
        />
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
      {searchbarShown && (
        <Input
          placeholder="Recherche"
          variant="unstyled"
          width="80%"
          bg={Colors.white}
          borderRadius={10}
          color={Colors.primary}
          placeholderTextColor={Colors.primary2}
          autoFocus={true}
          margin={Theme.space5}
          value={filter}
          py={1}
          onChangeText={(text) => setFilter(text)}
          InputLeftElement={
            <TouchableOpacity
              onPress={() => {
                setSearchbarShown(!searchbarShown);
                resetFilter();
              }}
              style={{ paddingHorizontal: Theme.space10 }}
            >
              <Icon
                name="search-outline"
                ionicons
                size={32}
                color={Colors.primary}
              />
            </TouchableOpacity>
          }
          InputRightElement={
            filter !== "" ? (
              <TouchableOpacity
                onPress={() => resetFilter()}
                style={{ paddingHorizontal: Theme.space10 }}
              >
                <Icon name="close" antDesign size={24} color={Colors.primary} />
              </TouchableOpacity>
            ) : undefined
          }
        />
      )}
    </View>
  );
};

export default ProfilSearchHeaderBar;
