import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens} from 'react-native-screens'

import * as Font from 'expo-font';
import {AppLoading} from 'expo'

import MealsNavigator from './navigation/MealsNavigation';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }
  return (
    <MealsNavigator/>
  );
}
//expo install react-native-gesture-handler react-native-screens