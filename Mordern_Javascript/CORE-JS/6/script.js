"use strict"

let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
alert(typeof value); // string

alert( "6" / "2" ); // 3
// 나눗셈 연산이므로, 문자열을 숫자로 변환 후 계산

let str = "123";
let num = Number(123); // 문자열 "123" -> 숫자 123
alert(typeof num); // number

let age = Number("아무 문자열 43120879");
alert(age) // NaN
// 형 변환 실패

alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)

// 주의사항
alert( Boolean("0") ); // true
// 문자열 "0"은 true이다.
// JS에서는 비어있지 않은 문자열은 그 값과 상관없이 무조건 true이다.