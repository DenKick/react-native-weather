import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

import AdditionalInfo from './components/AdditionalInfo';

const api = 'https://api.weatherbit.io/v2.0/current?lang=en';
const apiKey = '&key=3f323ac45ffd4f0d83323fa593986f16';

const weatherIcons = {
  t01d: 'weather-partly-lightning',
  t01n: 'weather-partly-lightning',
  t02d: 'weather-partly-lightning',
  t02n: 'weather-partly-lightning',
  t03d: 'weather-partly-lightning',
  t03n: 'weather-partly-lightning',
  t04d: 'weather-lightning',
  t04n: 'weather-lightning',
  t05d: 'weather-lightning',
  t05n: 'weather-lightning',
  d01d: 'weather-hail',
  d01n: 'weather-hail',
  d02d: 'weather-hail',
  d02n: 'weather-hail',
  d03d: 'weather-hail',
  d03n: 'weather-hail',
  r01d: 'weather-rainy',
  r01n: 'weather-rainy',
  r02d: 'weather-pouring',
  r02n: 'weather-pouring',
  r03d: 'weather-pouring',
  r03n: 'weather-pouring',
  f01d: 'weather-pouring',
  f01n: 'weather-pouring',
  r04d: 'weather-partly-rainy',
  r04n: 'weather-partly-rainy',
  r05d: 'weather-pouring',
  r05n: 'weather-pouring',
  r06d: 'weather-pouring',
  r06n: 'weather-pouring',
  s01d: 'weather-partly-snowy',
  s01n: 'weather-partly-snowy',
  s02d: 'weather-snowy',
  s02n: 'weather-snowy',
  s03d: 'weather-snowy-heavy',
  s03n: 'weather-snowy-heavy',
  s04d: 'weather-snowy-rainy',
  s04n: 'weather-snowy-rainy',
  s05d: 'weather-windy-variant',
  s05n: 'weather-windy-variant',
  s06d: 'weather-windy-variant',
  s06n: 'weather-windy-variant',
  a01d: 'weather-fog',
  a01n: 'weather-fog',
  a02d: 'weather-fog',
  a02n: 'weather-fog',
  a03d: 'weather-fog',
  a03n: 'weather-fog',
  a04d: 'weather-fog',
  a04n: 'weather-fog',
  a05d: 'weather-fog',
  a05n: 'weather-fog',
  a06d: 'weather-fog',
  a06n: 'weather-fog',
  c01d: 'weather-sunny',
  c01n: 'weather-night',
  c02d: 'weather-partly-cloudy',
  c02n: 'weather-night-partly-cloudy',
  c03d: 'weather-partly-cloudy',
  c03n: 'weather-night-partly-cloudy',
  c04d: 'weather-cloudy',
  c04n: 'weather-cloudy',
  u00d: 'weather-fog',
  u00n: 'weather-fog'
}

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
    const { weather, isLoading } = this.state;

    return (
      <View style={styles.container}>
        { isLoading ? <ActivityIndicator size="large" color="#000a12" /> : (
          <>
            <Text style={styles.city}>
              <MaterialCommunityIcons name="near-me" color='#000a12' size={25} />
              {weather.city_name}, {weather.country_code}
            </Text>
            <View style={styles.weatherContainer}>
              <MaterialCommunityIcons name={weatherIcons[weather.weather.icon]} color='#000a12' size={200} style={styles.weatherIcon} />
              <Text style={styles.temperature}>{weather.temp}°C</Text>
            </View>
            <View style={styles.additionalInformation}>
              <AdditionalInfo iconName="weather-windy" info={weather.wind_spd} units="m/s" marginLeft={0} />
              <AdditionalInfo iconName="coolant-temperature" info={weather.pres} units="mb" marginLeft={50} />
            </View>
          </>
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
    alignItems: 'center',
    textAlign: 'center',
  },

  weatherIcon: {
    textAlign: 'center',
  },

  city: {
    marginTop: 50,
    marginBottom: 'auto',
    color: '#000a12',
    fontSize: 35,
    textAlign: 'center',
  },

  weatherContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
  },

  temperature: {
    textAlign: 'center',
    fontSize: 45,
    marginTop: 15,
  },

  additionalInformation: {
    marginBottom: 50,
    marginTop: 'auto',
    flexDirection: 'row',
  },

  additionalText: {
    paddingLeft: 5,
    lineHeight: 50,
  }
})

export default WeatherScreen;