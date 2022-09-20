console.log('first');
// setInterval(() => {
//     console.log('hellow');
// }, 5000)
let x = 0;
const TimeId = setInterval(() => {
    x++;
    console.log(x);
    if (x == 15) {
        clearInterval(TimeId);
    }
}, 1000);