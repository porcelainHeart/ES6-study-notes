### 简介

在ES6以前,我们处理异步操作只能使用回调函数

ES6中新增了几种书写异步代码的解决方案,promise是最常用的一种

### 正文

Promise是一个构造函数,我们可以用new关键字生成一个promise实例来使用

``` javascript
let promise = new Promise((resolve, reject) => {
        //做一些异步操作
        setTimeout(() => {
            console.log('success')
            resolve('promise is success')
        }, 2000)
    })
```

Promise构造函数接受一个函数作为参数,在这个函数内执行一些异步操作

这个函数拥有两个参数:resolve和reject,这两个都是函数,js引擎会帮你传入

在函数内部调用他们的时候分别代表对外声明异步操作已经成功(resolve)或失败(reject)

为什么会设计的这样复杂?

``` javascript
setTimeout(() => {
  return 1
}, 2000)
```
这是一个简单的回调方式处理异步操作的结果,但是回调函数被外层的定时器包裹

我们没法简单的拿到回调函数的返回值,这也是回调函数最大的缺陷

所以promise通过resolve和reject方法,对外传递一个可以轻易访问到信息

如果我们需要拿到并处理promise内部resolve的信息,需要使用then方法:


``` javascript
let promise = new Promise((resolve, reject) => {
        //做一些异步操作
        setTimeout(() => {
            console.log('success')
            resolve('promise is success')
        }, 2000)
    })

promise.then(x => console.log(x))
// promise is success
```

promise实例上的then方法是promise里最常用的方法,它接受一个函数为参数,这个函数的第一个参数就是这个promise内部resolve出来的值,从而我们可以在这个函数内部获取和使用这个值

另一个常用方法是catch,如果这个promise异步操作出了问题

我们会在函数内部调用reject方法传递出去错误信息,代表promise出错了

这时候应该使用catch方法来处理错误信息:

``` javascript
let promise = new Promise((resolve, reject) => {
        //做一些异步操作
        setTimeout(() => {
            console.log('error')
            reject('promise is error')
        }, 2000)
    })

promise.then(x => console.log(x))
// 报错 Uncaught (in promise) promise is success

promise.catch(x => console.log(x)
// 不报错 输出 promise is error

```
其实如果你给then方法传入两个函数,那么第二个函数也是可以捕获到这个错误的

catch方法只是then的一个别名,不过为了代码清晰易读

我们最好都是用catch,而不是给then传入两个参数

现在我们有then方法处理执行成功的promise,用catch处理出错的promise

显然需要一种无论成功还是出错都能处理的方法,就像try...catch中的finally

promise也提供了一个finally方法,用法与then,catch完全相同

无论promise成功还是失败都会执行finally中的回调函数

除了这四种promise实例上的方法以外,js还原生提供了Promise.resolve()和Promise.reject()方法

注意不是promise内部的resolve,reject方法,不要混淆

这两个方法可以简单的把一个异步操作包装成promise:

``` javascript
Promise.resolve('success')
// 等价于
new Promise((resolve, reject) => resolve('success'))

Promise.reject('error')
// 等价于
new Promise((resolve, reject) => reject('error'))
```
如果需要快速创建一个resolve或者reject状态的promise,就用这两个方法

promise构造函数也可以包装多个promise实例,来让一些异步操作并行执行

``` javascript
let all = Promise.all([p1, p2, p3])

let race = Promise.race([p1, p2, p3])
```
Promise.all和Promise.race方法都接收一个可遍历对象为参数,其中每一项都是一个promise实例

上面代码中 p1, p2, p3 都是一个promise实例,内部要执行一些异步操作

在Promise.all生成的promise对象中,p1, p2, p3都完成(resolve)的时候,

它自身才算完成,自动调用内部的resolve方法

而Promise.race生成的promise的对象中.只要p1, p2, p3有一个完成

它就算完成,立刻调用resolve方法

但是还没完成的也不会终止,最终三个promise也都会完成

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

尝试用Promise封装一个发GET请求的方法,接受一个url字符串为参数

返回一个请求该URL的Promise,并且状态码为200时可以调用then方法获取返回数据

状态码为其他时可以在catch中输出报错信息

---

根据上面写出的请求封装函数生成三个请求不同url的Promise

并用Promise.race尝试做一个延迟处理,一秒内没有收到响应的请求就不再获取数据

---

- [上一章：Iterator](iterator.md)
- [下一章：Generator](generator.md)
