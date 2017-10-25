// The purpose of this factory is to help us easily create different Currency Objects

import Currency from './Currency';

class CurrencyFactory{
/* The static method means we do not have to instantiate this class(Make it an object) in order to use the
CurrencyWidthIdentifier*/

  static createCurrencyWidthIdentifier(identifier){

    switch (identifier) {
      case Currency.currencyList.nigeria:
        let nigerianCurrency = new Currency(identifier, 1, 0.0021,  0.0028, 'N');
        return nigerianCurrency;
        break;

      case Currency.currencyList.britain:
        let britishCurrency = new Currency(identifier, 477.34, 1, 1.32, '£');
        return britishCurrency;
        break;

      default:
      let usaCurrency = new Currency(identifier, 360.50, 0.76, 1, '$');

    }

  }

}


export default CurrencyFactory;
