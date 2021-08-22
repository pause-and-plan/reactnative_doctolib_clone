import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Space from "../../components/Space";
import { RootDrawerParamList } from "../../navigation/constants";
import Images from "../../services/images";
import { Colors } from "../../theme/colors";
import { Theme } from "../../theme/theme";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootDrawerParamList,
  "Home"
>;

function HomePage() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 2,
          padding: Theme.space20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={Images.doctolib_logo}
          resizeMode="contain"
          style={{ width: 260, height: 100 }}
        />
        <Space vertical size={50} />
        <Text
          style={{
            fontSize: Theme.fontSize24,
            color: Colors.white2,
          }}
        >
          {`by Pause & Plan`}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: Theme.space20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            bottom: 25,
            width: "100%",
            height: 50,
            borderRadius: Theme.roundness,
            backgroundColor: Colors.white,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SecureNavigation")}
            style={{
              width: "100%",
              height: 50,
              borderRadius: Theme.roundness,
              backgroundColor: Colors.white,
              justifyContent: "center",
              elevation: 10,
              paddingHorizontal: Theme.space30,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: Theme.fontSize18,
                alignSelf: "center",
                color: Colors.primary,
              }}
            >
              SE CONNECTER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HomePage;
