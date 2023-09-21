// function solution(q, r, code) {
//     let result = "";

//     for (let i = 0; i < code.length; i++) {
//         if (i % q === r) {
//             result += code[i];
//         }
//     }

//     return result;
// }

function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join('');
}
