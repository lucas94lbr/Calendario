import React, { Component } from 'react'
import { View, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../../components';
import { theme, mocks } from '../../constants';
import ApresentacaoScreen from '../Apresentacao/ApresentacaoScreen';

const { width } = Dimensions.get('window');

class Browse extends Component {
  state = {
    active: 'Products',
    categories: [],
  }

 //Ocultar Barra de Navegação da Tela Principal 
    static navigationOptions = {
        header: null
    }

//   componentDidMount() {
//     this.setState({ categories: this.props.categories });
//   }

//   handleTab = tab => {
//     const { categories } = this.props;
//     const filtered = categories.filter(
//       category => category.tags.includes(tab.toLowerCase())
//     );

//     this.setState({ active: tab, categories: filtered });
//   }

//   renderTab(tab) {
//     const { active } = this.state;
//     const isActive = active === tab;

//     return (
//       <TouchableOpacity
//         key={`tab-${tab}`}
//         onPress={() => this.handleTab(tab)}
//         style={[
//           styles.tab,
//           isActive ? styles.active : null
//         ]}
//       >
//         <Text size={16} medium gray={!isActive} secondary={isActive}>
//           {tab}
//         </Text>
//       </TouchableOpacity>
//     )
//   }

  render() {


    return (
        
      <Block style={{backgroundColor: "rgba(113,89,193,0.3)"}}>
        <View style={{alignItems:"center", padding:20}} >
          <Image center style={{ margin:5, }} source={require("../../assets/icons/vcl-mini.png")} />
        </View>

        <Block flex={false} row center space="between" style={styles.header}>        
          <Text h1 bold style={{color:"#644fbe"}}>Calendário Religioso Marista</Text>
        </Block>

        {/* <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block> */}

        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: theme.sizes.base * 2}} >  
          <Block flex={false} row space="between" style={styles.categories}>
          
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Apresentacao')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/apresentacao.png")} />
                  </Badge>
                  <Text medium height={20}>Apresentação</Text>
                  
                </Card>
              </TouchableOpacity>          
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Liturgia')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/liturgia.png")} />
                  </Badge>
                  <Text medium height={20}>Liturgia</Text>
                  
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Oracao')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/oracao.png")} />
                  </Badge>
                  <Text medium height={20}>Oração do Dia</Text>
                  
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Calendario')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/calendario.png")} />
                  </Badge>
                  <Text medium height={20}>Calendario</Text>
                  
                </Card>
              </TouchableOpacity>
            
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Roteiro')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/roteiro.png")} />
                  </Badge>
                  <Text medium height={20}>Roteiro de Orações</Text>
                  
                </Card>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress = { () => this.props.navigation.navigate('Configuracao')}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(234,117,37,0.25)">
                    <Image source={require("../../assets/icons/configs.png")} />
                  </Badge>
                  <Text medium height={20}>Configurações</Text>
                  
                </Card>
              </TouchableOpacity>
          
          </Block>

        </ScrollView>
      </Block>
    )
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
}

export default Browse;

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