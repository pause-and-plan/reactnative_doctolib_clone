
import * as React from 'react';
import {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	Fontisto,
	FontAwesome,
	FontAwesome5,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from '@expo/vector-icons';
import { StyleProp, TextStyle } from 'react-native';

export type IconNameType =
	keyof typeof AntDesign.glyphMap |
	keyof typeof Entypo.glyphMap |
	keyof typeof EvilIcons.glyphMap |
	keyof typeof Feather.glyphMap |
	keyof typeof Fontisto.glyphMap |
	keyof typeof FontAwesome.glyphMap |
	keyof typeof FontAwesome5.glyphMap |
	keyof typeof Foundation.glyphMap |
	keyof typeof Ionicons.glyphMap |
	keyof typeof MaterialCommunityIcons.glyphMap |
	keyof typeof MaterialIcons.glyphMap |
	keyof typeof Octicons.glyphMap |
	keyof typeof SimpleLineIcons.glyphMap |
	keyof typeof Zocial.glyphMap;

export type IconLibraryType =
	"antDesign" |
	"entypo" |
	"evilIcons" |
	"feather" |
	"fontisto" |
	"fontAwesome" |
	"fontAwesome5" |
	"foundation" |
	"ionicons" |
	"materialCommunityIcons" |
	"materialIcons" |
	"octicons" |
	"simpleLineIcons" |
	"zocial";

export type IconProps = {
	name?: IconNameType,
	size?: number,
	color?: string,

	antDesign?: Boolean,
	entypo?: Boolean,
	evilIcons?: Boolean,
	feather?: Boolean,
	fontisto?: Boolean,
	fontAwesome?: Boolean,
	fontAwesome5?: Boolean,
	foundation?: Boolean,
	ionicons?: Boolean,
	materialCommunityIcons?: Boolean,
	materialIcons?: Boolean,
	octicons?: Boolean,
	simpleLineIcons?: Boolean,
	zocial?: Boolean,
	library?: IconLibraryType,

	style?: StyleProp<TextStyle>
};

const Icon = (props: IconProps) => {
	const { name, size, color, library, style } = props;

	if (library === "antDesign" || props.antDesign) {
		// @ts-ignore
		return <AntDesign name={name} size={size} color={color} style={style} />
	} else if (library === "entypo" || props.entypo) {
		// @ts-ignore
		return <Entypo name={name} size={size} color={color} style={style} />
	} else if (library === "evilIcons" || props.evilIcons) {
		// @ts-ignore
		return <EvilIcons name={name} size={size} color={color} style={style} />
	} else if (library === "feather" || props.feather) {
		// @ts-ignore
		return <Feather name={name} size={size} color={color} style={style} />
	} else if (library === "fontisto" || props.fontisto) {
		// @ts-ignore
		return <Fontisto name={name} size={size} color={color} style={style} />
	} else if (library === "fontAwesome" || props.fontAwesome) {
		// @ts-ignore
		return <FontAwesome name={name} size={size} color={color} style={style} />
	} else if (library === "fontAwesome5" || props.fontAwesome5) {
		// @ts-ignore
		return <FontAwesome5 name={name} size={size} color={color} style={style} />
	} else if (library === "foundation" || props.foundation) {
		// @ts-ignore
		return <Foundation name={name} size={size} color={color} style={style} />
	} else if (library === "ionicons" || props.ionicons) {
		// @ts-ignore
		return <Ionicons name={name} size={size} color={color} style={style} />
	} else if (library === "materialCommunityIcons" || props.materialCommunityIcons) {
		// @ts-ignore
		return <MaterialCommunityIcons name={name} size={size} color={color} style={style} />
	} else if (library === "materialIcons" || props.materialIcons) {
		// @ts-ignore
		return <MaterialIcons name={name} size={size} color={color} style={style} />
	} else if (library === "octicons" || props.octicons) {
		// @ts-ignore
		return <Octicons name={name} size={size} color={color} style={style} />
	} else if (library === "simpleLineIcons" || props.simpleLineIcons) {
		// @ts-ignore
		return <SimpleLineIcons name={name} size={size} color={color} style={style} />
	} else if (library === "zocial" || props.zocial) {
		// @ts-ignore
		return <Zocial name={name} size={size} color={color} style={style} />
	} else throw console.error("icon lib not found");

}

export default Icon;