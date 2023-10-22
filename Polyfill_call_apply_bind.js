//call
Function.prototype.myCall = function(context, ...args){
    let currentContext = context || globalThis;
    let randomProp = Math.random();
    while( currentContext[randomProp] !== undefined ){
        randomProp = Math.random();
    }
    currentContext[randomProp] = this;
    let result = currentContext[randomProp](...args);
    delete currentContext[randomProp];
    return result;
}

printName.myCall(myName, "Palia", "India");


//Apply
Function.prototype.myApply = function(context, args){
    let currentContext = context || globalThis;
    let uniqueProp = Math.random();
    while( currentContext[uniqueProp] !== undefined ){
        uniqueProp = Math.random();
    }
    currentContext[uniqueProp] = this;
    let result = currentContext[uniqueProp](...args);
    delete currentContext[uniqueProp];
    return result;
}
printName.myApply(myName, ["Palia", "India"]);



//Bind
Function.prototype.myBind = function(context, ...args){
    var callback = context || globalThis; 
    return function(...a){        
        callback.call(args[0], ...[...args, ...a]);
    }
}

const result2 = printName.myBind(myName, "Palia",);
result2("India");