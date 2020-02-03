// import React, {Component} from 'react';
// import {Button, View, Text} from 'react-native';

// class ConfiguracaoScreen extends Component {
//     render () {
//         return (
//             <View style={{flex:1, justifyContent: 'center'}}>
                
//                 <View style={{alignItems: 'center'}}>
//                 <Text style={{fontSize: 50}}>Tela de Configuração</Text>
//                 </View>
    
//                 <View style={{margin:20}}>
//                 <Button
//                     title = 'Ir para Tela Detalhes'
//                     onPress = { () => this.props.navigation.navigate('Details')}
//                 />
//                 </View>
                
//             </View>
//         ); 
//     }
// }

// ConfiguracaoScreen.navigationOptions = {
//     title: 'Oração do dia',
//     // backgroundColor: #524203,
//     // headerRight: <Button/ />
//   }
// export default ConfiguracaoScreen;
  
  
import React, { Component } from 'react'
import { Image, StyleSheet, ScrollView, TextInput } from 'react-native'
// import Slider from 'react-native-slider';

import { Divider, Button, Block, Text, Switch } from '../../components';
import { theme, mocks } from '../../constants';


class ConfiguracaoScreen extends Component {
// class Settings extends Component {
  state = {
    budget: 850,
    monthly: 1700,
    notifications: true,
    newsletter: false,
    editing: null,
    profile: {},
  }

 

  render() {
    const { profile, editing } = this.state;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Configurações</Text>
          <Button>
            <Image
            //   source={profile.avatar}
              style={styles.avatar}
            />
          </Button>
        </Block>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text  bold  style={{ marginBottom: 10 }}>Clique aqui para fazer Download da Versão PDF</Text>
               
              </Block>
              <Text medium secondary onPress={() => this.toggleEdit('username')}>
              
              </Text>
            </Block>
            
          </Block>

          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

         

          <Block style={styles.toggles}>
            <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2 }}>
              <Text bold>Notificações</Text>
              <Switch
                value={this.state.notifications}
                onValueChange={value => this.setState({ notifications: value })}
              />
            </Block>
            
            <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2 }}>
              <Text bold>Newsletter</Text>
              <Switch
                value={this.state.newsletter}
                onValueChange={value => this.setState({ newsletter: value })}
              />
            </Block>
          </Block>

        </ScrollView>
      </Block>
    )
  }
}

// Settings.defaultProps = {
//   profile: mocks.profile,
// }

export default ConfiguracaoScreen;
// export default Settings;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
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