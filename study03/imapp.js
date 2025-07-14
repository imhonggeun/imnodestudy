var a = 1;
let b = '1';
const c = 1;
var d

if (a === b ){
    console.log("자료형까지 비교하여 같다")
}else{
    console.log("자료형까지 비교하여 다르다")
}

if (a==c){
    console.log("값만 비교하여 같다")
}else{
    console.log("값만 비교하여 다르다")
}

console.log(a,"변수만 지정하고 값도 지정해줌")
console.log(d,"변수만 지정하고 값을 지정안해줌")

var d = () => {} //함수 {return 10}

if (d === undefined){
    console.log("함수관련해서 값이 없다")
}else{
    console.log("함수관련해서 값이 있다")
}

if (d() === undefined){
    console.log("함수호출해서 값이 없다")
}else{
    console.log("함수호출해서 값이 있다")
}