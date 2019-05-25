//
// 数组
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
// your browser must support for..of loop
// and let-scoped variables in for loops
// const and var could also be used
for (let letter of eArr) {
  console.log(letter);
}

//for的语法糖
var o = new Object

o[Symbol.iterator] = function () {
  var v = 0
  return {
    next: function () {
      return { value: v++, done: v > 10 }
    }
  }
};

for (var v of o)
{
    console.log(v); // 0 1 2 3 ... 9
}