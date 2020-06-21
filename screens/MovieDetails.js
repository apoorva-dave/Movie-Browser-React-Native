import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
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
      <View style={styles.container}>
        <View >
          {this.state.info && this.state.info.Poster ? (
            <Image
              resizeMode="cover"
              source={{ uri: this.state.info.Poster }}
              style={styles.image}
            />
          ) : null}
        </View>
        <View>
          {this.state.info && (
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>{this.state.info.Title} </Text>
                <Text style={{ padding: 5}}> ({this.state.info.Year})</Text>
              </View>
              <Text style={{fontStyle: 'italic'}}>{this.state.info.Rated} , {this.state.info.Runtime} </Text>
              <Text style={styles.plot}>{this.state.info.Plot}</Text>
              <Text>IMDB Rating: ({this.state.info.imdbRating}/10)</Text>
              <Text style={styles.actors}>Cast: {this.state.info.Actors}</Text>
              <Text>Genre: {this.state.info.Genre}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    padding: 5
  },
  image: {
    width: 300,
    height: 450,
    marginBottom: 50,
  },
  plot: {
    marginTop: 5,
    fontStyle: "italic",
    marginBottom: 5
  },
  actors: {
    marginTop: 5,
    fontStyle: "italic",
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
