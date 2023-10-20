Array.prototype.myFilter = function(callbackFn) {
    const output = []
    this.forEach((element) => {
        if(callbackFn(element))
            output.push(element);
    })
    return output
}

console.log([1,2,3,4,5].myFilter((e) => e < 4))