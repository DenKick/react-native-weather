import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

class ForecastCard extends React.Component {
  state = {
    temp: null,
    icon: null,
    isLoading: true,
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      icon: this.props.icon,
      temp: this.props.temp,
    })
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

export default ForecastCard;