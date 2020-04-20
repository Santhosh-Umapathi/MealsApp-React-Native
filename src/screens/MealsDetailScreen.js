import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton from '../components/Buttons/FavoritesButton';


import {CATEGORIES, MEALS} from '../data/dummy-data';

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

MealsDetailScreen.navigationOptions = ({ navigation }) => {

const categoryID = navigation.getParam("categoryID");

const seletedCategory = CATEGORIES.find(
 (categories) => categories.id === categoryID
);	

	return {
		headerTitle: seletedCategory.title,
		headerTintColor: "black", //Header button colors
		headerStyle: {
			backgroundColor: seletedCategory.color, // header bg color
		},
		headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item title='favorites' iconName='ios-star' onPress={() => navigation.navigate('Favorites')} />
		</HeaderButtons>
	}
 
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