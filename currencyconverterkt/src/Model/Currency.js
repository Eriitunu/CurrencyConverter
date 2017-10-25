
class Currency {

  constructor(identifier, nairaEquivalent, sterlingEquivalent, dollarEquivalent, currencySign){
    this.shorthand = identifier;
    this.nairaEquivalent = nairaEquivalent;
    this.sterlingEquivalent = sterlingEquivalent;
    this.dollarEquivalent = dollarEquivalent;
    this.currencySign = currencySign;
    this.currencyStringDisplayValue = '0';
  }

  toNaira(amount){
    return (amount * this.nairaEquivalent);
  }

  toPound(amount){
    return ( amount * this.sterlingEquivalent);
  }

  toUSD(amount){
    return (amount * this.dollarEquivalent);
  }

  exchangeRateDetail(alternateCurrency){
    let string = " 1 " + this.shorthand + " = " + this.exchangeRateForAlternateCurrency(alternateCurrency) + "  " + alternateCurrency.shorthand;
    return string;
  }

  exchangeRateForAlternateCurrency(alternateCurrency){
    switch (alternateCurrency.shorthand){

      case currencyList.nigeria:
        return this.nairaEquivalent;
        break;

      case currencyList.britain:
          return this.sterlingEquivalent;
          break;

      default:
            return this.dollarEquivalent;
    }
  }

}
const currencyList = {
  nigeria: 'NGN',
  britain: 'GBP',
  america: 'USD'
};

Currency.currencyList = currencyList;

export default Currency;
