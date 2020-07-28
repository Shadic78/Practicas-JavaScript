// A closure for a counter
const closure = (start) => {
    let counter = start;
    return increment => counter += increment;
}

console.log('Start: 3');
let count = closure(3);
console.log(`Increment: 2, counter: ${count(2)}`);
console.log(`Increment: 1, counter: ${count(1)}`);
console.log(`Increment: 3, counter: ${count(3)}`);
console.log(`Increment: 10, counter: ${count(10)}`);