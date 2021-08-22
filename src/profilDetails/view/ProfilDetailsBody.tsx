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
          onPress={() => {}}
          style={{
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
      </View>
      <ProfilDetailsItem
        iconName="location-outline"
        iconLib="ionicons"
        title="Institut médical Sport Santé (IMSS) - Stade Francais Paris"
        lines={[`${street?.number} ${street?.name}`, `${postcode} ${city}`]}
      />
      <ProfilDetailsItem
        iconName="euro"
        iconLib="materialIcons"
        title="Tarifs et remboursements"
        lines={[`Conventionné secteur 2`, `Carte Vitale acceptée`]}
      />
      <ProfilDetailsItem
        iconName="credit-card"
        iconLib="fontAwesome"
        title="Moyens de paiement"
        lines={[`Chèques, espèces et carte bancaires`]}
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="microscope"
        iconLib="fontAwesome5"
        title="Expertise et actes"
        tags={[`Traumatologie du sport`, `Médecine d'urgence`]}
      />
      <ProfilDetailsItem
        iconName="text"
        iconLib="materialCommunityIcons"
        title="Présentation"
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
        title="Langues parlées"
      />
      <Divider color={Colors.black5} margin={Theme.space5} />
      <ProfilDetailsItem
        iconName="microscope"
        iconLib="fontAwesome5"
        title="Expériences"
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
        title="Informations légales"
      />
      <Space vertical size={100} />
    </View>
  );
};

export default ProfilDetailsBody;
