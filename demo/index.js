for (var i = 0; i < 10; i++) {}
console.log(i)  // 输出10，因为for循环没有块作用域

for (let i = 0; i < 10; i++) {}
console.log(i)  // 报错，因为let形成块作用域，在外面访问不到
