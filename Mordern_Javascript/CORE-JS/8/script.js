"use strict"

alert( '2' > 1 ); // true
// 문자열 '2' -> 1
// (2 > 1) == true

alert( '01' == 1 ); // true
// 문자열 '01' -> 1
// (1 == 1) == true

alert( true == 1 ); // true
alert( false == 0 ); // true

// 흥미로운 상황

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
// 0은 false이고, "0"은 빈 문자열이 아니므로 true이지만
// 0 == "0" 의 경우, "0" -> 0 이므로
// (0 == 0) == true 이다.

alert( 0 === false ); // false
// 0 == false 의 경우, 0도 false이기 때문에 (false == false) == true 이지만
// 0과 false는 자료형이 다르므로 0 === false는 false이다.

alert( null === undefined ); // false

alert( null == undefined ); // true
// null과 undefined는 서로 동등한 취급을 받지만
// 다른 값들과는 항상 false이다.

alert( null > 0 );  // false
// null -> 0 이므로 0 > 0 은 false

alert( null == 0 ); // false
// 동등 연산자는 null이나 undefined를 형변환 하지 않음
// 따라서 false

alert( null >= 0 ); // true
// null -> 0 이므로 0 >= 0 은 true

alert( undefined > 0 ); // false
// 계산해야 하므로 숫자형으로 변환해서 undefined -> NaN 인데, NaN과 비교할 경우 항상 false

alert( undefined < 0 ); // false
// 계산해야 하므로 숫자형으로 변환해서 undefined -> NaN 인데, NaN과 비교할 경우 항상 false

alert( undefined == 0 ); // false
// undefined는 null과 undefined를 제외한 모든 값과 같지 않음