import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Secured extends Component {

    //here we welcome the currently logged in user and we give the option to logout by calling the parent onLogoutPress funciton.
    render() {
        return (
            <ScrollView style={{ padding: 20 }}>

                <Text
                    style={{ fontSize: 27 }}>
                    Welcome {this.props.username}
                </Text>

                <View style={{ margin: 20 }} />

                <Button
                    onPress={this.props.onLogoutPress}
                    title="Logout"
                />
            </ScrollView>
        )
    }
}