import React from 'react';
import { Text, View } from 'react-native';
import GenericCurrencyField from './src/components/GenericCurrencyField';
import RoundButton from './src/components/RoundButton';

const buttonMargin = {horizontal: 65, vertical: 35}

export default class App extends React.Component {


  constructor(props){

    super(props);

    this.buttonArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9',  '.', '0',  'DEL'];
  }

  buttonPressed = ( text, isDeleteButton) => {
    console.log("The button pressed was = " + text + " & delete is " + isDeleteButton  );
  }


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

        <View style = {viewStyles.keypad}>
          {
            this.buttonArray.map((data, index)  => {
                if (data == 'DEL'){
                  return(
                    <RoundButton
                    key={index}
                    number={data}
                    isDeleteButton={true}
                    buttonPressed={(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                    marginStyling={{ marginBottom: buttonMargin.vertical}}
                    />
                  );
                }
                else if ((index + 1)% 3 == 0) {
                  return (
                    <RoundButton
                    key={index}
                    number={data}
                    buttonPressed={(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                    marginStyling={{ marginBottom: buttonMargin.vertical}}
                    />
                  );

                }
                else{
                  return(
                    <RoundButton
                      key={index}
                      number={data}
                      isDeleteButton={false}
                      buttonPressed={(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                      marginStyling={{marginRight: buttonMargin.horizontal, marginBottom: buttonMargin.vertical}}
                    />
                  );
                }
            })
          }

        </View>


      </View>
    );
  }

}

const viewStyles = {
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
  },
  keypad: {
    flexDirection : 'row',
    flexWrap: 'wrap',
    padding: 25,
    width: '100%',
    height: '60%',
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
