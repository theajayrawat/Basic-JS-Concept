//map
Array.prototype.myMap = function(callbackFn) {
    const output = []
    this.forEach((element) => {
        output.push(callbackFn(element))
    })
    return output
}

console.log([1,2,3,4,5].myMap((e) => e * 10))


//filter
Array.prototype.myFilter = function(callbackFn) {
    const output = []
    this.forEach((element) => {
        if(callbackFn(element))
            output.push(element);
    })
    return output
}

console.log([1,2,3,4,5].myFilter((e) => e < 4))


//Reduce
Array.prototype.myReduce = function(callbackFn, intialValue ) {
    let accumulator = intialValue; 
  
        
    this.forEach((element) => {
        if (accumulator) { 
            accumulator = callbackFn(accumulator,element)
        } 
        else { 
            accumulator = element; 
        }
    })
    return accumulator;
}

console.log([1,2,3,4,5].myReduce((acc, e) => acc+e, 0))