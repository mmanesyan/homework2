
function parseInteger(array){
    return array.map(element =>
    { const num = +element;
        return isNaN(num) ? null : num;
      })
}
console.log(parseInteger(["1", "2", "34"]))
console.log(parseInteger(["1", "px", "2323"]))