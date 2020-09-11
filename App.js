import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function WeatherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Weather</Text>
    </View>
  );
}

function ForecastScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Forecast</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#212121',
        inactiveTintColor: '#212121',
        inactiveBackgroundColor: '#fff',
        tabBarOptions: {
          showIcon: false,
        },
        labelStyle: {
          fontSize: 20,
          padding: 'auto',
        }
      }}>
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="Forecast" component={ForecastScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}