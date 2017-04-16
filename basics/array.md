### 简介

ES6中，数组新增了一系列好用的API

还有一个非常重要而且常用的语法：扩展运算符

### 正文

扩展运算符写作三个点（...），可以把一个可遍历的对象解开，转为用逗号分隔的序列

```javascript
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]

[...'abc']
// ["a", "b", "c"]
```

注意后面两个例子都不是数组，但是扩展运算符依然可用，这是因为它们都拥有遍历器接口（iterator），我们后面章节会详细介绍

扩展运算符一般用于函数传参，我们后面函数章节会详细说明

ES6新增了很多数组相关的API，这些API中大多数与遍历相关

`Array.from`方法用于将可遍历的对象转化为数组

```javascript
// NodeList对象
let ps = document.querySelectorAll('p')
console.log(Array.from(ps))
// [p, p]

// arguments对象
function foo() {
  console.log(Array.from(arguments))
}
foo(1, 2, 3)
// [1, 2, 3]
```

`Array.prototype.find`方法用于查找数组中第一个符合要求的值，

```javascript
[1, 4, -5, 10].find(function (x) {
  return x > 3
 })
// 4
```

注意返回第一个满足要求的值，如果想知道这个值对应的位置，可以把find换成findIndex

`Array.prototype.includes`方法用来判断数组中是否含有某个值，含有就返回true，否则返回false

```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
```

还有一些新的API因为不常用，不再介绍，想了解全部新增API请查看官方文档

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

```javascript
let arr = [1, 2, 3]
let a = arr
let b = [...arr]
```
a和b有什么区别？

对b赋值的这种写法有什么实际作用？

---

如何在ES5中实现`Array.from`的效果？

---

`Array.prototype.find`方法只能查找到第一个符合要求的值，如何查找第二个符合要求的值？

试试写一个function实现它

---

```javascript
[1, 2, NaN].includes(NaN)
```

会返回什么？

使用怎样的回调函数可以让`find`方法找出数组中的NaN？

---

- [上一章：数值](number.md)
- [下一章：函数](function.md)
