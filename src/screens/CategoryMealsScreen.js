import React from "react";
import {
 View,
 FlatList,
 StyleSheet
} from "react-native";

import { useSelector } from 'react-redux';

import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";


const CategoryMealsScreen = ({ navigation }) => {

    const MEALS = useSelector((state) => state.MealsReducer.filteredMeals);


 const id = navigation.getParam("id");

 const seletedCategoryMeals = MEALS.filter(
  (meal) => meal.categoryIds.indexOf(id) >= 0
 );

 //const seletedCategoryMeals = MEALS.filter((meal) => meal.categoryIds.includes(id)); //Both works
  


 return (
  <View style={styles.containerView}>
   <FlatList
    data={seletedCategoryMeals}
    keyExtractor={(key) => key.id}
    renderItem={({ item }) => {
		return (
   <MealItem
    tapped={() => navigation.navigate("Detail", { mealID: item.id, categoryID: id })}
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

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
 const id = navigation.getParam("id");
 const seletedCategory = CATEGORIES.find((categories) => categories.id === id);

 return {
  headerTitle: seletedCategory.title,
  headerTintColor: "black", //Header button colors
  headerStyle: {
   backgroundColor: seletedCategory.color, // header bg color
  },
 };
};

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
 },
 text: {
  fontSize: 30,
 },
 
});

export default CategoryMealsScreen;
