import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class ProfileScreen extends Component {
    render () {
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                
                <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>Tela de Perfil</Text>
                </View>
    
                <View style={{margin:20}}>
                <Button
                    title = 'Ir para Tela Detalhes'
                    onPress = { () => this.props.navigation.navigate('Details')}
                />
                </View>
                
            </View>
        );
    }
}

ProfileScreen.navigationOptions = {
    title: 'About',
    // backgroundColor: #524203,
    // headerRight: <Button/ />
  }
export default ProfileScreen;
  
  