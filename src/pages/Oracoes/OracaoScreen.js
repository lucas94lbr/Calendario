import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, FlatList} from 'react-native';

class OracaoScreen extends Component {
   
  if( state = null){
    console.log('Erro');
  }
  
  state = {
      jsonData: '6',
    };
    componentDidMount() {
      fetch('http://calendario.vocacionalumbrasil.org.br/api/products/2', {
        method: 'GET',
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            jsonData: json.data,
            
          });
        })
        .catch(error => { 
          console.error(error);
          console.log('Erro Interno!');
        });
    }

   render () {
      return (
         <View style={{ padding: 30 }}>
           
           <Text>--------------------------</Text> 

           {/* <Text>{this.state.jsonData2.price}</Text> */}
         </View>
      );
   }
}


OracaoScreen.navigationOptions = {
   title: 'Oração do dia'
 }
export default OracaoScreen;