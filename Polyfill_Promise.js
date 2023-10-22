//Promise 
function myPromise(executor) {
    let onResolve, onReject;
    let fulfilled = false,
      rejected = false,
      called = false,
      value;
  
    function resolve(val) {
      fulfilled = true;
      value = val;
  
      if (typeof onResolve === "function") {
        onResolve(value);
        called = true;
      }
    }
  
    function reject(error) {
      rejected = true;
      value = error;
  
      if (typeof onReject === "function") {
        onReject(value);
        called = true;
      }
    }
  
    this.then = function (callback) {
      onResolve = callback;
  
      if (fulfilled && !called) {
        called = true;
        onResolve(value);
      }
      return this;
    };
  
    this.catch = function (callback) {
      onReject = callback;
  
      if (rejected && !called) {
        called = true;
        onReject(value);
      }
      return this;
    };
  
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
}

//Resolve
myPromise.resolve = (val) =>{
    return new myPromise(function executor(resolve, _reject) {
        resolve(val);
      });    
}

//Reject
myPromise.reject = (reason) =>{
    return new myPromise(function executor(_resolve, reject) {
        reject(reason);
      });
}

new myPromise((resolve) => resolve(1000)).then(val => console.log(val));




