import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';


const HomeScreen = ({navigation}) =>
{

	return (
		<View style={styles.containerView}>
			<FlatList
				numColumns={2}
				data={CATEGORIES}
				keyExtractor={key => key.id}
				renderItem={({item}) => 
				{
					return (
					<View style={styles.flatListView}>
						<Text>{item.title}</Text>
					</View>
     			);}}
			/>
		</View>
		);
};

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
  backgroundColor: "#fff",
  justifyContent: "center",
 },
 text: {
  fontSize: 30,
 },
	flatListView:
	{
		flex: 1,
		margin: 15,
		justifyContent: 'center',
		height: 100
	}
});

export default HomeScreen;