import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

// import { View } from './styles';
  



class HomeScreen extends Component {
    
    //Ocultar Barra de Navegação da Tela Principal
    static navigationOptions = {
        header: null
    }

    render () {
        return (
        <View style={{flex:1, justifyContent: 'center', /*backgroundColor: '#a99bda'*/}}>
            
            <View style={{alignItems: 'center' , backgroundColor: '#a99bda'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: '#644fbe' }}>Seja bem-vindo, ao</Text>
                <Text style={{fontSize: 28, alignItems: 'center' , justifyContent: "center", color: "#fff"}}> Calendário Religioso Marista</Text>
            </View>

            <View style={{margin:10 }} >
                <Button
                title = 'Apresentação'
                onPress = { () => this.props.navigation.navigate('Profile')}
                />
            </View>

            
            <View style={{margin:10}}>
                <Button
                title = 'Oração do dia'
                onPress = { () => this.props.navigation.navigate('Profile')}
                />
            </View>

            <View style={{margin:10}}>
                <Button
                title = 'Calendário'
                onPress = { () => this.props.navigation.navigate('Settings')}
                />
            </View>
            <View style={{margin:10}}>
                <Button
                title = 'Roteiro de Orações'
                onPress = { () => this.props.navigation.navigate('Settings')}
                />
            </View>

            <View style={{margin:10}}>
                <Button
                title = 'Configurações'
                onPress = { () => this.props.navigation.navigate('Settings')}
                />
            </View>

        </View>
        );
    }
}

const styles = {
    viewStyles: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7159c1'
    },
    textStyles: {
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      // fontWeight: 'bold' 
    
    
    }
}


export default HomeScreen;
