// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 1,000
// 0 ≤ n ≤ 1,000

function solution(array, n) {
    let answer = 0
    array.forEach((element1) => {
        if(element1 === n) {
            answer++
        }
    })
    return answer
}

function solution(array, n) {
    return answer = array.filter((element1) => element1 === n).length
}