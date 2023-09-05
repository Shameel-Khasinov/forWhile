const array = ['html', 'python', 'java', 'javascript', 'CSS', 'C++', 'C#', 'PHP', 'pinescript', 'kotlin']


let accumulator = []

for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i])
    }
}

console.log(accumulator)