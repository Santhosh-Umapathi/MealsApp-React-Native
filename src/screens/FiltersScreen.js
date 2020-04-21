import React, {useState, useEffect, useCallback} from 'react';
import {
 View,
 Text,
 Switch,
 StyleSheet,
 TouchableOpacity,
 Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FilterScreenRows = ({label, data, setData}) =>
{
	return (
  <View style={styles.rowStyle}>
   <Text style={styles.rowText}>{label}</Text>
   <Switch
    value={data}
    onValueChange={(value) => {
     setData(value);
    }}
    trackColor={{ true: "orange", false: "black" }}
    thumbColor="white"
   />
  </View>
 );
}


const FiltersScreen = ({navigation}) =>
{

	const [isGlutenFree, setIsGlutenFree] = useState(false)
	const [isLactoseFree, setisLactoseFree] = useState(false);
	const [isVegan, setisVegan] = useState(false);
	const [isVegetarian, setisVegetarian] = useState(false);


	const saveFilters = useCallback(() => {
		const savedValues = {
			isGlutenFree: isGlutenFree,
			isLactoseFree: isLactoseFree,
			isVegan: isVegan,
			isVegetarian: isVegetarian
		}
		
		console.log(savedValues)
	}, [isGlutenFree, isLactoseFree, isVegetarian, isVegetarian]);

	useEffect(() => {
		navigation.setParams({save: saveFilters})
	}, [saveFilters])

	return (
  <View style={styles.containerView}>
   <Text style={styles.text}>Available Filters</Text>

   <FilterScreenRows
    label="Gluten Free"
    data={isGlutenFree}
    setData={setIsGlutenFree}
   />

   <FilterScreenRows
    label="Lactose Free"
    data={isLactoseFree}
    setData={setisLactoseFree}
   />

   <FilterScreenRows
    label="Vegan"
    data={isVegan}
    setData={setisVegan}
   />

   <FilterScreenRows
    label="Vegetarian"
    data={isVegetarian}
    setData={setisVegetarian}
   />
  </View>
 );
};

FiltersScreen.navigationOptions = ({ navigation }) => {
 return {
  headerLeft: () => (
   <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Ionicons
     name="ios-menu"
     size={25}
     color="white"
     style={{ marginLeft: 15 }}
    />
   </TouchableOpacity>
  ),
  headerRight: () => (
   <TouchableOpacity onPress={navigation.getParam("save")}>
    <Ionicons
     name="ios-save"
     size={25}
     color="white"
     style={{ marginRight: 15 }}
    />
   </TouchableOpacity>
  ),
 };
};

const styles = StyleSheet.create({
	containerView:
	{
		flex: 1,
		backgroundColor: '#fff',
		
	},
	text: 
	{
		fontSize: 30,
		textAlign: 'center',
		marginTop: 10,
		fontFamily: 'open-sans',
	},
	rowStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 10,
		marginVertical: 15
	},
	rowText:
	{
		fontSize: 20,

	}
});

export default FiltersScreen;