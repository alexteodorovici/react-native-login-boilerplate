import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
} from 'react-native';

export default class Login extends Component {

    //this is the Login component state.
    state = {
        username: '',
        password: '',
    }

    //this function is called when the user logs in. 
    //Inside we call the parent onLoginPress function passing the username and password.
    onLogin = () => {
        //call the parent prop on login.
        this.props.onLoginPress(this.state.username, this.state.password);
    }

    render() {
        return (
            <ScrollView style={{ padding: 20 }}>

                <Text
                    style={{ fontSize: 27 }}>
                    Login
				</Text>

                <TextInput
                    placeholder='Username'
                    onChangeText={(username) => this.setState({ username })}
                />

                <TextInput
                    placeholder='Password'
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true}
                    onSubmitEditing={this.onLogin}
                />

                <View style={{ margin: 7 }} />

                <Button
                    onPress={this.onLogin}
                    title="Submit"
                />

            </ScrollView>
        )
    }
}