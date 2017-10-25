import React from 'react';
import { Text, View } from 'react-native';
import GenericCurrencyField from './src/components/GenericCurrencyField';
import RoundButton from './src/components/RoundButton';
import Currency from './src/Model/Currency';
import CurrencyFactory from './src/Model/CurrencyFactory';
import ButtonPressManager from './src/Model/ButtonPressManager';
const buttonMargin = {horizontal: 65, vertical: 35}

export default class App extends React.Component {


  constructor(props){

    super(props);

    this.buttonArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9',  '.', '0',  'DEL'];

    // initialising the state of the component
    this.state = {

      currency1: CurrencyFactory.createCurrencyWidthIdentifier(Currency.currencyList.nigeria),
      currency2: CurrencyFactory.createCurrencyWidthIdentifier(Currency.currencyList.britain),
      currency1isHighlighted: true,
      currency2isHighlighted: false,
      lastPressedButtonValue: ''
    }
    this.currentlySelectedCurrecncy = this.state.currency1;
    this.alternateCurrency = this.state.currency2;
  }

  buttonPressed = ( text, isDeleteButton) => {
    console.log("The button pressed was = " + text + " & delete is " + isDeleteButton  );
    /*when button is pressed we want to do 2 things
    1. Depending on what currencyField is selected (get the c)*/
    let resultingStringAfterButtonPress = ButtonPressManager.numberPressed(this.currentlySelectedCurrecncy.currencyStringDisplayValue, text, isDeleteButton, this.state.lastPressedButtonValue);
    let alternateCurrencyCalculation = parseFloat(resultingStringAfterButtonPress).toFixed(2) * this.currentlySelectedCurrecncy.exchangeRateForAlternateCurrency(this.alternateCurrency);

    this.currentlySelectedCurrecncy.currencyStringDisplayValue = resultingStringAfterButtonPress;
    this.alternateCurrency.currencyStringDisplayValue = alternateCurrencyCalculation.toFixed(2).toString();

    this.setState({ currency1: this.state.currency1, currency2: this.state.currency2, lastPressedButtonValue: text});
}
  fieldTapped = (fieldIndex) =>{

    let FIELD_ONE = 0;

    //IF THE FIELD TAPPED ON IS FIELD ONE
    if(fieldIndex == FIELD_ONE){
      this.currentlySelectedCurrecncy = this.state.currency1;
      this.alternateCurrency = this.state.currency2;
      this.setState({
        currency1isHighlighted: true, currency2isHighlighted: false
      });
    }

    else{
      this.currentlySelectedCurrecncy = this.state.currency2;
      this.alternateCurrency = this.state.currency1;
      this.setState({
        currency1isHighlighted: false, currency2isHighlighted: true
      });
    }
  }



  render() {

let currency1Description = this.state.currency1.exchangeRateDetail(this.state.currency2);

let currency2Description = this.state.currency2.exchangeRateDetail(this.state.currency1);

    return (
      <View style={viewStyles.container}>

        {/* this view represents the header Area */}
        <View style ={viewStyles.headerArea}>
          <Text style={textStyles.header}> CURRENCY CONVERTER</Text>
        </View>

        <View style={viewStyles.currencyBlockBackground}>

          <GenericCurrencyField
            currencyDescription={this.state.currency1.shorthand}
            flagIcon={require('./src/images/Nigeria.png') }
            displayAmountNumber={this.state.currency1.currencyStringDisplayValue}
            fieldIndex={0}
            fieldTapped={(index)  => this.fieldTapped(index)}
            isHighlighted={this.state.currency1isHighlighted}
          />


          <GenericCurrencyField
            currencyDescription={this.state.currency2.shorthand}
            flagIcon={require('./src/images/uk.png') }
            displayAmountNumber={this.state.currency2.currencyStringDisplayValue}
            fieldIndex={1}
            fieldTapped={(index)=> this.fieldTapped(index)}
            isHighlighted={this.state.currency2isHighlighted}
          />

          <View style={viewStyles.rateDetail}>
            <Text style= {textStyles.currencyDescription}> {currency1Description}</Text>
            <Text style= {textStyles.currencyDescription}> {currency2Description}</Text>
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
