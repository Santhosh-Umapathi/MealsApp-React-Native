import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const FavoritesScreen = ({navigation}) =>
{

	const seletedCategoryMeals = MEALS.filter( meal => meal.id === 'm1' || meal.id === 'm2');

	return (
  <View style={styles.containerView}>
   <FlatList
    data={seletedCategoryMeals}
    keyExtractor={(key) => key.id}
    renderItem={({ item }) => {
     return (
      <MealItem
       image={item.imageURL}
       title={item.title}
       duration={item.duration}
       complexity={item.complexity}
       affordability={item.affordability}
      />
     );
    }}
   />
  </View>
 );
	

};

FavoritesScreen.navigationOptions = ({navigation}) =>
{
	return {
		headerLeft: () =>
			(
				<TouchableOpacity
					onPress={() => navigation.toggleDrawer() }>
				<Ionicons
					name='ios-menu'
					size={25}
					color='white'
					style={{ marginLeft: 15 }}
				/>
			</TouchableOpacity>
		),
	};
}



const styles = StyleSheet.create({
	containerView: {
  flex: 1,
 },
 text: {
  fontSize: 30,
 },
});

export default FavoritesScreen;