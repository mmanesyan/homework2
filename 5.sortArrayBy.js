function sortBy(arr,str){
if(str==="Asc"){
    return arr.sort(function(a, b){return a-b})
} else if (str === "Desc") {
  return arr.sort(function(a, b){return b-a})
} else {
  return arr
        
    }
}
console.log(sortBy([4, 3, 2, 1], "Asc" ))
console.log(sortBy([7, 8, 11, 66], "Desc"))
console.log(sortBy([7, 8, 11, 66]))