### 简介

ES6 字符串相关的知识点最重要的是模版字符串，然后是一些不常用的新增API

ES6 还加强了对 Unicode 编码的支持，但是这几乎在日常工作中用不到，这里不做说明

### 正文

在ES6以前，字符串用单引号或者双引号包裹，这种字符串最大的缺点是不能换行，书写时换行会报错

```javascript
let str = "aaa
          aaa"

// Uncaught SyntaxError: Invalid or unexpected token
```

在ES6中，新增了一种字符串表示方式，用反引号 ` （键盘上数字1左侧的按键）包裹，允许插入变量或简单的JavaScript表达式，也允许换行书写

```javascript
let str =`aaa
          bbb
          ccc`
```

```javascript
let x = 1;
let y = 2;

// $后面的花括号里的字符串会被js解析器认为是JavaScript语句
`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// 3
```

ES6为字符串添加了遍历器接口（遍历器接口会在后面章节详细介绍），使字符串可以被`for...of`循环遍历。

```javascript
for (let x of 'foo') {
  console.log(x)
}
// "f"
// "o"
// "o"
```

ES6对字符串的扩展功能不止远这些，但是99%的时候我们用到的只有这些

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

在ES6以前我们如果想换行书写字符串应该怎么做？

---

```javascript
`${if(true){console.log(1)}}`
// 这样写可行吗？
```

如果想在模版字符串内执行判断语句应该怎么做？

---

- [上一章：变量](variable.md)
- [下一章：数值](number.md)
