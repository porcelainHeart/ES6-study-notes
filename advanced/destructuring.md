### 简介

在很多流行的编程语言里，都有解构赋值的概念，比如Perl，Python

ES6中也加入了类似的赋值语句，比以前的赋值操作更灵活，更快捷

### 正文

数组的解构赋值很好理解，就是按照对应位置，对变量赋值：

``` javascript
let [a, b, c] = [1, 2, 3]
```

相当于

``` javascript
let a = 1
let b = 2
let c = 3
```

支持数组嵌套，也支持等号两边结构不同的情况

如果变量对应不上值，这个变量就是undefined，如果一个值对应不到变量，那这个值被忽略

``` javascript
[a, b, c] = [1, 2]
// a,b为1，2   c由于匹配不到为undefined
[a, b] = [1, 2, 3]
// a,b为1，2   3由于没有变量接收被忽略
```

基于解构赋值，函数也可以有多个返回值了：

``` javascript
function tuple() {
  return [1, 2]
}

let [first, second] = tuple()
```

解构赋值允许指定默认值，也允许使用rest参数(`...`)来接收不确定个数的参数：

``` javascript
let [firstName = "John", lastName = "Doe"] = []

let [a, b, ...rest] = [1, 2, 3, 4, 5]
a    // 1
b    // 2 
rest // [3, 4, 5]
```

与函数的rest参数一样，rest后面不允许再有其他参数了

对象的解构赋值与数组类似，只有在属性名对应相同的情况下，右侧属性的值会被赋值给左侧对应属性的值

``` javascript
let {firstName: name, lastName} = {firstName: "John", lastName: "Doe"}

name      // "John"
lastName  // "Doe"
firstName // Uncaught ReferenceError: firstName is not defined
```

注意被赋值的是同名属性的值，这里是name 而不是firseName

lastName被赋值成功是因为这是变量的简洁表示法，忘记了的回去看对象一节

其实数组可以看做属性名都是自然数的对象:

``` javascript
let {"0": a, "1": b} = {"0": 1, "1": 2}

a     // 1
b     // 2
```

这样看起来会更好的理解对象的解构赋值，实际上行为与数组的解构赋值是一致的

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

试着用解构赋值去交换两个变量的值

如果不使用解构赋值，如何交换两个变量的值呢？

---

``` javascript
let [a = 1] = [undefined]

let [b = 1] = [null]
```

上面代码中的a, b分别是什么？试着自己解释这个结果

---

``` javascript
let [x = y, y = 1] = []
```

上面代码的结果是什么？ 为什么？

---

- [上一章：进阶](README.md)
- [下一章：Iterator](iterator.md)
