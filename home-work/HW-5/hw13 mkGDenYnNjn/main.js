// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let choiceCurrency;
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choiceCurrency = item;
        }

        console.log(choiceCurrency);
        let sum = sumUAH / choiceCurrency.value;
        return sum;
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));