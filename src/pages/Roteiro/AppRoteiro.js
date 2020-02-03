import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Importação das Telas
import RoteiroScreen  from './src/pages/Roteiro/RoteiroScreen'; 
import SaudacaoScreen  from './src/pages/Roteiro/Saudacao/SaudacaoScreen'; 

//Declaração das Telas do App
const HomeNavigator = createSwitchNavigator({
    Roteiro: RoteiroScreen,
    Saudacao: SaudacaoScreen
});
//Telas da Página Inicial
const AppNavigator = createStackNavigator (
  {
    Roteiro: {
      screen: RoteiroScreen
    },
    Saudacao: {
      screen: SaudacaoScreen
    }
  });

//Inicializador do app
const InitialNavigator = createSwitchNavigator({
  App: AppNavigator
});


//Renderização do app
const AppContainer = createAppContainer (InitialNavigator);

export default class AppRoteiro extends Component {
  render() {
    return <AppContainer/>;
  }
}
