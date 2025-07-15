function fn_event() {
    console.log("fn_event")
}
var a = fn_event;
// console.log(typeof(a), typeof(fn_event), a)
// a()

function fn_callback(fn) {
    console.log(fn, typeof(fn))
    fn()
}
fn_callback(fn_event)