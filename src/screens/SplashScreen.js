import React from 'react';
import { View, Text } from 'react-native';

class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
           setTimeout(
            () => { resolve('HomeScreen') },
            1000
          )
        );
      }
    
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
          this.props.navigation.navigate('App');
        }
      }
    

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Calendário Religioso Marista
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1'
  },
  textStyles: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    // fontWeight: 'bold' 
  }
}

// const mapDispatchToProps = ({ updateHighScores });

export default SplashScreen;