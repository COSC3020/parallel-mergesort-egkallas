const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
const async = require('async');


function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function testParallelMergeSort() {
    const numTests = 10; 
    const maxLength = 100; 

    for (let i = 0; i < numTests; i++) {
        const length = Math.floor(Math.random() * maxLength) + 1; 
        const randomArray = generateRandomArray(length);
        const sortedArray = randomArray.slice().sort((a, b) => a - b); 

        mergesort(randomArray).then(() => {
            assert.deepEqual(randomArray, sortedArray);
        });
    }
}

testParallelMergeSort();




