function onlyNumbers(arr){
    return arr.filter(element => typeof element==="number" && !isNaN(element))
}
console.log(onlyNumbers([1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN]))