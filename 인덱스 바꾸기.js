// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// 1 < my_string의 길이 < 100
// 0 ≤ num1, num2 < my_string의 길이
// my_string은 소문자로 이루어져 있습니다.
// num1 ≠ num2

function solution(my_string, num1, num2) {
    // 값을 저장할 변수
    let result = [...my_string]
    
    // splice를 사용해 num1부터 1개를 my_string[num2]로 바꾼다
    result.splice(num1, 1, my_string[num2])
    // splice를 사용해 num2부터 1개를 my_string[num1]로 바꾼다
    result.splice(num2, 1, my_string[num1])
    
    // 배열을 문자열로 합하여 반환
    return result.join("")
}