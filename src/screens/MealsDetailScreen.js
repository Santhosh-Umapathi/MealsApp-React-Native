import React from "react";
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
 Image,
 ScrollView,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/Buttons/FavoritesButton";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsDetailScreen = ({ navigation }) => {
	const mealID = navigation.getParam("mealID");
	 const categoryID = navigation.getParam("categoryID");

	
	 const seletedCategory = CATEGORIES.find(
   (categories) => categories.id === categoryID
  );


 const selectedMeal = MEALS.find((meal) => meal.id === mealID);

 return (
  <ScrollView style={styles.containerView}>
   <Text
    style={{ textAlign: "center", fontSize: 25, fontFamily: "open-sans-bold" }}
   >
    {" "}
    {selectedMeal.title}
   </Text>

   <View style={{ height: 250, margin: 5 }}>
    <Image
     source={{ uri: selectedMeal.imageURL }}
     style={{ height: "100%", width: "100%", borderRadius: 10 }}
    />
   </View>

   <View>
    <Text style={styles.stepStyle}>Ingredients</Text>
    {selectedMeal.ingredients.map((ingredient) => (
     <View
      style={[styles.viewStyle, { borderColor: seletedCategory.color }]}
      key={ingredient}
     >
      <Text key={ingredient}> - {ingredient}</Text>
     </View>
    ))}
   </View>

   <View style={{marginTop: 10, }}>
    <Text style={styles.stepStyle}>Steps</Text>
    {selectedMeal.steps.map((step) => (
     <View
      style={[styles.viewStyle, { borderColor: seletedCategory.color }]}
      key={step}
     >
      <Text key={step}> - {step}</Text>
     </View>
    ))}
   </View>
  </ScrollView>
 );
};

MealsDetailScreen.navigationOptions = ({ navigation }) => {
 const categoryID = navigation.getParam("categoryID");

 const seletedCategory = CATEGORIES.find((categories) => categories.id === categoryID);

 return {
  headerTitle: seletedCategory.title,
  headerTintColor: "black", //Header button colors
  headerStyle: {
   backgroundColor: seletedCategory.color, // header bg color
  },
  headerRight: () => (
   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
     title="favorites"
     iconName="ios-star"
     onPress={() => navigation.navigate("Favorites")}
    />
   </HeaderButtons>
  ),
 };
};

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
 },
 text: {
  fontSize: 30,
 },
 stepStyle: {
  fontSize: 25,
  fontFamily: "open-sans-bold",
	 textAlign: "center",
  color:'orange',
 },
 viewStyle: {
  borderWidth: 0.5,
  borderRadius: 10,
  padding: 10,
  margin: 5,
 },
});

export default MealsDetailScreen;
