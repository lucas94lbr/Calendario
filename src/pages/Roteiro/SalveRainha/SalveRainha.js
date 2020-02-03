import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class SalveRainha extends Component {
    render () {
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                
                <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>  Salve-Rainha</Text>
                </View>
    
                              
            </View>
        ); 
    }
}

SalveRainha.navigationOptions = {
    title: 'Index',
    // backgroundColor: #524203,
    // headerRight: <Button/ />
  }
export default SalveRainha;
  
  