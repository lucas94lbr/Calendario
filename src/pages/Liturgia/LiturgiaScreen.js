

import React, {Component} from 'react';
import { Image, View, StyleSheet, ScrollView, TextInput } from 'react-native'

import { Divider, Button, Block, Text, Switch } from '../../components';
import { theme, mocks } from '../../constants';

class LiturgiaScreen extends Component {
   
   render () {
      return (
                
      <Block style={{backgroundColor: "rgba(113,89,193,0.8 )"}}>
         <Block flex={false} row center space="between" style={styles.header}>
            <Text h1 bold style={{color:"#fff"}}>Liturgia</Text>
               <Button>
                  {/* <Image
                     //   source={profile.avatar}
                        style={styles.avatar}
                  /> */} 
               </Button>
         </Block>   
         <ScrollView>     
            <Block>
                  <Text style={{margin: 20}} >
                     <Text style={styles.bodyText} >Leituras dominicais </Text>
                        <Text style={styles.bodyTextDates}>  Ano A (Evangelho de Mateus) </Text>{"\n"}
                     <Text style={styles.bodyText}>Leituras semanais  </Text>
                        <Text style={styles.bodyTextDates}>  Ano Par </Text>
                  </Text>

                  <Text style={styles.cabecalho}>
                     PRINCIPAIS FESTAS VARIÁVEIS
                  </Text>
                  <Text style={{margin: 20}} >
                     <Text style={styles.bodyText} >- Epifania de Jesus </Text> 
                     <Text style={styles.bodyTextDates} >5 de janeiro</Text>{"\n"}
                     <Text style={styles.bodyText}>- Batismo de Jesus </Text>
                     <Text style={styles.bodyTextDates}>12 de janeiro</Text>{"\n"}
                     <Text style={styles.bodyText}>- Quarta-feira de Cinzas </Text>
                     <Text style={styles.bodyTextDates}>26 de fevereiro</Text>{"\n"}
                     <Text style={styles.bodyText}>- Páscoa da Ressurreição </Text>
                     <Text style={styles.bodyTextDates}> 12 de abril</Text>{"\n"}
                     <Text style={styles.bodyText}>- Ascensão de Jesus </Text>
                     <Text style={styles.bodyTextDates} >24 de junho</Text>{"\n"}
                     <Text style={styles.bodyText}>- Pentecostes </Text>
                     <Text style={styles.bodyTextDates}>31 de junho</Text>{"\n"}
                     <Text style={styles.bodyText}>- Santíssima Trindade </Text>
                     <Text style={styles.bodyTextDates}>7 de junho</Text>{"\n"}
                     <Text style={styles.bodyText}>- Santíssimo Corpo e Sangue de Cristo </Text>
                     <Text style={styles.bodyTextDates}>11 de junho</Text>{"\n"}
                     <Text style={styles.bodyText}>- Sagrado Coração de Jesus </Text>
                     <Text style={styles.bodyTextDates}> 19 de junho</Text>{"\n"}
                     <Text style={styles.bodyText}>- São Pedro e São Paulo </Text>
                     <Text style={styles.bodyTextDates}> 28 de junho</Text>{"\n"}
                     <Text style={styles.bodyText}>- Assunção de Maria </Text>
                     <Text style={styles.bodyTextDates}> 16 de agosto</Text>{"\n"}
                     <Text style={styles.bodyText}>- Todos os Santos e Santas de Deus </Text>
                     <Text style={styles.bodyTextDates}> 1º de novembro</Text>{"\n"}
                     <Text style={styles.bodyText}>- Cristo Rei do Universo </Text>
                     <Text style={styles.bodyTextDates}>22 de novembro</Text>{"\n"}
                     <Text style={styles.bodyText}>- 1º Domingo do Advento </Text>
                     <Text style={styles.bodyTextDates}>29 de novembro</Text>{"\n"}
                     <Text style={styles.bodyText}>- Sagrada Família</Text>
                     <Text style={styles.bodyTextDates}> 27 de dezembro</Text>{"\n"}
                  </Text>
            </Block>
         </ScrollView>         
      </Block>
      );
   }
}



export default LiturgiaScreen;


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
   bodyText: {
      fontWeight: "bold",
      color: "#fff",
      textAlign: "right",
      fontSize:20
    },
    bodyTextDates: {
      fontWeight: "bold",
      color: "#fcb034",
      textAlign: "left",
      fontSize:20


    },
   cabecalho: {
      marginLeft:30,
      marginTop:20,
      marginBottom:25,
     fontSize: 27,
     color: "#fff",
     fontWeight: "bold"
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