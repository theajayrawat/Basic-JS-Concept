Function.prototype.myBind = function(context, ...args){
    var callback = context || globalThis; 
    return function(...a){        
        callback.call(args[0], ...[...args, ...a]);
    }
}

const result2 = printName.myBind(myName, "Palia",);
result2("India");
