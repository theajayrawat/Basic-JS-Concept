Array.prototype.myMap = function(callbackFn) {
    const output = []
    this.forEach((element) => {
        output.push(callbackFn(element))
    })
    return output
}

console.log([1,2,3,4,5].myMap((e) => e * 10))