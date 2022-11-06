// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// -10,000 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers 의 길이 ≤ 100c

function solution(numbers) {
    let result = []
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            result.push(numbers[i] * numbers[j])
        }
    }
    return Math.max(...result)
}