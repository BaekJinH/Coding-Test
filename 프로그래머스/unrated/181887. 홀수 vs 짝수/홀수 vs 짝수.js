// function solution(num_list) {
//     let even = 0 ;
//     let odd = 0;
//      for (let i = 0; i < num_list.length; i++) {
//         if ((i + 1) % 2 === 0) {
//             even += num_list[i];
//         } else {
//             odd += num_list[i];
//         }
//     }
//      if (even > odd) {
//         return even;
//     } else if (even < odd) {
//         return odd;
//     } else {
//         return even; 
//     }
// }

// function solution(num_list) {
//     const sum = (condition) => num_list.filter((_, index) => condition(index)).reduce((acc, cur) => acc + cur, 0);

//     const oddSum = sum((index) => index % 2 === 0);
//     const evenSum = sum((index) => index % 2 === 1);

//     return oddSum < evenSum ? evenSum : oddSum;
// }

function solution(num_list) {
    let even = 0;
    let odd = 0

    num_list.map((v, idx) => {
        !(idx % 2) ? even += v : odd += v; 
    })

    return odd > even ? odd : even; 
}