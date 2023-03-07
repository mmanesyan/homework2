function onlyNumbers(arr){
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==="number" && !isNaN(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray
}
console.log(onlyNumbers([1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN]))