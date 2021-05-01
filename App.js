import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants'
import Home from './screens/Home';
import CreateContact from './screens/CreateContact';
import Profile from './screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        mode={"modal"}
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#1e90ff' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Contact App',
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateContact}
          options={{
            title: 'Create Contact',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Contact Details',
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d7d7',
    // alignItems: 'center', // It align text row wise or horizontal
    // justifyContent: 'center',  // It align text vertical or column wise
  },
  home: {
    flex: 5,
    flexDirection: "column"
  }
});
