import * as React from 'react';
import { Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function WeatherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eceff1' }}>
      <Text>Weather</Text>
    </View>
  );
}

export default WeatherScreen;