function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}
// function solution(array, n) {
//     let count = 0 ;
//     for ( let num of array ) {
//         if ( n === num ) {
//             count++
//         }
//     }
//     return count
// }