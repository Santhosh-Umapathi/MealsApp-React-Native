import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from "../screens/HomeScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";

import { Ionicons } from "@expo/vector-icons";
import FavoritesButton from '../components/Buttons/FavoritesButton';



const MainNavigator = createStackNavigator(
 {
  Home: HomeScreen,
  Category: CategoryMealsScreen,
  
  Filter: FiltersScreen,
  Detail: MealsDetailScreen,
 },
 {
  initialRouteName: "Home",
  defaultNavigationOptions: {
   title: "Home",
   headerTintColor: "white", //Header button colors
   headerStyle: {
    backgroundColor: "#badc57", // header bg color
   },
   headerTitleStyle: {
    color: "black", // header font color
   },
  },
 }
);



const BottomNavigator = createBottomTabNavigator({
 MainNavigator,
 Favorites: FavoritesScreen,
},
    {
        tabBarOptions:
        {
            activeTintColor: 'orange',
            //inactiveTintColor:'green'
        }
    }
);

MainNavigator.navigationOptions = {
 title: "Home",
    tabBarIcon: <Ionicons name="ios-restaurant" size={20} color='orange'/>,
};

FavoritesScreen.navigationOptions = {
 title: "Favorites",
 //tabBarLabel: 'Favorites', same as above
 tabBarIcon: (tabInfo) => {
  //Gets same tint color active/inactive for icon
  return <Ionicons name="ios-star" size={20} color={tabInfo.tintColor} />;
 },
};



export default createAppContainer(BottomNavigator);
