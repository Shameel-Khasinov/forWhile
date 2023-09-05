const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let accumulatorEven = [];


i = 0;
while (i < array.length) {
    if (!(array[i]%2)) {
        accumulatorEven.push(array[i])
    }
    i++
} 

console.log(accumulatorEven)