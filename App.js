import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';  
import SearchMovies from './screens/SearchMovies'
import MovieDetails from './screens/MovieDetails'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default class App extends React.Component {
 
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "SearchMovies" 
          component = {SearchMovies} 
          options={{ title: 'Movie Browser' }} />
          <Stack.Screen name = "MovieDetails" 
          component = {MovieDetails} 
          options={{ title: 'Movie Details' }} />
        </ Stack.Navigator>
      </ NavigationContainer>
    );
  }
}