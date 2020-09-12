import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherScreen from './screens/WeatherScreen';
import ForecastScreen from './screens/ForecastScreen';

const Tab = createMaterialBottomTabNavigator();

// Options for screens
const weatherScreenOptions = {
  tabBarLabel: 'Weather',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons name="weather-sunny" color={color} size={focused ? 25 : 23} />
  ),
};

const forecastScreenOptions = {
  tabBarLabel: 'Forecast',
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons name="view-week" color={color} size={focused ? 25 : 23} />
  ),
};

// Final MaterialbottomTabNavigator
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000a12" />
      <Tab.Navigator
        initialRouteName="Weather"
        activeColor="#ffffff"
        inactiveColor="#babdbe"
        shifting={true}
        barStyle={{ backgroundColor: '#263238'}}
      >
        <Tab.Screen name="Weather" component={WeatherScreen} options={weatherScreenOptions} />
        <Tab.Screen name="Forecast" component={ForecastScreen} options={forecastScreenOptions} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}