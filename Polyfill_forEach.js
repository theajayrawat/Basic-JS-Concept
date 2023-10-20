Array.prototype.myForEach = function(callback){
    for (var i = 0; i < this.length; i++) {
       callback(this[i], i, this);
    }   
 }

 const arrData = [1,2,3,4,5];

arrData.myForEach((element) => console.log(element))
