function range(start, end) {
    if (start === end) {
        return [start];
    }
    return [start].concat(range(start+1, end));
}

//[1].concat(range(2,5))
//[1].concat([2].concat(range(3,5)))
//[1].concat([2].concat([3].concat(4,5))))
//[1].concat([2].concat([3].concat([4].concat(range(5,5))))))
//[1].concat([2].concat([3].concat([4].concat([5])))))
//[1]+[2]+[3]+[4]+[5]=[1,2,3,4,5]

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exp1(base, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp > 0) {
        return (base * exp1(base, exp - 1)); 
    } else {
        return (1 / base) * exp1(base, exp + 1); 
    }
}

//only for non-negative exp
function exp2(base, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp === 1) {
        return base;
    } else if (exp % 2 === 0) {
        return Math.pow(exp2(base, exp/2), 2);
    } else {
        return (base * Math.pow(exp2(base, (exp - 1) / 2), 2));
    }
}

function fibonacci(n) {
    if (n === 0 ){
        return [];
    } else if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1,1];
    } else {
        let fib = fibonacci(n-1).slice(-2).reduce();
        return fibonacci(n-1).push(fib);
    }
}
fibonacci(3);