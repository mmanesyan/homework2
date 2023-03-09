function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > value) {
        return arr[i];
      }
    }
    return undefined;
  }
  console.log(find([5, 12, 8, 130, 44],10))