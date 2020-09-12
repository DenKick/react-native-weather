import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const api = 'https://api.weatherbit.io/v2.0/current?lang=ru';
const apiKey = '&key=3f323ac45ffd4f0d83323fa593986f16';

class WeatherScreen extends React.Component {
  state = {
    weather: null,
    isLoading: true,
    error: null,
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Conditions'
        });
      }
    );
  };

  fetchWeather(lat, lon) {
    fetch(`${api}&lat=${lat}&lon=${lon}${apiKey}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          weather: json.data[0],
          isLoading: false
        });
      });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        { isLoading ? <ActivityIndicator size="large" color="#000a12" /> : (
          <TouchableOpacity onPress={this.findCoordinates}>
            <Text style={styles.city}><MaterialCommunityIcons name="near-me" color='#000a12' size={23} /> {this.state.weather.city_name}</Text>
            <Text>{this.state.weather.temp} C</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  city: {
    color: '#000a12',
    fontSize: 30,
  }
})

export default WeatherScreen;