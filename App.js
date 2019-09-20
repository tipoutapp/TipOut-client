/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header, Spinner, Button, CardSection, Card} from './src/components/common'
import LoginForm from './src/components/LoginForm'



class App extends Component {
  state = {loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCVyWplnxy7x8kPbNeQHsq7CBlR7vcQCC8",
      authDomain: "tipout-252410.firebaseapp.com",
      databaseURL: "https://tipout-252410.firebaseio.com",
      projectId: "tipout-252410",
      storageBucket: "",
      messagingSenderId: "981215423381",
      appId: "1:981215423381:web:5f7b26f58846a3b907249c"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      }else{
        this.setState({loggedIn: false})
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn){
      case true:
        return(
          <Card><CardSection><Button 
          onPress={() => firebase.auth().signOut()}>
          LogOut
        </Button></CardSection></Card> 
        );
      case false:
        return <LoginForm /> ;
      default:
        return <Spinner size="large"/>
    }
    
  }

  render(){
    return(
    <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
    </View>
    );
  }
};



export default App;
