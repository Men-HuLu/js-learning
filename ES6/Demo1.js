let s1="hello world"
let s2=String("hello world")
let s3=new String("hello world")
console.log(s1,s2,s3)                               //hello world hello world object
console.log(s1===s2,s1===s3,typeof s1,typeof s3)    //true false string object
console.log(s3.__proto__===String.prototype)        //true


// 拆装箱转换
var mySymbol = Symbol("my symbol");
let createObject=function(){
    return this
}
let obj1=createObject.call(mySymbol)
let obj2=Object(mySymbol)
console.log(typeof obj1,typeof obj2)
//Object.prototype.toString
console.log(Object.prototype.toString.call(null))



