import React from "react";
import {
 View,
 FlatList,
 StyleSheet
} from "react-native";

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

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
 },
});

export default HomeScreen;
