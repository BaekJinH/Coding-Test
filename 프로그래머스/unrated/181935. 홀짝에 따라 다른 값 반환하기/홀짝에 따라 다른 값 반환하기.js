function solution(n) {
    return n % 2 ?  even(n) :  odd(n) ;
}

function even(n) {
    let sum = 0;
    for ( let i = 1 ; i <= n ; i+= 2 ) {
        sum += i
    }
    return sum
}

function odd(n) {
    let sum = 0;
    for ( let i = 2; i <= n ; i+= 2 ) {
        sum += i * i
    }
    return sum
}