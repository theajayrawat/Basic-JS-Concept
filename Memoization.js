 
const cal=(n)=>{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }

    return sum;
}

const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("form cache");
            return cache[n];
        }

        console.log("from calculation");

        return cache[n]=fun(n);

    }
}

console.time();
const eff=memoize(cal);
console.log(eff(5));
console.timeEnd();

console.time();
console.log(eff(5));
console.timeEnd();