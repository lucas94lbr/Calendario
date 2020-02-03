import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Importação das Telas
import SplashScreen  from './src/pages/SplashScreen/SplashScreen';
import HomeScreen  from './src/pages/Home/HomeScreen';
import ApresentacaoScreen  from './src/pages/Apresentacao/ApresentacaoScreen';
import CalendarioScreen  from './src/pages/Calendario/CalendarioScreen';
import ConfiguracaoScreen  from './src/pages/Configuracao/ConfiguracaoScreen';
import OracaoScreen  from './src/pages/Oracoes/OracaoScreen';
import RoteiroScreen  from './src/pages/Roteiro/RoteiroScreen'; 

//Declaração das Telas do App
const HomeNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Apresentacao: ApresentacaoScreen,
  Calendario: CalendarioScreen,
  Configuracao: ConfiguracaoScreen,
  Oracao: OracaoScreen,
  Roteiro: RoteiroScreen
});
//Telas da Página Inicial
const AppNavigator = createStackNavigator (
  {
    Home: {
      screen: HomeScreen
  
      //   },
  //   Apresentacao: {
  //     screen: ApresentacaoScreen
  //   },
  //   Calendario: {
  //     screen: CalendarioScreen
  //   },
  //   Configuracao: {
  //     screen: ConfiguracaoScreen
  //   }, 
  //   Oracao: {
  //     screen: OracaoScreen,
  //   },
  //   Roteiro: {
  //     screen: RoteiroScreen
  //   }
  // },
  // {
  //   initialRouteName: 'Home'
  // }
);

//Inicializador do app
const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator
});


//Renderização do app
const AppContainer = createAppContainer (InitialNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}
