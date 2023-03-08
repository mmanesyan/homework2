function findIndex(array,value){
    for(let i=0;i<=array.length;i++){
    if(array[i]===value) {
        return i+1
    }
   }
        return -1
}

console.log(findIndex(([1,2,3,4]),4))