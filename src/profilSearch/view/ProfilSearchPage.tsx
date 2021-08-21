import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Divider from "../../components/Divider";
import Icon from "../../components/Icon";
import Space from "../../components/Space";
import Images from "../../services/images";
import { Colors } from "../../theme/colors";
import { Theme } from "../../theme/theme";
import useUserList from "../hooks/useUserList";
import ProfilCard from "./ProfilCard";

function ProfilSearchPage({ navigation }: any) {
  const { userList, refreshUserList, resetUserList } = useUserList();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name="search-outline"
            ionicons
            size={32}
            color={Colors.white1}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Image
          source={Images.doctolib_logo}
          style={{ width: 100, height: 30 }}
        />
      ),
      headerStyle: { backgroundColor: Colors.primary },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name="menu"
            materialCommunityIcons
            size={32}
            color={Colors.white1}
          />
        </TouchableOpacity>
      ),
    });
    refreshUserList();
  }, [navigation]);

  return (
    <View>
      <Text
        style={{
          color: Colors.black4,
          alignSelf: "center",
          paddingTop: Theme.space5,
        }}
      >
        {userList.length} Resultats
      </Text>
      {/* <Button onPress={refreshUserList} title="refresh"></Button>
		<Button onPress={resetUserList} title="reset"></Button> */}
      <FlatList
        data={userList}
        renderItem={(item) => <ProfilCard profil={item.item} />}
        keyExtractor={(item, index) => item.id.name + index.toString()}
        onEndReached={refreshUserList}
        onEndReachedThreshold={5}
      />
    </View>
  );
}

export default ProfilSearchPage;
