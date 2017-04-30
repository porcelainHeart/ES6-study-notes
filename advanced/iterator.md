### 简介

ES6中新增了一种遍历语法：`for (... of ...)` 来支持所有可遍历的数据结构

for-of 是基于iterator这个通用接口实现的

### 正文

在ES6以前，我们想遍历一个数组一般有三种方式：

- for 循环
- for ... in 语句
- Array.prototype.forEach 方法

三种方式都有不同程度的缺陷

for循环写法繁琐，需要指定循环次数不超过数组长度，否则就会有对应的报错

for ... in 语句遍历出的是键值，需要做一些转换才能拿到数据，而且遍历是无序的

forEach 方法是个不错的方式，不过它不能中途使用break跳出循环，也不能return终止外层函数

基于这些缺陷，ES6新增了 for ... of 的语法，用于遍历数组，对象，字符串，或者是Set，Map等数据结构

for ... of 遍历依赖 iterator 接口，只有部署了 iterator 接口的数据类型才可以被遍历

iterator 接口是这些数据结构上的一个属性：`Symbol.iterator`，它是一个函数

``` javascript
let iterator = [1, 2, 3][Symbol.iterator]()

iterator    //  Array Iterator {}
iterator.next()
// {value: 1, done: false}
iterator.next()
// {value: 2, done: false}
iterator.next()
// {value: 3, done: false}
iterator.next()
// {value: undefined, done: true}
```

Symbol.iterator显然是一个Symbol类型值，在Symbol章节介绍过，必须使用方括号访问

调用数组上的 Symbol.iterator 方法，即可返回一个iterator遍历器对象

这个 iterator 对象上只有一个常用方法 `next` ，每次调用 `next` 即可返回一个对象

返回的对象有两个属性，value ：当前遍历的值， done ：是否遍历完毕

这里必须说明一下为什么这个遍历器的属性名是一个很绕的Symbol类型

其实最开始是打算叫做 `iterator()` 的 ，可是考虑到已有的代码中，可能已经有人用这个名字命名了一些属性

ES6如果直接使用这个名字会造成兼容性问题，无奈之下只能使用绝对不可能重复的 `[Symbol.iterator]()`

for...of 语句会在内部直接调用遍历对象上的 `Symbol.iterator` 方法

并且每次循环中自动调用返回值的next方法，然后将next方法返回值的value属性值赋值给每次的循环变量

``` javascript
for (let a of arr){
  console.log(a)
}
//  1  2  3
```

正常情况下我们不会手动使用next方法去一个一个的拿到值

而是使用 for ... of 方便的遍历所有具有 `Symbol.iterator` 属性的对象

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

```javascript
let map = new Map([
  ['a', '1'],
  ['b', '2']
])

for (let a of map){
  console.log(a)
}
```

上面代码的输出结果会是什么？ 

如果想要每次只输出map中每一项对应的值，应该怎么改写？

---

试着根据上面描述的for ... of实现方法,自己动手实现一个具有for ... of功能的function

接收一个可遍历对象,并向命令行依次输出遍历结果

---

- [上一章：解构赋值](destructuring.md)
- [下一章：Promise](promise.md)

