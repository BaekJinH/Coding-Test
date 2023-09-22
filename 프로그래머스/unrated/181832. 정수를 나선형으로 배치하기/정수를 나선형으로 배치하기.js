// function solution(n) {
//     let array = [] ;
//     for ( n in n ) {
//         array.push( n )
//     }
// }

// 행 인덱스 n 열 인덱스 n 각자 정의해야할 거 같음
// [0][0] ~ [0][4] 까지 배치한 수를 생성한 배열 array에 담아야 함
//  -- 배열에 담을 때 문제가 생김 해당 인덱스에 맞는 수를 따로 따로 배열에 담아야 함 배열 또한 n의 수에 맞게 for문으로 생성해야할 거 같음

function solution(n) {
    const Arr =  Array.from(Array(n), () => Array(n).fill(null))
    let rowIdx=0,colIdx=0,searchLength=n-1,i = 1
    while(i<=n*n){
        if(rowIdx === (n-1)/2 && colIdx === (n-1)/2){
            Arr[rowIdx][colIdx] = i++
        }
        for(let j=0;j<searchLength;j++){
            Arr[rowIdx][colIdx] = i++
            colIdx++
        }
        for(let j=0;j<searchLength;j++){
            Arr[rowIdx][colIdx] = i++
            rowIdx++
        }
        for(let j=0;j<searchLength;j++){
            Arr[rowIdx][colIdx] = i++
            colIdx--
        }
        for(let j=0;j<searchLength;j++){
            Arr[rowIdx][colIdx] = i++
            rowIdx--
        }
        searchLength -= 2
        colIdx++
        rowIdx++
    }
    return Arr
}