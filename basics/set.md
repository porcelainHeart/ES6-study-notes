### 简介

多数主流编程语言都提供了若干种复杂数据结构，而在ES6以前，js只有数组和对象两种

ES6为了弥补这一方面的不足，引入了四种新的数据结构

它们分别是：映射(`Map`)、集合(`Set`)、弱集合(`WeakSet`)和弱映射(`WeakMap`)

### 正文

Set类似数组，但是成员的值都是唯一的，没有重复的值
 
```javascript
let set = new Set([1, 2, 3, 3])
console.log(set)
// Set(3) {1, 2, 3}
[...set]
// [1, 2, 3]
```
我们可以通过给Set构造函数传入一个数组来创建一个set，数组中的重复值被自动删除

set常用的方法不多，常见的有以下几种

- `add(value)`：添加某个值，返回Set结构本身
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功
- `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员
- `clear()`：清除所有成员，没有返回值

另外，`set`通过`size`属性拿到内部成员的个数，而不是数组的`length`

```javascript
let set = new Set()
set.add(1).add(2).add(2)
set.size // 2
set.delete(2)
set.has(2) // false
set.clear()
set.size() // 0
```

数组的forEach方法也可以用来遍历set，用法相同这里不再叙述

Map类似二维数组，是键值对的集合，但是书写方式稍微有不同

```javascript
let map = new Map([
  ['a', '1'],
  ['b', '2']
])
console.log(map)
// Map(2) {"a" => "1", "b" => "2"}
```
与Set相同，Map也用size属性表示内部有多少个键值对

但是从Map中新增，获取值使用set，get方法，其他的has，delete方法与Set相同

```javascript
let m = new Map()
let o = {p: 'Hello World'}

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

对比js对象的优势是，Map可以使用任意值作为键值，包括对象（上面代码中的o）

`WeakSet`与`WeakMap`不常用，顾名思义，可以理解为更弱的Set和Map，功能少，而且容易被垃圾回收（内存消耗低）

### 思考
**这部分内容希望你都可以手动敲一遍，独立思考**

使用Set写一个数组去重的方法

接受一个数组参数，并返回一个没有重复值的原数组

---

```javascript
let set = new Set()
let a = NaN
let b = NaN
let c = {}
let d = {}
set.add(a).add(b).add(c).add(d)
```

此时set.size应该输出几？试着解释为什么会是这个结果

---

- [上一章：正则](regexp.md)
- [下一章：Symbol](symbol.md)
