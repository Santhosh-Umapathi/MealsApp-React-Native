import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const FiltersScreen = ({navigation}) =>
{


	return (
		<View style={styles.containerView}>
			<Text style={styles.text}>FiltersScreen</Text>
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
 };
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

export default FiltersScreen;