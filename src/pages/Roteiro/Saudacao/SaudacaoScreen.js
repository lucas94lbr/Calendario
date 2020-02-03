import React, {Component} from 'react';
import { Image, View, StyleSheet, ScrollView, TextInput } from 'react-native'

import { Button, Block, Text } from '../../../components';
import { theme, mocks } from '../../../constants';

class SaudacaoScreen extends Component {
    render () {
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold style={{color:"#fff"}}>Saudação Inicial</Text>
                    
                </Block>
                <ScrollView>
                <Block style={styles.description}>
                    <Text>
                        <Text gray height={22}>
                            D – Laudetur Jesus Christus!{"\n"}
                            T – Et Maria mater ejus. Amen.{"\n"}
                            D – Louvado seja Nosso Senhor Jesus Cristo!{"\n"}
                            T – E sua mãe, Maria Santíssima. Amém!{"\n"}
                        </Text>
                    </Text>

                </Block>
                </ScrollView>
            </Block>
                 
            
        ); 
    }
}

SaudacaoScreen.navigationOptions = {
    // title: 'Apresentação',
    // backgroundColor: #524203,
    // headerRight: <Button/ />
  }
export default SaudacaoScreen;
  
  
const styles = StyleSheet.create({
    header: {
      paddingHorizontal: theme.sizes.base * 2,
      backgroundColor: "rgba(113,89,193,1)",
      padding:15
    },
    avatar: {
      height: theme.sizes.base * 2.2,
      width: theme.sizes.base * 2.2, 
    },
    inputs: {
      marginTop: theme.sizes.base * 0.7,
      paddingHorizontal: theme.sizes.base * 2,
    },
    inputRow: {
      alignItems: 'flex-end'
    },
    sliders: {
      marginTop: theme.sizes.base * 0.7,
      paddingHorizontal: theme.sizes.base * 2,
    },
    description:{
        fontSize:20,
        paddingHorizontal: theme.sizes.base * 2,
        paddingVertical: theme.sizes.padding,
    },

    thumb: {
      width: theme.sizes.base,
      height: theme.sizes.base,
      borderRadius: theme.sizes.base,
      borderColor: 'white',
      borderWidth: 3,
      backgroundColor: theme.colors.secondary,
    },
    toggles: {
      paddingHorizontal: theme.sizes.base * 2,
    }
  })