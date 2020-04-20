import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";


const MainNavigator = createStackNavigator(
 {
  Home: HomeScreen,
  Category: CategoryMealsScreen,
  Favorites: FavoritesScreen,
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

export default createAppContainer(MainNavigator);
