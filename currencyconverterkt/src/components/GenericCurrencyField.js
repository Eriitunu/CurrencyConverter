// insert React and react native boilerpplate code here
import React, {Component} from 'react';
import {Text, Image, TouchableHighlight, View} from 'react-native';

class GenericCurrencyField extends Component {

  constructor(props){
    // this means it will go to thr parent component and execute the code in the PARENT CCOMPONENTS'S constructor
    super(props);
  }

  // render has to be invoked if the component is to be drawn on the screen.
  render(){

    return (
      <View style={viewStyles.container}>

      </View>

    );

  }


}

const viewStyles = {

    container: {
        backgroundColor: 'lightblue',
        width: '100%',
        height: 100
    }

};
// this line of code allows the class to be accesible in other parts of the app (in other files/ classes)
export default GenericCurrencyField;
