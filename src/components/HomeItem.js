import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const HomeItem = ({tapped, bgColor, title}) =>
{

	let ButtonComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version > 21)
	{
		ButtonComp = TouchableNativeFeedback;
	}

	return (
  <View style={styles.containerView}>
   <ButtonComp
		onPress={tapped}
   >
	<View style={[styles.flatListView,{backgroundColor: bgColor,}]}>
     <Text style={styles.text} numberOfLines={2}>
      {title}
     </Text>
    </View>
   </ButtonComp>
  </View>
 );
};

const styles = StyleSheet.create({
 containerView: {
	flex: 1,
	borderRadius:10,
	overflow: 'hidden',
	margin: 15,
	 
 },
 text: {
	 fontSize: 20,
	 fontFamily: 'open-sans',
	 textAlign: 'right',
	 
 },
 flatListView: {
  flex: 1,
  borderRadius: 10,
  shadowColor: "grey",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
	 shadowRadius: 10,
	 elevation: 5,
	 justifyContent: 'flex-end',
	 alignItems: 'flex-end',
	 paddingVertical: 10,
	 paddingHorizontal:10,
	 height: 150,
	 paddingRight: 10,
	 
 },
});

export default HomeItem;