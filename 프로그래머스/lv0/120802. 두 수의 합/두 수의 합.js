function solution(num1, num2) {
    let sum = num1 + num2;
    if (num1 >= -50000 && num1 <= 50000) {
        if (num2 >= -50000 && num2 <= 50000) {
            return sum
        }
    }
    else {
        return sum = 0
    }
}