// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.width = '300px';
div.style.height = '300px';
div.style.background = 'blue';
document.body.appendChild(div);

let div1 = div.cloneNode(true);
document.body.appendChild(div1);
