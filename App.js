import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherScreen from './screens/WeatherScreen';
import ForecastScreen from './screens/ForecastScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Weather"
      activeColor="#fff"
      shifting={true}
      barStyle={{backgroundColor: '#212121', width: '100%'}}
    >
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarLabel: 'Weather',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="weather-sunny" color={color} size={focused ? 25 : 23} />
          ),
        }}
      />
      <Tab.Screen
        name="Forecast"
        component={ForecastScreen}
        options={{
          tabBarLabel: 'Forecast',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="view-week" color={color} size={focused ? 25 : 23} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}