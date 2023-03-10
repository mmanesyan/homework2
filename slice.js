function slice(array, start = 0, end = array.length) {
    if (start < 0) {
      start = array.length + start
    }
    if (end < 0) {
      end = array.length + end
    }
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(array[i])
    }
    return result
  }
  
  console.log(slice([1,2,3,9,7], -1))
  