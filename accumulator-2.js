const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6];


let accumulator = 0; 

i = 0;

while (i < array.length) {
    if (array[i] > 0) {
        accumulator += array[i]
    }
    i++
}
console.log(accumulator)