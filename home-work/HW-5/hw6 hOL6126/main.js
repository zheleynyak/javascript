// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (li) => {
    document.write(`<div>
    <ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
</ul>
</div>`)
}

list(';ajfasdjfasdfasdf');