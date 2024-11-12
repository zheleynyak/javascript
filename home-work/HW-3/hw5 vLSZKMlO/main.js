// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let listItems of listOfItems) {
    document.write(`
    <ul>
        <li>${listItems}</li>
    </ul>
    `)
}