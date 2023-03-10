
function forEach(array,callback){
    for(let i=0;i<array.length;i++){
        callback(array[i], i, array);
    }
    
}

const numbers = [1, 2, 3, 4, 5]
function printElement(element) {
  console.log(element)
}
console.log(forEach(numbers, printElement))


