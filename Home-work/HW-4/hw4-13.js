// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
	let sum;
	for (let values of currencyValues) {
		if (exchangeCurrency === values.currency) {
			sum = sumUAH / values.value;
		}
	}
	return sum;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}, {
	currency: 'CAD', value: 30
}], 'USD'));