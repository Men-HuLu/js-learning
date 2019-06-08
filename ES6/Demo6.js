const ary = (fn, n) => (...args) => fn(...args.slice(0, n));

function test(...age){
    console.log(age)
}

test([1,2,3,4])