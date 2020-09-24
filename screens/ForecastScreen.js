import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

const api = 'https://api.weatherbit.io/v2.0/forecast/daily?lang=en&days=6';
const apiKey = '&key=3f323ac45ffd4f0d83323fa593986f16';

class ForecastScreen extends React.Component {
  state = {
    city: null,
    country: null,
    weather: [],
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
          city: json.city_name,
          country: json.country_code,
          weather: json.data,
          isLoading: false
        });
      });
  };

  render() {
    const { weather, isLoading, city, country } = this.state;
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let weatherAll = []

    for (let i = 0; i < weather.length; i++) {
      weatherAll.push(<Text style={styles.city}>{weather[i].valid_date}</Text>)
    }

    return (
      <View style={styles.container}>
        { isLoading ? <ActivityIndicator size="large" color="#ffffff" /> : (
          <>
            <Text style={styles.city}>
              <MaterialCommunityIcons name="near-me" color='#ffffff' size={25} />
              {city}, {country}
            </Text>
            <View>
              {weatherAll}
            </View>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b5bc1',
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
    color: '#ffffff',
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
    color: "#ffffff",
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

export default ForecastScreen;