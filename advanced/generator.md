### 简介

Generator 是ES6新增的一种函数,可以看做一个状态机

通常我们通过Generator函数来实现一些异步操作

### 正文

定义一个Generator函数需要在function关键字后加一个*号

``` javascript
function *f() {
  yield 1
  yield 2
}
let a = f()
a.next()      // {value: 1, done: false}
a.next()      // {value: 2, done: false}
a.next()      // {value: undefined, done: true}
a.next()      // {value: undefined, done: true}
```
显然我们定义个一个叫做f的Generator函数,那么f可以看做是一个状态机

f的内部我们用 `yield` 关键字定义了两个 `状态`

然后我们通过f()执行这个函数,与普通函数不同的是,Generator函数执行后,

得到的结果并不是函数的返回值,而是而是一个代表其内部状态的Iterator

Iterator我们之前已经介绍过了,是一个通用的遍历器接口,我们可以调用它上面的next方法得到其内部的值

`yield` 命令用在Generator函数体中,与return类似,停止执行函数并把它后面的表达式的值返回

`yield` 把Generator函数体划分成一块一块来执行,每次调用next方法,都会使函数继续向下执行,直到遇见下一个 `yield` 并把值放在value里返回

如果后续再没有其他 `yield` 或return 就把done字段置为true,代表全部的状态都已运行完毕

正常情况下我们不会手动去一次次调用next查看结果,而是使用 `for...of` 循环:

``` javascript
function *f() {
  yield 1
  yield 2
}
for(let x of f()){
  console.log(x)
}
// 1 2
```

关于Generator的细节知识点很多,比如next还可以传入参数影响Generator函数内部状态等等

不过时至今日(17年6月),Generator在开发中的应用已经很少了,这里不再为新手介绍其他知识

主流的异步方案已经逐渐成型,目前我们使用Promise和Async来解决异步问题

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

尝试写出一个表示斐波那契数列的Generator函数

函数接收一个参数,代表生成的斐波那契数列的长度
``` javascript
function* fib(length){
  // 做一些操作,然后使用yield返回每一步的结果
}
for(let x of fib(7)){
  console.log(x)
}
// 输出 [1, 1, 2, 3, 5, 8, 13]
```

---

- [上一章：Promise](promise.md)
- [下一章：Async](async.md)
