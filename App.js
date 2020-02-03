import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Importação das Telas
import SplashScreen        from './src/pages/SplashScreen/SplashScreen';
import HomeScreen          from './src/pages/Home/HomeScreen';
import ApresentacaoScreen  from './src/pages/Apresentacao/ApresentacaoScreen';
import CalendarioScreen    from './src/pages/Calendario/CalendarioScreen';
import ConfiguracaoScreen  from './src/pages/Configuracao/ConfiguracaoScreen';
import LiturgiaScreen      from './src/pages/Liturgia/LiturgiaScreen';
import OracaoScreen        from './src/pages/Oracoes/OracaoScreen';
import RoteiroScreen       from './src/pages/Roteiro/RoteiroScreen'; 
import SaudacaoScreen      from './src/pages/Roteiro/Saudacao/SaudacaoScreen'; 
import SalveRainhaIndexScreen  from './src/pages/Roteiro/SalveRainha/SalveRainhaIndexScreen'; 
import InvocacaoSalveRainhaScreen  from './src/pages/Roteiro/SalveRainha/InvocacaoSalveRainhaScreen'; 
// import SalveRainha2  from './src/pages/Roteiro/SalveRainha/OracaoConclusivaSalveRainha'; 
// import SalveRainha3 from './src/pages/Roteiro/SalveRainha/SalveRainha'; 

//Declaração das Telas do App
const HomeNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Apresentacao: ApresentacaoScreen,
  Calendario: CalendarioScreen,
  Configuracao: ConfiguracaoScreen,
  Liturgia: LiturgiaScreen,
  Oracao: OracaoScreen,
  Roteiro: RoteiroScreen,
  Saudacao: SaudacaoScreen,
  SalveRainha: SalveRainhaIndexScreen,
  Invocacao: InvocacaoSalveRainhaScreen
  // SalveRainha2: OracaoConclusivaSalveRainha,
  // SalveRainha3: SalveRainha,
});
//Telas da Página Inicial
const AppNavigator = createStackNavigator (
  {
    Home: {
      screen: HomeScreen
    },
    Apresentacao: {
      screen: ApresentacaoScreen
    },
    Calendario: {
      screen: CalendarioScreen
    },
    Configuracao: {
      screen: ConfiguracaoScreen
    }, 
    Oracao: {
      screen: OracaoScreen,
    }, 
    Liturgia: {
      screen: LiturgiaScreen,
    },
    Roteiro: {
      screen: RoteiroScreen
    },
    Saudacao: {
      screen: SaudacaoScreen
    },
    Invocacao:{
      screen: InvocacaoSalveRainhaScreen
    }
    // SalveRainha2: {
    //   screen: OracaoConclusivaSalveRainha
    // },
    // SalveRainha3: {
    //   screen: SalveRainha
    // }
  // },

  });

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
