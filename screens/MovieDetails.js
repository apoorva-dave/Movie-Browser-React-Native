import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import {fetchMoviesById} from '../api'

export default class MovieDetails extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
      info : null
    }
  }
  componentDidMount() {
    this.getMoviesById(this.props.route.params.id);
  }

  getMoviesById = async id => {
    try {
      const results = await fetchMoviesById(id)
      this.setState({
        info: results
      })
    } catch(err) {
      console.err(err)
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.touchableOp}
          onPress={() => {
            this.props.navigation.navigate("SearchMovies");
          }}
        >
        </TouchableOpacity>
        {this.state.info && this.state.info.Poster ? (
          <Image
            resizeMode="cover"
            source={{ uri: this.state.info.Poster }}
            style={styles.image}
          />
        ) : null}
        {this.state.info && (
          <View>
            <Text style={styles.title}>{this.state.info.Title}</Text>
            <Text>Year: {this.state.info.Released}</Text>
            <Text>Genre: {this.state.info.Genre}</Text>
            <Text>Rated: {this.state.info.Rated}</Text>
            <Text>{this.state.info.Director}</Text>
            <Text>--------------------</Text>
            <Text style={styles.actors}>{this.state.info.Actors}</Text>
            <Text>--------------------</Text>
            <Text style={styles.plot}>{this.state.info.Plot}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "orange",
    padding: 5
  },
  image: {
    width: 300,
    height: 300,
    borderColor: "orange",
    borderWidth: 5,
    marginBottom: 50
  },
  plot: {
    marginTop: 5,
    fontWeight: "bold"
  },
  actors: {
    marginTop: 5,
    fontStyle: "italic"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  touchableOp: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 10,
    marginBottom: 50
  },
  touchableText: {
    fontSize: 20,
    color: "white"
  }
});
