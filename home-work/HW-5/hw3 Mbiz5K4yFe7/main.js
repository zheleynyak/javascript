// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


const PI = 3.14;

let cylinder = (PI, h, r) => {
    let sSide = 2 * PI * r * h;
    let sBases = 2 * PI * r * r;
    return sSide + sBases;
};

console.log(cylinder(PI, 5, 2));