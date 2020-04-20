import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TouchableNativeFeedback, ImageBackground,Platform } from 'react-native';

const MealItem = ({navigation, tapped, image, title, duration, complexity, affordability}) =>
{

	let ButtonComp = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version > 21) {
	ButtonComp = TouchableNativeFeedback;
	}

	return (
  <View style={styles.containerView}>
   <ButtonComp onPress={tapped}>
    <View style={styles.flatlistView}>
     <ImageBackground
      source={{ uri: image }}
      style={{ height: "100%", width: "100%", justifyContent: "space-between"}}
     >
      <View style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
       <Text style={styles.titleStyle}>{title}</Text>
      </View>

      <View
       style={[styles.bottomContainer, { backgroundColor: "rgba(0,0,0,0.1)" }]}
      >
       <Text style={styles.bottomText}>{duration} mins</Text>
       <Text style={styles.bottomText}>{complexity.toUpperCase()}</Text>
       <Text style={styles.bottomText}>{affordability.toUpperCase()}</Text>
      </View>
     </ImageBackground>
    </View>
   </ButtonComp>
  </View>
 );
};

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
  overflow: "hidden",
  borderRadius: 10,
  marginTop: 5,
  marginBottom: 10,
  marginHorizontal: 5,
 },
 flatlistView: {
  //flex: 1,
	 width: '100%',
	 height:'100%',
  borderRadius: 10,
  height: 350,
  justifyContent: "space-between",
 },
 text: {
  fontSize: 30,
 },
 bottomContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
 },
 bottomText: {
  fontSize: 14,
  fontFamily: "open-sans-bold",
  paddingHorizontal: 10,
  paddingVertical: 5,
  color: "white",
 },

 titleStyle: {
  fontSize: 25,
  fontFamily: "open-sans-bold",
  paddingHorizontal: 10,
  paddingVertical: 5,
  color: "white",
 },
});

export default MealItem;