// function solution(n) {
//     return n % 2 ?  odd(n) :  even(n) ;
// }

// function odd(n) {
//     let sum = 0;
//     for ( let i = 1 ; i <= n ; i+= 2 ) {
//         sum += i
//     }
//     return sum
// }

// function even(n) {
//     let sum = 0;
//     for ( let i = 2; i <= n ; i+= 2 ) {
//         sum += i * i
//     }
//     return sum
// }

function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ;
    else
      return   n*(n+1)*(n+2)/6;
}