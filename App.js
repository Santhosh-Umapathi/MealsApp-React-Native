import React, {useState} from 'react';
import MainNavigator from './src/navigation/MainNavigator';

//Native Screens
import { enableScreens } from 'react-native-screens';
enableScreens();
//Fonts
import { AppLoading } from 'expo';
import * as Fonts from 'expo-font'


//Redux
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
//Reducers
import MealsReducer from './src/store/reducers/meals';


const rootReducer = combineReducers({
  MealsReducer: MealsReducer,
  //newred: newReducer
});

const store = createStore(rootReducer);




//Loading Fonts
const fetchFonts = () => {
	return Fonts.loadAsync({
  "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
 });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
   return (
    <AppLoading
     startAsync={fetchFonts}
     onFinish={() => setFontLoaded(true)}
     onError={(error) => console.log(error)}
    />
   );
  }

  
  return (
   <Provider store={store}>
    <MainNavigator />
   </Provider>
  );
}

