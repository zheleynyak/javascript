// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий


function list(li) {
    document.write(`<div>
    <ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
</ul>
</div>`)
}

list(';ajfasdjfasdfasdf');
