const cartFunctions = require("../src/js/cart-functions");

describe("calculateChange", () => {

  it('should give back 1 in change for total of 5 and payment of 6', () => {
    expect(cartFunctions.calculateChange(5, 6)).toEqual(1);
  });

  it('should give back 0.73 in change for total of 12.30 and payment of 13.03', () => {
    expect(cartFunctions.calculateChange(12.30, 13.03)).toEqual(0.73);
  });

  it('should give back 7.50 in change for total of 92.50 and payment of 100', () => {
    expect(cartFunctions.calculateChange(92.50, 100)).toEqual(7.50);
  });
  
  it('should give back 2 in change for total of 48 and payment of 50', () => {
    expect(cartFunctions.calculateChange(48, 50)).toEqual(2);
  });
});

describe("isSufficientPayment", () => {

  it('should return true given a total of 5 and payment of 6', () => {
    expect(cartFunctions.isSufficentPayment(5, 6)).toEqual(true);
  });

  it('should return false given a total of 10 and payment of 7', () => {
    expect(cartFunctions.isSufficentPayment(10, 7)).toEqual(false);
  });

  it('should return true given a total of 3 and payment of 3', () => {
    expect(cartFunctions.isSufficentPayment(3, 3)).toEqual(true);
  });

  it('should return false given a total of 4 and payment of 3.78', () => {
    expect(cartFunctions.isSufficentPayment(4, 3.78)).toEqual(false);
  })
});

describe("calculateTotal", () => {

  it('should return a total of 4.99 given an itemsArray of one item with price 4.99', () => {
    expect(cartFunctions.calculateTotal([{name: 'item 1', price: '4.99'}])).toEqual(4.99);
  });

  it('should return a total of 16.52 given an itemsArray of 3 items with prices 3.50, 12.99 and 0.03', () => {
    expect(cartFunctions.calculateTotal([{name: 'item 1', price: 3.50}, {name: 'item 2', price: 12.99}, {name: 'item 3', price: 0.03}]));
  });

  it('should return a total of 0 given an empty itemsArray', () => {
    expect(cartFunctions.calculateTotal([])).toEqual(0);
  });

  it('should return a total of 7 given an itemsArray of 3 items with prices 2.50, 3.50 and 1.00', () => {
    expect(cartFunctions.calculateTotal([{name: 'peanut butter', price: 2.50}, {name: 'jelly', price: 3.50}, {name: 'bread', price: 1.00}])).toEqual(7);
  });
});

describe("addItem", () => {

  it('should return [{name: "beans", price: 3.00}] when adding that object to an empty itemsArray', () => {
    let itemsArray = [];
    cartFunctions.addItem(itemsArray, 'beans', 3.00);
    expect(itemsArray).toEqual([
      {
        name: 'beans', 
        price: 3.00}
    ]);
  });

  it('should return both objects in array when adding new object to existing array of one object', () => {
    let itemsArray = [
      {
        name: 'beans',
        price: 3.00
      }
    ];
    cartFunctions.addItem(itemsArray, 'sugar', 2.00);
    expect(itemsArray).toEqual([
      {
        name: 'beans',
        price: 3.00
      },
      {
        name: 'sugar',
        price: 2.00
      }
    ]);
  });

  it('should return 4 objects in array when adding an object to an existing array of 3 objects', () => {

    let itemsArray = [
      {
        name: 'beans',
        price: 3.00
      },
      {
        name: 'sugar',
        price: 2.00
      },
      {
        name: 'pork',
        price: 4.00
      }
    ];
    cartFunctions.addItem(itemsArray, 'bbq sauce', 3.50);
    expect(itemsArray).toEqual([
      {
        name: 'beans',
        price: 3.00
      },
      {
        name: 'sugar',
        price: 2.00
      },
      {
        name: 'pork',
        price: 4.00
      },
      {
        name: 'bbq sauce',
        price: 3.50
      }
    ]);
  });
});

describe("removeItem", () => {

  it('should remove the first element from an array of three items', () => {
    let itemsArray = ['1', '2', '3']
    cartFunctions.removeItem(itemsArray, 0);
    expect(itemsArray).toEqual(['2', '3']);
  });

  it('should remove the last element from an array of three items', () => {
    let itemsArray = ['1', '2', '3']
    cartFunctions.removeItem(itemsArray, 2);
    expect(itemsArray).toEqual(['1', '2'])
  });

  it('should remove the middle element from an array of three items', () => {
    let itemsArray = ['1', '2', '3']
    cartFunctions.removeItem(itemsArray, 1);
    expect(itemsArray).toEqual(['1', '3'])
  });

  it('should remove the only element from an array of one item', () => {
    let itemsArray = ['1']
    cartFunctions.removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([]);
  });
});