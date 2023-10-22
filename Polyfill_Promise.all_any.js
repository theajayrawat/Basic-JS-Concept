

//API
const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        if(time>0){
            setTimeout(() => {
                resolve(time)
            }, time)
        }
        else{
            reject(time);
        }
    })
}

const tasksArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(2000)]

//Promise.all
Promise.all = (promises) => {
    return new Promise((resolve, reject) =>{
        const result = [];
        let totalResolve=0;
        promises.forEach((promise, index) =>{
          promise
            .then((val) => {
             console.log(`data is ${val}`)
              totalResolve++;
              result[index] = val;
    
              if ( totalResolve === promises.length) {
                resolve(result);
              }
            })
            .catch((error) => {
               reject(error);
            })
      });
    })
  };


Promise.all(tasksArray).then((data) =>  {
    console.log(`the output is ${data}`)
}).catch(err => {
    console.log(`the error is ${err}`)
})



//Promise.any
const tasksArrays = [dummyAPI(-1), dummyAPI(-2), dummyAPI(-3)]
Promise.any = (promises) => {
    return new Promise((resolve, reject) =>{
        const errorOutput = [];
        let totalReject=0;
        promises.forEach((promise, index) =>{
          promise
            .then(resolve)
            .catch((error) => {
                errorOutput[index] = error;
                totalReject++;
                if (totalReject === promises.length) {
                    reject(errorOutput);
                }
            })
      });
    })
  };


Promise.any(tasksArrays).then((data) =>  {
    console.log(`the output is ${data}`)
}).catch(err => {
    console.log(`the error is ${err}`)
})