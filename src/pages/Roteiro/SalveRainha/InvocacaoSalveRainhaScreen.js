import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class InvocacaoSalveRainha extends Component {
    render () {
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                
                <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>Invocação Salve Rainha</Text>
                </View>
    
                              
            </View>
        ); 
    }
}

InvocacaoSalveRainha.navigationOptions = {
    title: 'Index',
    // backgroundColor: #524203,
    // headerRight: <Button/ />
  }
export default InvocacaoSalveRainha;
  
  