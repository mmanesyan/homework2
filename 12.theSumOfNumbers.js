
const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43]
const sum = arr.filter(num => num >= 18).reduce((acc, cur) => acc + cur, 0)
console.log(sum); 