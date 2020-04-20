import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryMealsScreen from "./src/screens/CategoryMealsScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import FiltersScreen from "./src/screens/FiltersScreen";
import MealsDetailScreen from "./src/screens/MealsDetailScreen";


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
