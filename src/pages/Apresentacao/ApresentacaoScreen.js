import React, {Component} from 'react';
import { Image, View, StyleSheet, ScrollView, TextInput } from 'react-native'
// import Slider from 'react-native-slider';

import { Divider, Button, Block, Text, Switch } from '../../components';
import { theme, mocks } from '../../constants';

class ApresentacaoScreen extends Component {
    render () {
        return (
            // <View style={{flex:1, justifyContent: 'center'}}>
            //     <View style={{alignItems: 'center'}}>
            //     <Text style={{fontSize: 50}}>Tela de Apresentação</Text>
            //     </View> 
            //     <View style={{margin:20}}>
            //     <Button 
            //         title = 'Ir para Tela Detalhes'
            //         onPress = { () => this.props.navigation.navigate('Details')}
            //     />
            //     </View>
            // </View>

            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold style={{color:"#fff"}}>Apresentação</Text>
                    <Button>
                        {/* <Image
                        //   source={profile.avatar}
                        style={styles.avatar}
                        /> */}
                    </Button>
                    
                </Block>
                <ScrollView>
                <Block style={styles.description}>
                  <Text>
                    <Text gray height={22}>
                        Tradicionalmente o Calendário Religioso é empregado na dinamização da oração pessoal e comunitária dos Maristas de
                        Champagnat. Sua composição é bem diversificada para melhor contribuir com a caminhada espiritual de quem o usa de 
                        forma individual ou em grupo.{"\n"}
                    </Text>
                    <Text gray height={22}>{"\n"}
                         Segundo a tradição Marista, cada dia da semana tem uma dedicação especial, a saber:
                    </Text>
                    <Text gray height={22}>{"\n"} 
                    Domingo – <Text bold>Dia do Senhor{"\n"}</Text>
                    Segunda-feira – <Text bold>Almas do purgatório{"\n"}</Text>
                    Terça-feira – <Text bold>Anjo da Guarda{"\n"}</Text>
                    Quarta-feira – <Text bold>São José{"\n"}</Text>
                    Quinta-feira – <Text bold>Eucaristia{"\n"}</Text>
                    Sexta-feira – <Text bold>Sagrado Coração de Jesus{"\n"}</Text>
                    Sábado – <Text bold>Nossa Senhora{"\n"}</Text>{"\n"}
                    </Text>
                    
                    <Text gray height={22}>
                    Pensando, sobretudo, nos grupos, segue uma apresentação detalhada do Calendário que, talvez, ajude na sua melhor utilização. Ao final desta apresentação, encontra-se uma sugestão de roteiro para oração diária com a utilização do Calendário.{"\n"} </Text>
 
                    <Text orange bold>Tema do ano:</Text> <Text gray height={22}>Em 1985, o Capítulo geral dos Irmãos Maristas, tomando consciência da riqueza de compartilhar o carisma Marista com os Leigos, promove o Movimento Champagnat da Família Marista.  As Constituições dos Irmãos, no artigo 164.4, descreve sua identidade. O Superior-Geral do Instituto Marista,  em coordenação com as estruturas de animação do Movimento, garante que este permaneça fiel ao espírito de Champagnat.{"\n"}
                    {"\n"}</Text>

                    <Text orange  bold> {"\n"}Abertura dos meses: </Text> <Text gray height={22}>Na introdução de cada mês, há uma reflexão ou testemunho sobre o “XXII Capítulo Geral” elaborada pelos participantes brasileiros e pelos superiores-gerais Emili Turú e Ernesto Sánchez. Reservamos o mês de maio para refletirmos a carta do Ir. Francisco, primeiro Irmão Superior-Geral, 
                    sobre a importância de Maria e palavras do Papa Francisco sobre as juventudes no mês de outubro, lembrando que teremos um Sínodo com este tema. {"\n"}</Text>

                    <Text orange  bold>{"\n"}Liturgia:</Text><Text gray height={22}>Neste tópico estão registradas as leituras bíblicas previstas para a Liturgia da Palavra do dia, de acordo com o Diretório Litúrgico da CNBB. Por meio das citações, pode-se usar a própria Bíblia para ler os textos indicados.  {"\n"}</Text>

                  <Text orange  bold>{"\n"}Santo:</Text>  <Text gray height={22}> Os Santos e Santas, indicados a cada dia, são a porção da Igreja que já goza da plena companhia de Deus e, por isso, são também intercessores daquela outra porção que ainda caminha neste mundo para a casa do Pai. Recordá-los a cada manhã é
                  tanto uma forma de intensificar a comunhão que une a Igreja inteira, como também um modo de se beneficiar pessoal e comunitariamente de exemplos luminosos na caminhada cristã. {"\n"}</Text>

                  <Text orange  bold>{"\n"}Testemunho de vida cristã na América Latina:</Text><Text gray height={22}> São recordadas pessoas de diferentes Igrejas cristãs e mesmo de outras tradições religiosas que, por causa da defesa da justiça e da promoção dos direitos humanos, sofreram perseguição e morte violenta. Elas também são testemunhas do amor de Deus por seus filhos e filhas e seu exemplo pode  animar a vida e a missão Maristas. {"\n"}</Text>

                  <Text  orange bold> {"\n"}Espiritualidade:</Text><Text gray height={22}>  Este ano são apresentados recortes de textos e documentos referentes ao MChFM, à tradição Marista e documentos da Igreja latino-americana e universal para a meditação diária. Em alguns dias, estão relacionados ao tema litúrgico celebrado na Igreja ou a alguma comemoração especificamente Marista. Recomenda-se que sua leitura seja seguida de um período de silêncio, ainda que breve, para sua melhor compreensão e interiorização. {"\n"}</Text>

                  <Text orange  bold> {"\n"}Lembrete:</Text><Text gray height={22}> É um elo entre a comunidade que ora e a vida do Instituto e da Igreja. Ao comunicar eventos nacionais e internacionais, que dinamizam a agenda Marista e eclesial, sugere, também, por meio da oração, solidária comunhão com seus organizadores e participantes. {"\n"}</Text>

                  <Text  orange  bold> {"\n"}Aniversário:</Text><Text gray height={22}>  Os aniversários rememoram momentos significativos da história Marista e oferecem à comunidade oportunidade de recordar aqueles que os protagonizaram. Sua memória, celebrada na oração, é também ação de graças a Deus pelo dinamismo que tem caracterizado o Instituto desde sua fundação. {"\n"}</Text>

                  <Text  orange bold> {"\n"}Intenção:</Text><Text gray height={22}>  As intenções recolhem elementos explicitados nos tópicos anteriores, permitindo unir-se ao Instituto e à Igreja num grande movimento de intercessão. As intenções do Calendário podem ser complementadas com outras que surgirem espontaneamente.
                  </Text>
                </Text>

                </Block>
                </ScrollView>
            </Block>
                 
            
        ); 
    }
}

ApresentacaoScreen.navigationOptions = {
    // title: 'Apresentação',
    // backgroundColor: #524203,
    // headerRight: <Button/ />
  }
export default ApresentacaoScreen;
  
  
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