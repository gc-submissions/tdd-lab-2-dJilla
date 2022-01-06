const moneyFunctions = require("../src/js/money-functions");

describe("formatCurrency", () => {

  it('should return $0.00 given amount 0', () => {
    expect(moneyFunctions.formatCurrency(0)).toEqual('$0.00')
  });

  it('should return $1.00 given amount 1', () => {
    expect(moneyFunctions.formatCurrency(1)).toEqual('$1.00')
  });

  it('should return $1.50 given amount 1.5', () => {
    expect(moneyFunctions.formatCurrency(0.01)).toEqual('$0.01')
  });

  it('should return $0.01 given amount 0.01', () => {
    expect(moneyFunctions.formatCurrency(0.01)).toEqual('$0.01')
  });

  it('should return $527.68 given amount 527.6789', () => {
    expect(moneyFunctions.formatCurrency(527.6789)).toEqual('$527.68')
  });

  it('should return -$1.00 given amount -1', () => {
    expect(moneyFunctions.formatCurrency(-1)).toEqual('-$1.00')
  });

  it('should return -$0.01 given amount -0.01', () => {
    expect(moneyFunctions.formatCurrency(-0.01)).toEqual('-$0.01')
  });

  it('should return -$534.27 given amount -534.2678', () => {
    expect(moneyFunctions.formatCurrency(-534.2678)).toEqual('-$534.27')
  });
});

describe("getCoins", () => {
  it('should produce 1 quarter, 0 dimes, 1 nickel and 2 pennies for 32 cents', () => {
    expect(moneyFunctions.getCoins(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  });
});

describe("getCoins", () => {
  it('should produce 1 quarter, 0 dimes, 1 nickel and 2 pennies for 10 cents', () => {
    expect(moneyFunctions.getCoins(10)).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
  });
});

describe("getCoins", () => {
  it('should produce 1 quarter, 0 dimes, 1 nickel and 2 pennies for 27 cents', () => {
    expect(moneyFunctions.getCoins(27)).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
  });
});

describe("getCoins", () => {
  it('should produce 1 quarter, 0 dimes, 1 nickel and 2 pennies for 68 cents', () => {
    expect(moneyFunctions.getCoins(68)).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
  });
});