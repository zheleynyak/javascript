let arr;

arr = [ 1312, 3, 554, 2, -1, false, 'string']

console.log(arr);
console.log(arr[3]);
console.log(arr.length);

arr[0] = 'new value';
console.log(arr[0]);

arr[7] = 'okten';
console.log(arr);

arr[arr.length] = 1312;
console.log(arr);

arr[arr.length] = 100000000000;
console.log(arr);

arr[arr.length] = 'denis';
console.log(arr);