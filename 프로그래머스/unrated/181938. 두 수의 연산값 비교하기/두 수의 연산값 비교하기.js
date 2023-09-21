// function solution(a, b) {
//     const ab = parseInt(String(a) + String(b));
//     const mulValue = 2 * a * b;

//     if (ab >= mulValue) {
//         return ab;
//     }
//     return mulValue;
// }

function solution(a, b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}
