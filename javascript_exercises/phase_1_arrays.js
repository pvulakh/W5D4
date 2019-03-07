Array.prototype.uniq = function() {
    let result = [];
    this.forEach(function(el) {
        if(!result.includes(el)) {
            result.push(el);
        }
    });
    return result;
};

// let arr1 = [1,1,1,2];
// arr1.uniq();

Array.prototype.twoSum = function() {
    let pair_indices = [];

    for (let i=0; i < this.length; i++) {
       for (let j=i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pair_indices.push([i, j]);
            }
       }
    }
    return pair_indices;
};

// let arr2 = [1,2,-1,0];
// arr2.twoSum();

Array.prototype.transpose = function() {
    let transpose = new Array(this.length);
    for (let i = 0; i < transpose.length; i++) {
        transpose[i] = new Array(this.length);
    }

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            transpose[j][i] = this[i][j];
        }
    }
    return transpose;
};