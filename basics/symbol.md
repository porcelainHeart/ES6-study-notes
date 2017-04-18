### 简介

ES6引入了一种新的原始数据类型Symbol，表示独一无二的值

它是JavaScript语言的第七种数据类型，前六种是：

Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

### 正文

Symbol值与字符串类似，可以当做对象的属性名

因为Symbol都是独一无二的，所以可以保证不会与其他属性名产生冲突

Symbol值通过`Symbol`函数生成，`Symbol`函数可以接受一个字符串作为参数，表示对Symbol的描述

主要用于调试的时候方便区分不同的Symbol值

```javascript
let aaa = Symbol('a')
let bbb = Symbol('b')

let obj = {
  [aaa]: 'Hello!',
  [bbb]: 'World!'
}

console.log(obj)
// Object {Symbol(a): "Hello!", Symbol(b): "World!"}
obj[aaa]
// "Hello!"
obj[bbb]
// "World!"
```



### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

如何判断一个值是否是Symbol？

试着写出一个function，接受一个任意值作为参数，返回它的数据类型

数据类型一共七种，在本节的简介里提到过

---

- [上一章：集合](set.md)
- [下一章：进阶](../advanced/README.md)
