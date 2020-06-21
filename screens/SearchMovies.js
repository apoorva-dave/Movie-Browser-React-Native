import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight } from 'react-native';  
import {fetchData} from '../api'

export default class SearchMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dataSource: null
    }
  }

  getData = async text => {
    try {
      const results = await fetchData(text)
      this.setState({
        dataSource: results
      })
    } catch(err) {
      console.err(err)
    }
  }

  componentDidUpdate(prevState)
  {
    if(this.state.text !== prevState.text)
    {
      this.getData(this.state.text)
    }
  }

  handleSearch = (text) => {
    console.log(text)
    this.setState({
      text: text,
    });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  movieTitle = ({ item }) => {
    return (
      <TouchableHighlight
        style={styles.item}
        underlayColor="white"
        onPress={() => {
          this.props.navigation.navigate("MovieDetails", {
            title: item.title,
            id: item.imdbID
          });
        }}
      >
        <View>
          <Text style={styles.title}>{item.Title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.textInputStyle}
          placeholder="Search movies here"
          value={this.state.text}
          onChangeText={this.handleSearch}
          underlineColorAndroid="transparent"
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={this.movieTitle}
          keyExtractor={(item) => item.Title + item.imdbID} 
          enableEmptySections={true}
          style={{ marginTop: 10 }}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    padding: 5
  },
  item: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    marginTop: 40
  },
});
