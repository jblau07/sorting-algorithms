const algorithms = require('./sortModule');

const sorting = algorithms();

const myArr = [12, 43, 5, 8, 20, 22];
sorting.quickSort(myArr);
console.log(sorting.quickSort(myArr));
