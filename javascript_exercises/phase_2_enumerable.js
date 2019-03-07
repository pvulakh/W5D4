Array.prototype.myEach = function(callback) {
    for (let i =0; i < this.length; i++) {
        console.log(callback(this[i]));
    }
};

Array.prototype.myMap = function(callback) {
    let arr = [];

    function iteration(el) {
        arr.push(callback(el));
    }
 
    this.myEach(iteration);
    return arr;
};         

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue ? initialValue : this[0];

    function iteration(el) {
        acc = callback(acc, el);
    }

    this.slice(1).myEach(iteration); 
    return acc;
};



