import React, { Component } from 'react'
import { View, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../../components';
import { theme, mocks } from '../../constants';
import ApresentacaoScreen from '../Apresentacao/ApresentacaoScreen';

const { width } = Dimensions.get('window');

class RoteiroScreen extends Component {

  render() {


    return (
        
      <Block style={{backgroundColor: "rgba(113,89,193,0.3)"}}>
        <View style={{alignItems:"center", padding:20}} >
          {/* <Image center style={{ margin:5, }} source={require("../../assets/icons/vcl-mini.png")} /> */}
        </View>

        <Block flex={false} row center space="between" style={styles.header}>        
          <Text h1 bold style={{color:"#644fbe"}}>Roteiro de Orientação para a Oração Diária</Text>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {/* {tabs.map(tab => this.renderTab(tab))} */}
          <Text>
              <Text>
                Com o intuito de facilitar a dinâmica da Oração Diária, sugerimos um roteiro que nos sintoniza com a Comunidade orante Marista.
              </Text>
              
          </Text>
        </Block> 

        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: theme.sizes.base * 2}} >  
          <Block flex={false} row space="between" style={styles.categories}>
          
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Saudacao')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/apresentacao.png")} />
                  </Badge>
                  <Text medium height={20}>Saudação Inicial</Text>
                  
                </Card>
              </TouchableOpacity>          
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('SalveRainha')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/salverainha.png")} />
                  </Badge>
                  <Text medium height={20}>Salve-Rainha</Text>
                  
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Oracao')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/oracao.png")} />
                  </Badge>
                  <Text medium height={20}>Invocações</Text>
                  
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Invocacao')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/intencoes.png")} />
                  </Badge>
                  <Text medium height={20}>Intenções</Text>
                  
                </Card>
              </TouchableOpacity>
            
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Roteiro')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/oferecimento.png")} />
                  </Badge>
                  <Text medium height={20}>Oferecimentos</Text>
                  
                </Card>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Configuracao')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/oracaomarista.png")} />
                  </Badge>
                  <Text medium height={20}>Orações Tradicionais Marista</Text>
                  
                </Card>
              </TouchableOpacity>
          
          </Block>

        </ScrollView>
      </Block>
    )
  }
}

RoteiroScreen.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
}
export default RoteiroScreen;

// export default Browse;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop:15,
    marginBottom:15,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
  }
})
  
  