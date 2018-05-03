### 简介

JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

变量则是他们的载体

在 ES6 以前，声明一个变量只有两种方式 —— `var` 和 `function`

ES6 新增四种声明变量指令 `let` ， `const` ， `import` 和 `class`，这里只介绍前两种，后两种将在后面章节中说明

注意：本书只讨论思路，不探讨细节，如想了解关于ES6变量的全部知识点，请Google查阅相关文档。

### 正文

`let`，`const`命令的用法类似于`var`，但是所声明的变量，只在声明所在的块级作用域内有效。

```javascript
{
  let a = 1
  const b = 2
  var c = 3
}

a // ReferenceError: a is not defined.
b // ReferenceError: b is not defined.
c // 3
```

在ES6以前，由于存在变量提升，`var`定义的变量可以在声明之前就调用而不报错，而`let`，`const`必须先声明后使用

并且`let`不允许重复声明，`const`一旦声明，值就不能改变。

```javascript
let a = 1
let a = 2
// Uncaught SyntaxError: Identifier 'a' has already been declared
const YEAR = 2017
YEAR = 2018
// TypeError: Assignment to constant variable.
```

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**
```javascript
for (var i = 0; i < 10; i++) console.log(i)

```
把上面for循环中的`var`换成`let`会有什么不同？为什么会这样？

---

```javascript
const foo = {}

// 为 foo 添加一个属性,会成功吗？
foo.prop = 123

// 将 foo 指向另一个对象，会成功吗？
foo = {}
```
如何解释上面的现象呢？

---

知道什么是变量提升吗？不知道的话，不如Google搜索一下看看

---

- [上一章：基础](README.md)
- [下一章：字符串](string.md)
