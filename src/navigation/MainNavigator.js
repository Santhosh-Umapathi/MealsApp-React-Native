import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//Tab Bars
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

//Screens
import HomeScreen from "../screens/HomeScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";
//Icons
import { Ionicons } from "@expo/vector-icons";
import { Platform } from 'react-native';


const defaultNavOptions = 
{
        title: "Home",
        headerTintColor: "white", //Header button colors
        headerStyle:
        {
            backgroundColor: "#badc57", // header bg color
        },
        headerTitleStyle:
        {
            color: "black", // header font color
        },
}

//Stack Navigators
const MainNavigator = createStackNavigator(
{
    Home: HomeScreen,
    Category: CategoryMealsScreen,
    Filter: FiltersScreen,
    Detail: MealsDetailScreen,
},
{
    //initialRouteName: "Home", Takes 1st screen by default
    defaultNavigationOptions: defaultNavOptions
});
 
const FavoritesNavigator = createStackNavigator(
{
    Favorites: FavoritesScreen,
    Detail: MealsDetailScreen,
},
{
    defaultNavigationOptions: defaultNavOptions   
});



//Bottom Tabs Android | iOS
const BottomNavigator =
 Platform.OS === "android"
    ? createMaterialBottomTabNavigator( //Android
        {
            MainNavigator,
            FavoritesNavigator
        },
        {
            activeColor: 'white',
            shifting: true
        })
    : createBottomTabNavigator( //iOS
    {
        MainNavigator, //Meals: MainNavigator same
        FavoritesNavigator
    },
    {
        tabBarOptions:
        {
            activeTintColor: "orange",
            //activeBackgroundColor:'yellow'
        },
    });

//Tab Bar Icon Config
MainNavigator.navigationOptions = {
    title: "Home",
    tabBarIcon: <Ionicons name="ios-restaurant" size={20} color="orange" />,
    //tabBarColor: "lightgreen", //Only for android
};

FavoritesNavigator.navigationOptions = {
 title: "Favorites", //tabBarLabel: 'Favorites', same
 tabBarIcon: (tabInfo) => {
  //Gets same tint color active/inactive for icon
  return <Ionicons name="ios-star" size={20} color={tabInfo.tintColor} />;
 },
 tabBarColor: "red", //Only for android
};



export default createAppContainer(BottomNavigator);
