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


const tasksArray = [dummyAPI(-1), dummyAPI(1000), dummyAPI(3000)]

//Promise.race
Promise.race =(promisesArray) =>{
    return new Promise((resolve, reject) => {
      promisesArray.forEach((promise) => {
        promise
          .then(resolve) 
          .catch(reject); 
      });
    });
  }

Promise.race(tasksArray).then((data) =>  {
    console.log(`the output is ${data}`)
}).catch(err => {
    console.log(`the error is ${err}`)
})


// Promise AllSettled
Promise.allSettled=(promisesArray)=> {
      return Promise.all(promisesArray.map(
        promise => Promise.resolve(promise)
            .then(value => ({ status: 'fulfilled', value }))
            .catch(reason => ({ status: 'rejected', reason }))
      )); 
}



Promise.allSettled(tasksArray).then((data)=> {console.log(data)});
