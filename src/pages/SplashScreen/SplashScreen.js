import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  Block } from '../../components';

class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
           setTimeout(
            () => { resolve('HomeScreen') },
            4000
          )
        );
      }
    
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
          this.props.navigation.navigate('App');
        }
      }
      

  render() {
    return (
      
    
      <View style={{ flex: 1, backgroundColor: "rgba(113,89,193,1)", flexDirection: 'column', justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>
        
        <View style={{ padding:20 }}> 
          <Text style={styles.calendario}>Calendário Religioso Marista</Text>
        </View>
        <View style={{alignItems:"center", padding:30}} >
          <Image
            source={require("../../assets/images/VCL.png")}
            resizeMode="contain"
            style={styles.vcl}/>
        </View>
        <View style={{ alignItems: 'center', padding: 30 }}>
          <Image
            source={require("../../assets/images/umbrasil-horizontal-branca_sem_fundo.png")}
            resizeMode="contain"
            style={styles.umb}/>
        </View>
      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "rgba(113,89,193,1)",
    flexDirection: "row"
  },
  calendario: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    fontFamily: "roboto-700",
    textAlign: "center",
    // marginTop: 40 
  },
  vcl: {
    width: 120,
    height: 120,
    alignItems: 'center' 
  },
  umb: {
    width: 200,
    height: 50,
    flexDirection: "column-reverse"
  }
});

export default SplashScreen;


