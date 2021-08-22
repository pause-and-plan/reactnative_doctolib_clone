import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Space from "../../components/Space";
import User from "../../randomUserAPI/models/user";
import { Theme } from "../../theme/theme";
import { Colors } from "../../theme/colors";
import Divider from "../../components/Divider";
import ProfilDetailsItem from "./ProfilDetailsItem";

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

export default ProfilDetailsBody;
