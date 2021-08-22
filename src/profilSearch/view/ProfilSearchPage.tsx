import React from "react";
import { useEffect } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { Colors } from "../../theme/colors";
import { Theme } from "../../theme/theme";
import useUserList from "../hooks/useUserList";
import ProfilCard from "./ProfilCard";
import useSearchFilter from "../hooks/useSearchFilter";
import ProfilSearchHeaderBar from "./ProfilSearchHeaderBar";

function ProfilSearchPage({ navigation }: any) {
  const { userList, refreshUserList, resetUserList } = useUserList();

  const { filter, filteredProfilList, setFilter, resetFilter } =
    useSearchFilter({ profilList: userList });

  useEffect(() => {
    refreshUserList();
  }, [navigation]);

  return (
    <View>
      <ProfilSearchHeaderBar
        filter={filter}
        setFilter={setFilter}
        resetFilter={resetFilter}
      />
      <Text
        style={{
          color: Colors.black4,
          alignSelf: "center",
          paddingTop: Theme.space5,
        }}
      >
        {filteredProfilList.length} Resultats
      </Text>
      {/* <Button onPress={resetUserList} title="reset"></Button>  */}
      <FlatList
        data={filteredProfilList}
        renderItem={(item) => <ProfilCard profil={item.item} />}
        keyExtractor={(item, index) => item.id.name + index.toString()}
        onEndReached={() => refreshUserList()}
        onEndReachedThreshold={5}
      />
    </View>
  );
}

export default ProfilSearchPage;
