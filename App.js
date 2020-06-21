import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';  
import SearchMovies from './screens/SearchMovies'

export default class App extends React.Component {
 
  render() {
    return (
      <SearchMovies />
    );
  }
}