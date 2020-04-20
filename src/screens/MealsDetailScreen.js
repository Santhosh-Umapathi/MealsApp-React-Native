import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import {MEALS} from '../data/dummy-data';

const MealsDetailScreen = ({navigation}) =>
{
	const mealID = navigation.getParam('mealID')

	const selectedMeal = MEALS.find((meal) => meal.id === mealID);
	

	return (
		<View style={styles.containerView}>
			<Text> {selectedMeal.title}</Text>
		</View>
		);
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

export default MealsDetailScreen;