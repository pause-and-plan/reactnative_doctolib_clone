import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Divider from "../../components/Divider";
import Icon from "../../components/Icon";
import Space from "../../components/Space";
import User from "../../randomUserAPI/models/user";
import { Colors } from "../../theme/colors";
import { Theme } from "../../theme/theme";
import { moment } from "../../services/services";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/constants";

type authScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProfilDetails"
>;
interface ProfilCardProps {
  profil: User;
}

const ProfilCard = (props: ProfilCardProps) => {
  const profil = props.profil;
  const navigation = useNavigation<authScreenProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProfilDetails", { profil })}
    >
      <View
        style={{
          borderRadius: Theme.roundness,
          borderColor: Colors.black5,
          borderWidth: 1,
          marginVertical: Theme.space10,
          marginHorizontal: Theme.space20,
        }}
      >
        <View style={{ padding: Theme.space10 }}>
          <ProfilCardHeader profil={profil} />
          <ProfilCardJob profil={profil} />
          <ProfilCardAddress profil={profil} />
        </View>
        <Divider color={Colors.black5} />
        <ProfilCardFooter profil={profil} />
      </View>
    </TouchableOpacity>
  );
};

const ProfilCardFooter = (props: ProfilCardProps) => {
  const profil = props.profil;
  const date = moment(profil.dob.date).format("dddd Do MMMM");
  const hour = moment(profil.dob.date).format("h:mm");

  return (
    <View style={{ padding: Theme.space15, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: Theme.fontSize14, color: Colors.black3 }}>
          {`Prochaine disponibilité`}
        </Text>
      </View>
      <Space vertical size={5} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="calendar"
          materialCommunityIcons
          size={16}
          color={Colors.black1}
        />
        <Space horizontal size={10} />
        <Text style={{ fontSize: Theme.fontSize14 }}>{`${date}`}</Text>
        <Space horizontal size={10} />
        <Icon
          name="clock-outline"
          materialCommunityIcons
          size={16}
          color={Colors.black1}
        />
        <Space horizontal size={5} />
        <Text style={{ fontSize: Theme.fontSize14 }}>{`${hour}`}</Text>
      </View>
    </View>
  );
};

const ProfilCardAddress = (props: ProfilCardProps) => {
  const profil = props.profil;
  const { street, city, postcode } = profil.location;

  return (
    <View style={{ padding: Theme.space5 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="location-outline"
          ionicons
          size={20}
          color={Colors.black1}
        />
        <Space horizontal size={10} />
        <Text style={{ fontSize: Theme.fontSize14 }}>
          {`${street?.number ?? ""} ${street?.name ?? ""}`}
        </Text>
      </View>
      <Space vertical size={5} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Space horizontal size={30} />
        <Text style={{ fontSize: Theme.fontSize14 }}>
          {`${postcode} ${city}`}
        </Text>
      </View>
    </View>
  );
};

const ProfilCardJob = (props: ProfilCardProps) => {
  const profil = props.profil;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: Theme.space5,
      }}
    >
      <Icon name="stethoscope" fontAwesome size={20} color={Colors.black1} />
      <Space horizontal size={10} />
      <Text style={{ fontSize: Theme.fontSize14 }}>
        {`Médecin Généraliste`}
      </Text>
    </View>
  );
};

const ProfilCardHeader = (props: ProfilCardProps) => {
  const profil = props.profil;
  return (
    <View style={{ flexDirection: "row", padding: Theme.space5 }}>
      <Image
        source={{ uri: profil.picture.medium }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
        }}
      />
      <Space horizontal size={10} />
      <Text style={{ fontSize: Theme.fontSize16, fontWeight: "bold" }}>
        {`Dr ${profil.name.first} ${profil.name.last}`}
      </Text>
    </View>
  );
};

export { ProfilCardProps };
export default ProfilCard;
