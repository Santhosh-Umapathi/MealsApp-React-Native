import React from 'react';
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";


const FavoritesButton = props => {


	return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23}/>
	
}

export default FavoritesButton;