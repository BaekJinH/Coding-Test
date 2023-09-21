function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) {  // Even index
            arr = arr.slice(0, query[i] + 1);
        } else {  // Odd index
            arr = arr.slice(query[i]);
        }
    }
    return arr;
}