
console.log(0.3 - 0.2);
// function fn() {
//   console.log(this); // 1. {a: 100}
//   var arr = [1, 2, 3];

//   (function () {
//     console.log(this); // 2. Window
//   })();

//   // 普通 JS
//   arr.map(function (item) {
//     console.log(this); // 3. Window
//     return item + 1;
//   });
//   // 箭头函数
//   let brr = arr.map((item) => {
//     console.log("es6", this); // 4. {a: 100}
//     return item + 1;
//   });
// }
// fn.call({ a: 100 });