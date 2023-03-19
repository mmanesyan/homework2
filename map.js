function map(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      const changedItem = callback(array[i], i, array)
      result.push(changedItem)
    }
    return result
  }
  function check(number) {
    return number+2
  }
  const numbers = [1, 2, 3, 4]
  const x = map(numbers, check)
  console.log(x)
  
  