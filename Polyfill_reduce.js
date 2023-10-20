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

console.log([1,2,3,4,5].myReduce((acc, element) => acc+element, 0))