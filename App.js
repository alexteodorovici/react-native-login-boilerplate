import React, { Component } from 'react';
import Login from './Login';
import Secured from './Secured';
import { Alert } from 'react-native';

export default class App extends Component {

  //the state of the app contains the currently logged in username, password and flag.
  state = {
    isLoggedIn: false,
    username: '',
    password: '',
  }

  render() {
    //if the user is not logged in show the Login component, otherwise show the Secured component.
    if (this.state.isLoggedIn)
      //pass along two props to the Secured child: 
      // - the onLogoutPress callback function that will be called from the Secured component when the user wants to log out.
      // - and the username prop that represents the currently logged in user.
      return (
        <Secured
          onLogoutPress={() => this.setState({ isLoggedIn: false })}
          username={this.state.username}
        />
      );
    else
      //pass the onLoginPress callback function to the Login component.
      //When the user loggs in, the Login component calls the onLoginPress with the two arguments user and pass. We then update the state.
      return (
        <Login
          onLoginPress={(user, pass) => {
            this.setState({ isLoggedIn: true, username: user, password: pass, });
            Alert.alert("Login", 'User is logged in: ' + user + " pass: " + pass);
          }}
        />
      );
  }
}