### 简介

ES6对于对象的扩展不多，只有一些常用的简洁写法和一些新增API

在ES8中新增了对象的扩展运算符 `...` 不过我们可以在Babel转译后使用它

### 正文

ES6中，对象的属性可以使用简洁表示法来简写

```javascript
let foo = 'bar'

let baz = {foo}
// 等同于
let baz = {foo: foo}
```
```javascript
let obj = {
  method () {}
}
// 等同于
let obj = {
  method: () => {}
}
```

上面例子表明，在对象中，可以直接写变量，属性名为变量名, 属性值为变量的值，方法也同理

ES6中，对象的属性名可以使用表达式

```javascript
let obj = {
  ['a' + 'bc']: 123,
  ['h' + 'ello']() {
    return 'hello world!';
  }
}
console.log(obj.abc)
// 123
console.log(obj.hello())
// hello world!
```

很好理解，js解析器会先执行属性名表达式，得到的结果作为真正的属性名，这个表达式必须用方括号包裹

ES6对象中新增了一些API，正常工作中用到的很少，这里只介绍两个最常见的

`Object.assign` 方法用于对象的合并，接收的参数是任意个对象，会依次把第2，3，4...个对象

合并到第一个对象上，如果有重复的属性名，后来的会覆盖先前的。

```javascript
let target = { a: 1, b: 1 }
let source1 = { b: 2, c: 2 }
let source2 = { c: 3 }

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

`Object.is` 方法用于判断两个值是否相等

以前我们判断两个值相等可以用`==`和`===`

不过`==`会发生隐式转换，`===`无法判断`NaN`

`Object.is`与`===`不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身。

```javascript
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

ES8中将会支持对象的扩展运算符，这是一个还未发布的版本

不过我们早已可以使用Babel转译来使用它，并且在工作中也经常用到

```javascript
let z = { a: 3, b: 4 }
let n = { ...z }
n // { a: 3, b: 4 }
```
注意这段代码无法在浏览器运行，目前没有浏览器支持ES8

对象的扩展运算符通常和解构赋值配合使用，关于解构赋值，我们会在后面的章节介绍

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

```javascript
const keyA = {a: 1}
const keyB = {b: 2}

const obj = {
  [keyA]: 'aaa',
  [keyB]: 'bbb'
}
```

输出一下obj，并试着解释这个结果

---

`Object.assign`可以拷贝原型链上继承来的属性吗？可以拷贝不可枚举的属性吗？

`for...in`可以遍历原型链上继承来的属性吗？可以遍历不可枚举的属性吗？

---

- [上一章：函数](function.md)
- [下一章：正则](regexp.md)
