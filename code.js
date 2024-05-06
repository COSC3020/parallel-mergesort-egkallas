const async = require('async');

async function parallelMergeSort(x, lo, hi, tmp) {
    if (lo >= hi) return;
    var mid = Math.floor((lo + hi) / 2);
    const leftPromise = parallelMergeSort(x, lo, mid, tmp);
    const rightPromise = parallelMergeSort(x, mid + 1, hi, tmp);
    await Promise.all([leftPromise, rightPromise]);
    merge(x, lo, mid, hi, tmp);
}

async function mergesort(x) {
    var tmp = [];
    await parallelMergeSort(x, 0, x.length - 1, tmp);
}

function merge(x, lo, mid, hi, tmp) {
    var a = lo,
        b = mid + 1;
    for (var k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] < x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }
    for (var k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}

