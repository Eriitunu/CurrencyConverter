import React from 'react';
import {  Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={viewStylestyles.container}>
{// this view represents the header Area}
        <View style={viewStyle.container}>
        <View style ={viewStylestyles.headerArea}>
          <Text style={textStyles.header}> CURRENCY CONVERTER</Text>
        </View>

        <View style={viewStyles.currencyBlockBackground}>
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
    paddingTop: '15',
    flexDirection: 'column',
  },
  //the style of the header area for the app
  headerArea:  {
    backgroundColor: '',
    width: '100%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',

    }

    currencyBlockBackground: {
      backgroundColor: '#252525',
      width: '100%',
      height: '30%',
    }
};
const textStyles = {
  header:{
    fontSize:'17',
    fontWeight: 'bold',

  }

};
