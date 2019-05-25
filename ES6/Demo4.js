Function.prototype.call2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    // 默认上下文是window
    context = context || window
    // 保存默认的fn
    const { fn } = context

    // 前面讲的关键，将函数本身作为对象context的属性调用，自动绑定this
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)

    // 恢复默认的fn
    context.fn = fn
    return result
}

function test(arg1, arg2) {
    console.log(this)
    console.log(arg1, arg2)
    console.log(this.a, this.b)
}

console.log(test())

test.call2({
    a: 'a',
    b: 'b'
}, 1, 2)
