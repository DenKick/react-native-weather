import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherScreen from './screens/WeatherScreen';
import ForecastScreen from './screens/ForecastScreen';
import { StatusBar } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

// Options for screens
const weatherScreenOptions = {
  tabBarLabel: 'Weather',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons name="weather-sunny" color="#ffffff" size={focused ? 25 : 23} />
  ),
};

const forecastScreenOptions = {
  tabBarLabel: 'Forecast',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons name="view-week" color="#ffffff" size={focused ? 25 : 23} />
  ),
};

// Final MaterialbottomTabNavigator
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Weather"
        activeColor="#ffffff"
        inactiveColor="#ffffff"
        shifting={true}
        barStyle={{ backgroundColor: '#1b5bc1', elevation: 0}}
        tabBarOptions={{style: {}}}
      >
        <Tab.Screen name="Weather" component={WeatherScreen} options={weatherScreenOptions} />
        <Tab.Screen name="Forecast" component={ForecastScreen} options={forecastScreenOptions} />
      </Tab.Navigator>
      <StatusBar barStyle="light-content" backgroundColor="#1b5bc1" />
    </NavigationContainer>
  );
}