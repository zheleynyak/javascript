// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(h, r) {
	return 2 * Math.PI * r * (h + r);
}

console.log(cylinderArea(2, 2));