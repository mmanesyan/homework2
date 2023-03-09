function every(array){
    for (let i=0;i<array.length;i++){
        if(!array[i]){
            return false
        }
    }
    return true
}
console.log(every([1, 30, 39, 29, 10, 13]))