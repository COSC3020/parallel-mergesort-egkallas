const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
const async = require('async');

const arr1 = [5, 3, 8, 4, 2, 1, 7, 6]; 
const arr2 = [10, 20, 30, 40, 50]; 
const arr3 = [50, 40, 30, 20, 10]; 
const arr4 = [-5, 10, 0, -20, 15, -10, 25, -15];
const arr5 = [0, 0, 0, 0, 0];

mergesort(arr1).then(() => {
    assert.deepEqual(arr1, [1, 2, 3, 4, 5, 6, 7, 8])
})
mergesort(arr2).then(() => {
    assert.deepEqual(arr2, [10, 20, 30, 40, 50])
})
mergesort(arr3).then(() => {
    assert.deepEqual(arr3, [10, 20, 30, 40, 50])
})
mergesort(arr4).then(() => {
    assert.deepEqual(arr4, [-20, -15, -10, -5, 0, 10, 15, 25])
})
mergesort(arr5).then(() => {
    assert.deepEqual(arr5, [0, 0, 0, 0, 0])
})




