// insert React and react native boilerpplate code here
import React, {Component} from 'react';
import {Text, Image, TouchableHighlight, View} from 'react-native';

const amountSize = 30;

class GenericCurrencyField extends Component {

  constructor(props){
    // this means it will go to thr parent component and execute the code in the PARENT COMPONENTS'S constructor
    super(props);
  }

  // render has to be invoked if the component is to be drawn on the screen.
  render(){

    let amountStyle = (this.props.isHighlighted)  ? textStyles.highlightedAmountNumber : textStyles.displayAmountNumber;

    return (

    <TouchableHighlight
      activeOpacity={0.95}
      underlayColor={'transparent'}
      onPress={this.props.fieldTapped.bind(this, this.props.fieldIndex)}
      style={viewStyles.container}
    >
      <View style={viewStyles.container}>

        <View style={viewStyles.amountFieldArea}>
          <Image source={this.props.flagIcon} resizeMode={'cover'} style={viewStyles.flagIcon} />
          <Text style={amountStyle}>{this.props.displayAmountNumber}</Text>
        </View>

        <View style={viewStyles.currencyDescriptionField}>
          <Text style={textStyles.currencyDescription}>{this.props.currencyDescription}</Text>

        </View>

      </View>
</TouchableHighlight>
    );

  }

}

const viewStyles = {

    container: {
      backgroundColor: 'grey',
      width: '100%',
      flex:  2,
      flexDirection: 'row',
      marginBottom: 1.5,
    },

    amountFieldArea: {
      backgroundColor: '#414141',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 7.5,
      paddingHorizontal: 10,
    },

    currencyDescriptionField: {
      backgroundColor: '#D8D8D8',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 2.5,
    },

    flagIcon: {
      width: 38,
      height: 38,
    }

};

const textStyles = {
    currencyDescription: {
      fontSize: 20,
      fontWeight: '500',
    },
    displayAmountNumber: {
      fontSize: amountSize,
      color: 'white'
    },

    highlightedAmountNumber: {
      fontSize: amountSize,
      color: '#F6A523'


    }
};

// this line of code allows the class to be accesible in other parts of the app (in other files/ classes)
export default GenericCurrencyField;
