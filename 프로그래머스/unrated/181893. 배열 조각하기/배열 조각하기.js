// function solution(arr, query) {
//     for (let i = 0; i < query.length; i++) {
//         if (i % 2 === 0) {  // Even index
//             arr = arr.slice(0, query[i] + 1);
//         } else {  // Odd index
//             arr = arr.slice(query[i]);
//         }
//     }
//     return arr;
// }


function solution(arr, query) {
    let index = 0;  
    for (let q of query) {
        if (index % 2 === 0) {  
            arr = arr.slice(0, q + 1);
        } else {  
            arr = arr.slice(q);
        }
        index++;  
    }
    return arr;
}