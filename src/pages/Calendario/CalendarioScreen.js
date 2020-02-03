import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

class CalendarioScreen extends Component {
    render () {
            return (
              <WebView
                source={{uri: 'http://calendario.vocacionalumbrasil.org.br/public/'}}
                style={{marginTop: 20}}
              />
            );        
    }
}
WebView
CalendarioScreen.navigationOptions = {
    title: 'Calendário',
    // backgroundColor: #524203,
    // headerRight: <Button/ />
  }
export default CalendarioScreen;
  
  