import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, FlatList, Image, Text, View } from 'react-native';
import Divider from '../../components/Divider';
import Icon from '../../components/Icon';
import Space from '../../components/Space';
import { Colors } from '../../theme/colors';
import { Theme } from '../../theme/theme';
import { PROFIL_SEARCH_PAGE_TITLE } from '../constants';
import useUserList from '../hooks/useUserList';
import ProfilCard from './ProfilCard';

function ProfilSearchPage() {
	const { userList, refreshUserList, resetUserList } = useUserList();

	useEffect(() => {
		refreshUserList();
	}, []);

	return <View >
		<Text>{PROFIL_SEARCH_PAGE_TITLE}</Text>
		<Text>User List length {userList.length}</Text>
		<Button onPress={refreshUserList} title="refresh"></Button>
		<Button onPress={resetUserList} title="reset"></Button>
		<FlatList
			data={userList}
			renderItem={(item) => <ProfilCard profil={item.item} />}
			keyExtractor={(item, index) => item.id.name + index.toString()}
			onEndReached={refreshUserList}
			onEndReachedThreshold={5}
		/>
	</View>
}


export default ProfilSearchPage;
