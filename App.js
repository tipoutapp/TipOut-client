import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';// import the different screens
import Loading from './src/screens/Loading'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Main from './src/screens/Main'
// create our app's navigation stack
const RootStack = createSwitchNavigator(
    {
      Loading: Loading,
      SignUp: SignUp,
      Login: Login,
      Main: Main
    },
    {
      initialRouteName: 'Loading'
    }
  )
    
  const App = createAppContainer(RootStack);
  export default App;