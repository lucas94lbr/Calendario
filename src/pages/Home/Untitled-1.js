import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

import { Container, Header, Body, TabsContainer, TabItem, TabText } from './styles';
  
 
class HomeScreen extends Component {
    
    //Ocultar Barra de Navegação da Tela Principal 
    static navigationOptions = {
        header: null
    }
 
    render () {
        return (
            <Container>
                {/* <Header>
                    <Text style={{fontSize: 40, fontWeight: 'bold', color: '#644fbe' }}>Seja bem-vindo, ao</Text>
                    <Text style={{fontSize: 38, alignItems: 'center' , justifyContent: "center", color: "#fff"}}> Calendário Religioso Marista</Text>
                </Header> */}

                <Body>
                    <View style={{ margin: 10 }} >
                        <Button
                        title = 'Ir para Apresentação'
                        onPress = { () => this.props.navigation.navigate('Apresentacao')}
                        />
                    </View>
                
                    <View style={{margin:10}}>
                        <Button
                        title = 'Ir para Tela Oração do dia'
                        onPress = { () => this.props.navigation.navigate('Oracao')}
                        />
                    </View>

                    <View style={{margin:10}}>
                        <Button
                        title = 'Ir para Calendário'
                        onPress = { () => this.props.navigation.navigate('Calendario')}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <Button
                        title = 'Ir para Tela Roteiro de Orações'
                        onPress = { () => this.props.navigation.navigate('Roteiro')}
                        />
                    </View>

                    <View style={{margin:10}}>
                        <Button
                        title = 'Ir para Tela de Configurações'
                        onPress = { () => this.props.navigation.navigate('Configuracao')}
                        />
                    </View>
                </Body>
            </Container>
        ); 
    }
}


export default HomeScreen;











