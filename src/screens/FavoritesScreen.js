import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const FavoritesScreen = ({navigation}) =>
{


	return (
		<View style={styles.containerView}>
			<Text style={styles.text}>FavoritesScreen</Text>
		</View>
		);
};

// FavoritesScreen.navigationOptions = {
//  title: "Favorites",
// 	tabBarIcon: <Ionicons name="ios-star" size={20} />,
 
// };

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

export default FavoritesScreen;