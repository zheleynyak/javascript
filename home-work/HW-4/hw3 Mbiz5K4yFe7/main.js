// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const pi = 3.14;
function cylinder(pi, r, h) {
    let sSide = 2 * pi * r * h;
    let sBases = 2 * pi * r * r;
    return sSide + sBases;
}

let sCylinder1 = cylinder(pi, 2, 6);
console.log(sCylinder1);