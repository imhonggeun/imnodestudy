a = {}
a['k1'] = 1
// console.log(a)
a['k1'] = 2
// console.log(a)

b = new Object()
b['b1'] = 100
// console.log(b)

var i = 1
var c = {}
for(; i < 10; i++) {
    c[`key${i}`] = i * 100
}
console.log(c)