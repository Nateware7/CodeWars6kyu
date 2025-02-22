// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 

// n3 +(n−1) 3 +(n−2) 3 +...+1 3 =m
// if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1


function findNb(m) {
    let n = 0;
    let total = 0;

    while (total < m) {
        n++;
        total += Math.pow(n, 3);
        if (total === m) {
            return n;
        }
    }
    
    return -1;
}