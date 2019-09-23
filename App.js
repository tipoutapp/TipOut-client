import React, {Component} from 'react';
import { View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Spinner, Button, CardSection, Card} from './src/components/common';
import LoginForm from './src/components/LoginForm';
import BusinessMap from './src/components/BusinessMap';

class App extends Component {
  state = {loggedIn: null}

  componentDidMount() {
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
        <View style={{flex: 10}}>
          <BusinessMap/>
        </View>
        );
      case false:
        return <LoginForm /> ;
      default:
        return <Spinner size="large"/>
    }
    
  }

  renderLogOut(){
    return (<Button 
    onPress={() => firebase.auth().signOut()} 
    style={{flex: 1}}>
      Log Out
    </Button>);
  }

  render(){
    return(
    
    
    // {/* //   {this.renderContent()} */}
    
    <View style={{flex:1}}>
      <Header style={{flex:1}} headerText="TipOut" />
      {this.renderContent()}
      {this.state.loggedIn && this.renderLogOut()}
      

    </View>
    
    
    );
  }
};

export default App;
