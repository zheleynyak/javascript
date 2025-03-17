// #OPLI89c9G
//
// – Є масив:
//
// [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let array = ['Main', 'Products', 'About us', 'Contacts'];


let ul = document.createElement('ul');
document.body.append(ul);

for (let item of array) {
	let li = document.createElement('li');
	li.innerText = item;
	ul.appendChild(li);
}
