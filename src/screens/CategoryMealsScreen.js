import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = ({navigation}) =>
{

	const id = navigation.getParam('id')
	
	const seletedCategory = CATEGORIES.find(categories=> categories.id === id);
	
	
	return (
		<View style={styles.containerView}>
			<Text style={styles.text}>{seletedCategory.title}</Text>
		</View>
		);
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
 const id = navigation.getParam("id");
 const seletedCategory = CATEGORIES.find((categories) => categories.id === id);

	return {
	  	headerTitle: seletedCategory.title,
		headerTintColor: "black", //Header button colors
	
 };
};

const styles = StyleSheet.create({
	containerView:
	{
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: 
	{
		fontSize: 30,
	},
});

export default CategoryMealsScreen;