let user = {
	firstname: 'Taras',
	lastname: 'Schevchenko'
}

// user.firstname = 'Kokos';
// console.log(user);
// for (const userKey in user){
// 		console.log(userKey);
// }

Object.defineProperty(
	user,
	'id',
	{
		value: 1000,
		writable: false,
		enumerable: false,
		configurable: false

	}
)

console.log(user);
user.id = 100;
console.log(user);
for (const userKey in user){
	console.log(userKye);
}

Object.defineProperty(
	user,
	'id',
	{
		value: 2000,
		writeble: false,
		enumerable: false,
		configurable: false

	}
);

console.log(user);

