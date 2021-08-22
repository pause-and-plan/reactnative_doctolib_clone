import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { RootStackParamList } from "../../navigation/constants";
import ProfilDetailsHeaderBar from "./ProfilDetailsHeaderBar";
import ProfilDetailsBody from "./ProfilDetailsBody";
import ProfilDetailsHeader from "./ProfilDetailsHeader";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "ProfilDetails">;

const ProfilDetailsPage = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const profil = route.params.profil;

  const [headerShown, setHeaderShown] = useState(false);

  return (
    <View>
      <ProfilDetailsHeaderBar profil={profil} headerShown={headerShown} />
      <ScrollView
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;
          if (!headerShown && offsetY > 200) {
            setHeaderShown(true);
          } else if (headerShown && offsetY < 200) {
            setHeaderShown(false);
          }
        }}
      >
        <ProfilDetailsHeader profil={profil} />
        <ProfilDetailsBody profil={profil} />
      </ScrollView>
    </View>
  );
};

export default ProfilDetailsPage;
