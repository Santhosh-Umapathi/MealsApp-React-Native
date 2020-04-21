import React from "react";
import {
 View,
 FlatList,
    StyleSheet,
 TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


import { CATEGORIES } from "../data/dummy-data";
import HomeItem from "../components/HomeItem";

const HomeScreen = ({ navigation }) => {
 return (
  <View style={styles.containerView}>
   <FlatList
    numColumns={2}
    data={CATEGORIES}
    keyExtractor={(key) => key.id}
    renderItem={({ item }) => {
     return (
      <HomeItem
       tapped={() => {navigation.navigate("Category", { id: item.id })}}
       bgColor={item.color}
       title={item.title}
      />
     );
    }}
   />
  </View>
 );
};

HomeScreen.navigationOptions = ({ navigation }) => {
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
 containerView: {
  flex: 1,
 },
});

export default HomeScreen;
