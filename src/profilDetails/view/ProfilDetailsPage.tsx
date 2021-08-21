import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Space from "../../components/Space";
import { RootStackParamList } from "../../navigation/constants";
import Constants from "expo-constants";
import User from "../../randomUserAPI/models/user";
import Icon, { IconLibraryType, IconNameType } from "../../components/Icon";
import { Theme } from "../../theme/theme";
import { Colors } from "../../theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import Expanded from "../../components/Expanded";
import Divider from "../../components/Divider";

type ProfilScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProfilDetails"
>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "ProfilDetails">;

const ProfilDetailsPage = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const profil = route.params.profil;

  const [headerShown, setHeaderShown] = useState(false);

  return (
    <View>
      <HeaderBar profil={profil} headerShown={headerShown} />
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
interface HeaderBarProps {
  profil: User;
  headerShown: Boolean;
}
const HeaderBar = (props: HeaderBarProps) => {
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

interface ProfilDetailsBodyProps {
  profil: User;
}

const ProfilDetailsBody = (props: ProfilDetailsBodyProps) => {
  const { profil } = props;

  const { street, city, postcode } = profil.location;

  return (
    <View style={{ paddingHorizontal: Theme.space20 }}>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          bottom: 25,
          width: "100%",
          height: 50,
          borderRadius: Theme.roundness,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          elevation: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: Theme.fontSize18,
            alignSelf: "center",
            color: Colors.white1,
          }}
        >
          Prendre rendez-vous en ligne
        </Text>
      </TouchableOpacity>
      <ProfilDetailsItem
        iconName="location-outline"
        iconLib="ionicons"
        title="Institut medical Sport Sante (IMSS) - Stade Francais Paris"
        lines={[`${street?.number} ${street?.name}`, `${postcode} ${city}`]}
      />
      <ProfilDetailsItem
        iconName="euro"
        iconLib="materialIcons"
        title="Tarifs et remboursements"
        lines={[`Conventionne secteur 2`, `Carte Vitale acceptee`]}
      />
      <ProfilDetailsItem
        iconName="credit-card"
        iconLib="fontAwesome"
        title="Moyens de paiement"
        lines={[`Cheques, especes et carte bancaires`]}
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="microscope"
        iconLib="fontAwesome5"
        title="Expertise et actes"
        tags={[`Traumatologie du sport`, `Medecine d'urgence`]}
      />
      <ProfilDetailsItem
        iconName="text"
        iconLib="materialCommunityIcons"
        title="Presentation"
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="clock-outline"
        iconLib="materialCommunityIcons"
        title="Horaire et contacts"
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="md-school"
        iconLib="ionicons"
        title="Formations"
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="flag"
        iconLib="feather"
        title="Langues parlees"
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="microscope"
        iconLib="fontAwesome5"
        title="Experiences"
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="microscope"
        iconLib="fontAwesome5"
        title="Associations"
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="information-circle-outline"
        iconLib="ionicons"
        title="Informations legales"
      />
      <Space vertical size={100} />
    </View>
  );
};

interface ProfilDetailsItemProps {
  iconName: IconNameType;
  iconLib: IconLibraryType;
  title: string;
  lines?: string[];
  tags?: string[];
}

const ProfilDetailsItem = (props: ProfilDetailsItemProps) => {
  const { iconName, iconLib, title, lines, tags } = props;

  return (
    <View style={{ flexDirection: "row", paddingVertical: Theme.space10 }}>
      <Icon
        name={iconName}
        library={iconLib}
        size={20}
        color={Colors.black2}
        style={{ padding: 3 }}
      />
      <Space horizontal size={20} />
      <View>
        <Text
          style={{
            maxWidth: Dimensions.get("window").width - 120,
            fontWeight: "bold",
            fontSize: Theme.fontSize18,
          }}
        >
          {title}
        </Text>
        {lines?.map((text, index) => (
          <Text
            key={index.toString()}
            style={{
              maxWidth: Dimensions.get("window").width - 120,
              fontSize: Theme.fontSize16,
              color: Colors.black3,
            }}
          >
            {text}
          </Text>
        ))}
        {tags && tags.length && (
          <ScrollView
            horizontal
            style={{ maxWidth: Dimensions.get("window").width - 120 }}
          >
            {tags?.map((text, index) => (
              <Text
                key={index.toString()}
                style={{
                  fontSize: Theme.fontSize12,
                  backgroundColor: Colors.black5,
                  borderRadius: Theme.roundness,
                  padding: Theme.space5,
                  margin: Theme.space5,
                }}
              >
                {text}
              </Text>
            ))}
          </ScrollView>
        )}
      </View>
      <Expanded />
      <Icon name="add" ionicons size={24} color={Colors.black5} />
    </View>
  );
};

interface ProfilDetailsHeaderProps {
  profil: User;
}

const ProfilDetailsHeader = (props: ProfilDetailsHeaderProps) => {
  const { profil } = props;

  const navigation = useNavigation<ProfilScreenNavigationProp>();

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
              {`Medecin generaliste`}
            </Text>
          </View>
        </View>
        <Space vertical size={40} />
      </LinearGradient>
    </ImageBackground>
  );
};

export default ProfilDetailsPage;
