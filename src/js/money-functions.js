function formatCurrency(amount) {

    if (amount >= 0) {

        amount = '$' + amount.toFixed(2);
        return amount;
    } else {

        amount = amount.toFixed(2);
        return  `-$${amount.substr(1)}`;
    }
}

function getNumberOfCoins(cents, coinValue) {

    let coins = 0;

    while (true) {
        coins++;
        let remaining = cents - (coins * coinValue);

        if(remaining === 0) {
            return coins;

        } else if (remaining < 0) {
            return coins - 1;
        }
    }
}

function getCoins(cents) {

    const quarters = getNumberOfCoins(cents, 25);
    const dimes = getNumberOfCoins(cents - (quarters * 25), 10);
    const nickels = getNumberOfCoins(cents - (quarters * 25) - (dimes * 10) , 5);
    const pennies = getNumberOfCoins(cents - (quarters * 25) - (dimes * 10) - (nickels * 5), 1);

    return {
        quarters,
        dimes,
        nickels,
        pennies
    }
}

module.exports = {formatCurrency, getCoins}

console.log(getCoins(86));