function map(array){
    let result=[]
    for(let i=0;i<array.length;i++){
        const currentItem = cb(array[i], i, array);
        result.push(currentItem)
    }
    return result
}