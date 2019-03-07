Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        for (let i = 0; i < this.length-1; i++) {
            sorted = true;
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]];
                sorted = false;
            }
        }
    }
    return this;
};

String.prototype.substrings = function() {
    let arr = [];

    for (let start = 0; start < this.length; start++) {
        for (let ending = start; ending < this.length; ending++) {
            arr.push(this.slice(start, ending + 1));
        }
    }
    return arr;
};

