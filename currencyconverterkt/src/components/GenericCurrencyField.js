// insert React and react native boilerpplate code here
import React, {Component} from 'react';
import {Text, Image, TouchableHighlight, View} from 'react-native';

class GenericCurrencyField extends Component {

  constructor(props){
    // this means it will go to thr parent component and execute the code in the PARENT COMPONENTS'S constructor
    super(props);
  }

  // render has to be invoked if the component is to be drawn on the screen.
  render(){

    return (
      <View style={viewStyles.container}>

        <View style={viewStyles.amountFieldArea}>
        <Image source={this.props.flagIcon} resizeMode={'cover'} style={viewStyles.flagIcon} />
          <Text style={textStyles.displayAmountNumber}>{this.props.displayAmountNumber}</Text>
        </View>

        <View style={viewStyles.currencyDescriptionField}>
          <Text style ={textStyles.currencyDescription}>{this.props.currencyDescription}</Text>

        </View>

      </View>

    );

  }

}

const viewStyles = {

    container: {
      backgroundColor: 'lightblue',
      width: '100%',
      flex:  2,
      flexDirection: 'row',
      marginBottom: 3,
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
      fontSize: 30,
      color: 'white',
    },



};

// this line of code allows the class to be accesible in other parts of the app (in other files/ classes)
export default GenericCurrencyField;
