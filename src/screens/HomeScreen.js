import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';


const HomeScreen = ({navigation}) =>
{

	return (
		<View style={styles.containerView}>
			<Text style={styles.text}>HomeScreen</Text>
		</View>
		);
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

export default HomeScreen;