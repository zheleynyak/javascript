// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
	let result = 0;
	for (let key of currencyValues) {
		if (exchangeCurrency === key.currency) {
			result = sumUAH / key.value;
		}
	}
	return result;
};


console.log(exchange(420000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}, {
	currency: 'CAD',
	value: 30
}], 'CAD'));