### 简介

ES6对函数的扩展比较多，主要有三点：新的书写方式，参数，扩展运算符

另外还有关于严格模式和性能优化的变动，初学者暂时可以跳过这些，这里不做详细说明

这一章节的知识点非常重要，可能是ES6中最常用的知识点之一

### 正文

ES6中我们可以使用“箭头”（`=>`）定义函数。

```javascript
var f = v => v
```

箭头左侧是参数，右侧是函数要执行的代码

如果要执行的代码只有一条语句，这条语句的运行结果就是函数的返回值，上面的例子相当于：

```javascript
var f = function(v) {
  return v
}
```

如果箭头函数的代码块部分多于一条语句，就必须使用大括号将它们括起来，并使用`return`语句返回。

如果箭头函数的参数不是一个（没有参数或大于一个），需要使用一个圆括号包裹参数

```javascript
(num1, num2) => {
  let num3 = 3
  return num1 + num2 + num3
}
```

需要注意的是，箭头函数没有`arguments`对象

并且箭头函数内部的this被绑定为它定义时所在的对象，而不是随着调用方式不同而改变

箭头函数中取消了`arguments`对象，是因为ES6中有了更好的替代方式：扩展运算符

之前我们在数组一节提到过扩展运算符，用来展开一个可遍历的对象

如果扩展运算符写在函数的参数中，则称作rest参数，是扩展运算符的逆运算

```javascript
let foo = (...values) => console.log(values)
foo(1, 2, 3)
// [1, 2, 3]
```

显然我们输入的参数是逗号分隔的序列，被`...`操作符合成了一个数组，以此可以替代`arguments`对象

注意，只有`...`操作符写在函数的参数中，才是合并的效果，写在其他地方都是展开的效果

```javascript
let foo = (...values) => console.log(...values)
foo(1, 2, 3)
// 1 2 3 
```

显然参数中的`...`把参数合并为一个数组，函数代码块中的`...`又把数组展开为逗号分隔序列

注意在console.log方法中，逗号将打印为空格，所以你不会在输出中看见逗号

在ES6中，我们可以直接给函数参数设置默认值

```javascript
let log = (x, y = 'World') => console.log(x, y)

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```

注意这种默认值的声明方式与`let`类似，函数代码块中不能用`let`或`const`再次声明同一个参数

```javascript
let foo = (x = 5) => {
  let x = 1  // error
  const x = 2  // error
}
```

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

如果箭头函数要返回一个对象，可以这样简写吗？

```javascript
var getTempItem = id => { id: id, name: "Temp" }
```

如何改正写法？

---

箭头函数书写的都是匿名函数，用来写回调函数特别简洁

试着用箭头函数改写常用的参数包含回调函数的方法，比如：

```javascript
// 普通函数写法
[1, 2, 3].map(function (x) {
  return x * x
})

// 箭头函数写法
[1, 2, 3].map(x => x * x)
```

如果箭头函数内部嵌套箭头函数怎么写？

---

试着写出一个例子说明箭头函数的this与普通函数的this的不同

---

```javascript
let foo = (a, ...b, c) => console.log(a, b, c)
```

运行结果是什么？ 试着猜测为什么会这样

---

```javascript
let foo = (x = 5) => {
  var x = 1
  let x = 1
}
foo()
```

先不运行这段代码，猜测它会在哪一行报错？

对于这段代码的运行结果，试着想出一个自己满意的解释

---

- [上一章：数组](array.md)
- [下一章：对象](object.md)
