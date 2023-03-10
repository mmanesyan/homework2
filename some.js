function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true
      }
    }
    return false
  }
  
let array = [1, 2, 3, 4, 5]
let result = some(array, (value) => {
  return value > 3
})
console.log(result)
