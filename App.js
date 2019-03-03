/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import  LoginScreen from './screens/LoginScreen'
import  HomeScreen from './screens/HomeScreen'

type Props = {};

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator(
   {
      Login: LoginScreen,
      Home: HomeScreen,
   },
   {
    initialRouteName: 'Login',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: 'Go back to  main'
      },
    }
)

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
