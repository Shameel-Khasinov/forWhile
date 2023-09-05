const array = ['Альви', 'Мухьаммад', 'Абдуррохьман', 'Халид', 'Тамерлан', 'Абдуль-Малик', 'Расул', 'Шамиль', 'Адам', 'Джон']


let accumulator = [];
i = 0;
while (i < array.length) {
    if (array[i][0] == "А") {
        accumulator.push(array[i])
    }
    i++
};

console.log(accumulator)