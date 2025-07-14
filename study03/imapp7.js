function fn_event(입력변수) {
    출력변수 = 입력변수
    return 출력변수
}
a = fn_event(1)
// console.log(a)

var b = fn_event
a = b(10)
// console.log(a)

function fn_callback(fn, value) {
    result = fn(value)
    console.log(result)
}
fn_callback(fn_event, 100)