function filterArray(array, filterFunction) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (filterFunction(array[i])) {
       result.push(array[i]);
      }
    }
    return result
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function isEven(number) {
  return number % 2 === 0;
}
console.log( filterArray(numbers, isEven))