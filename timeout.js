function doSomething() {
    console.log('Do something');
}
console.log('first');
console.log('second');
console.log('third');
// doSomething();
// setTimeout(doSomething)
setTimeout(doSomething, 10000);
setTimeout(function () {
    console.log('run code bottom to top with a fixed time');
}, 5000)
console.log('fourth');
console.log('fifth');
console.log('six');
