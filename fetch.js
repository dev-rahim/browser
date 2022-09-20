console.log(11111);
setTimeout(() => {
    console.log(22222)
}, 5000);
// fetch is also  asynchronous 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
console.log(33333);
console.log(444444);