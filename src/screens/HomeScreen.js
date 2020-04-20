import React, { useState } from "react";
import {
 View,
 Text,
 FlatList,
 StyleSheet,
 TouchableOpacity,
 Button,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealsItem from "../components/MealsItem";

const HomeScreen = ({ navigation }) => {
 return (
  <View style={styles.containerView}>
   <FlatList
    numColumns={2}
    data={CATEGORIES}
    keyExtractor={(key) => key.id}
    renderItem={({ item }) => {
     return (
         <MealsItem
             tapped={() => { navigation.navigate("Category", { id: item.id }) }}
             bgColor={item.color} 
             title = {item.title}
         />
     );
    }}
   />
  </View>
 );
};

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
 },
 
 
});

export default HomeScreen;
