function myFlat(arr) {
    return arr.reduce((prevVal, currentVal) => {
        if (Array.isArray(currentVal)) {
            prevVal = prevVal.concat(myFlat(currentVal))
        } else {
            prevVal.push(currentVal)
        }
        return prevVal
    }, [])
}

console.log(myFlat([[[1, [1.1]], 2, 3], [4, 5]]))