function calculateChange(total, payment) {

   let change = payment - total;
   return +change.toFixed(2);
}

function isSufficentPayment(total, payment) {

    if (payment >= total) {

        return true;
    } else {

        return false;
    }
}

function calculateTotal(itemsArray) {

    let priceSum = 0;

    for (i = 0; i < itemsArray.length; i++) {

        priceSum += itemsArray[i].price;
    }

    return +priceSum;
}

function addItem(itemsArray, name, price) {

    itemsArray.push({
        name,
        price
    });
}

function removeItem(itemsArray, index) {

    itemsArray.splice(index, 1);
}

module.exports = {calculateChange, isSufficentPayment, calculateTotal, addItem, removeItem};