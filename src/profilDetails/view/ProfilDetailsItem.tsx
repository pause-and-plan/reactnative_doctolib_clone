import React from "react";
import { Dimensions, Text, View } from "react-native";
import Space from "../../components/Space";
import { Theme } from "../../theme/theme";
import { Colors } from "../../theme/colors";
import Icon, { IconLibraryType, IconNameType } from "../../components/Icon";
import { ScrollView } from "react-native-gesture-handler";
import Expanded from "../../components/Expanded";

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

export default ProfilDetailsItem;
