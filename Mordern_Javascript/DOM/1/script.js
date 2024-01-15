function sayHi() {
    alert("하이");
}

window.sayHi();
// window는 브라우저 창(전역 객체)
// 생략 가능

alert(window.innerHeight);
// 브라우저 창의 내부 height

alert(location.href); // 현재 URL을 보여줌
if (confirm("위키피디아 페이지로 가시겠습니까?")) {
  location.href = "https://wikipedia.org"; // 새로운 페이지로 넘어감
}

document.body.style.background = "red";
// 배경 붉은색 변경

setTimeout(() => document.body.style.background = "", 1000);
// 1초 후 복구