import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Space from "../../components/Space";
import Constants from "expo-constants";
import User from "../../randomUserAPI/models/user";
import { Theme } from "../../theme/theme";
import { Colors } from "../../theme/colors";
import { LinearGradient } from "expo-linear-gradient";

interface ProfilDetailsHeaderProps {
  profil: User;
}

const ProfilDetailsHeader = (props: ProfilDetailsHeaderProps) => {
  const { profil } = props;

  return (
    <ImageBackground
      source={{ uri: profil.picture.large }}
      resizeMode="cover"
      style={{ justifyContent: "center" }}
    >
      <LinearGradient
        colors={[Colors.black1, Colors.black5]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <Space vertical size={Constants.statusBarHeight} />
        <View style={{ padding: Theme.space10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: profil.picture.large }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 120,
                alignSelf: "center",
              }}
            />
          </View>
          <Space vertical size={10} />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: Colors.white,
                padding: Theme.space5,
                fontSize: Theme.fontSize24,
                fontWeight: "bold",
              }}
            >
              {`Dr ${profil.name.first} ${profil.name.last}`}
            </Text>
            <Text
              style={{
                color: Colors.white,
                padding: Theme.space5,
                fontSize: Theme.fontSize16,
                fontWeight: "bold",
              }}
            >
              {`Médecin généraliste`}
            </Text>
          </View>
        </View>
        <Space vertical size={40} />
      </LinearGradient>
    </ImageBackground>
  );
};

export default ProfilDetailsHeader;
