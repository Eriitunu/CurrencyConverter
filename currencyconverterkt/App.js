import React from 'react';
import { Text, View } from 'react-native';
import GenericCurrencyField from './src/components/GenericCurrencyField';

 
export default class App extends React.Component {


  render() {
    return (
      <View style={viewStyles.container}>

        {/* this view represents the header Area */}
        <View style ={viewStyles.headerArea}>
          <Text style={textStyles.header}> CURRENCY CONVERTER</Text>
        </View>

        <View style={viewStyles.currencyBlockBackground}>
          <GenericCurrencyField
            currencyDescription='NGN'
            flagIcon={require('./src/images/Nigeria.png') }
            displayAmountNumber={0}
          />
          <GenericCurrencyField
            currencyDescription='GBP'
            flagIcon={require('./src/images/uk.png') }
            displayAmountNumber={0}
          />
          <View style={viewStyles.rateDetail}>
            <Text style= {textStyles.currencyDescription}> 1 NGN = 0.021 GBP</Text>
            <Text style= {textStyles.currencyDescription}> 1 GBP = 465.8221 NGN</Text>
          </View>
        </View>

      </View>
    );
  }

}

const viewStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
    flexDirection: 'column',
  },
  //the style of the header area for the app
  headerArea: {
    width: '100%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyBlockBackground: {
    backgroundColor: '#252525',
    width: '100%',
    height: '30%',
  },
  rateDetail:{
    flex: 1.5,
    alignItems: 'center',
  }

};


const textStyles = {
  header:{
    fontSize: 17,
    fontWeight: 'bold',
  },
  currencyDescription: {
    fontSize: 17,
    color: 'white',
    margin: 5,
  }
};
