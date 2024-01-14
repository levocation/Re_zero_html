"use strict"

// prompt 사용법
// result = prompt(내용, [초깃값]);

let age = prompt('나이를 입력해주세요.', 100); // 기본값 100
alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.

let question = "당신이 주인인가요?";
let result = confirm(question);
alert(result); // 확인 버튼을 눌렀을 경우 true, 취소 버튼을 눌렀을 경우 false