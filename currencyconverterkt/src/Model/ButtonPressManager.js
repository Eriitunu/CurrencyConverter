

class ButtonPressManager {


  static numberPressed(currentValue, buttonPressedValue, isDeleteButton, lastPressedButtonValue){

    let returnValue = '';
    //Convert the current value to an integer and check if it is equal to zero then assign it to its zero variable
    let isZero = (parseInt(currentValue) == 0);
    let isDecimalButtonPressed = (buttonPressedValue == '.');

    if(isDeleteButton) {
      /*if the second to the last character is a decimal point when the delete button is pressed then delete
      both the last number and the decimal point*/
      let isSecondToLastCharacterDecimalPoint = (currentValue.charAt(currentValue.length - 2) == '.');

      if (isSecondToLastCharacterDecimalPoint){
          let currentValueLessLastTwoDigits = currentValue.slice(0,-2);
          returnValue = currentValueLessLastTwoDigits;

      }
      /*Rule: if the number of digits in the field is greater than 1, then remove the last digit */
      else if (currentValue.length > 1 ){
        // take off last digit
        let currentValueLessLastTwoDigits = currentValue.slice(0, -1);
        returnValue = currentValueLessLastTwoDigits;
      }
        else {
          returnValue = '0';
        }
    }

    else if(isDecimalButtonPressed && (lastPressedButtonValue != '.')){
      returnValue = currentValue + '.0';
    }
    /*In every other case apart from the delete button and decimal point button excecute the below*/
    else {
      // if currentValue (showing in the currently higlighted field ) is 0
      if(isZero){
        returnValue = buttonPressedValue;
      }
      /*If the last button that was pressed was a decimal point */
      else if(lastPressedButtonValue == '.'){

        /*replace the zero after the decimal with the button that was just pressed*/
        let currentValueLessZeroAfterDecimalPoint = currentValue.slice(0, -1);
        returnValue = currentValueLessZeroAfterDecimalPoint + '' + buttonPressedValue;
      }
      else{  returnValue = currentValue + '' + buttonPressedValue;

      }
    }

      return returnValue;
  }




}
export default ButtonPressManager;
