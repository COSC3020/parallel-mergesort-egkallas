[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Dt3ukIt2)
# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

The span of parallel merge sort in terms of the worst case is $\Theta(\frac{p}{n}\log{n})$. There are $log n$ levels of recursion in the DAG and $n$ amount of items to be merged. Each subarray to be sorted is parallelized, therefor the span of the parallelization would be $\frac{p}{n}$, where $p$ is the number of processors, leading to an overall worst-case complexity of $\Theta(\frac{p}{n}\log{n})$.
