import React from 'react';
import { Button, Text, View } from 'react-native';
import { PROFIL_SEARCH_PAGE_TITLE } from '../constants';

function ProfilSearchPage() {

	return <View >
		<Text>{PROFIL_SEARCH_PAGE_TITLE}</Text>
		<Button onPress={() => { }} title="hey ho"></Button>
	</View>
}

export default ProfilSearchPage;
