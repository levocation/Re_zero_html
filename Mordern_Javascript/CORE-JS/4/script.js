"use strict"

let message = 'Hello' // string
message = 123456; // 언제든지 자료형 변경 가능 (동적 타입)

let n = 123; // int
n = 12.345; // float

const INFINITY = 1/0; // Infinity (무한대)

let NAN = "숫자가 아님" / 2; // NaN (계산 중 에러 발생)

const bigInt = 1234567890123456789012345678901234567890n; // BigInt
// BigInt는 숫자 끝에 n을 붙인다.
// JS의 int의 범위를 n이라고 할 때 -(2^53-1) < n < (2^53-1)
// BigInt는 n의 범위를 벗어날 때 사용

let str = "hello";
let phrase = `Hi, ${str}`; // "Hi, hello"
// 역따옴표를 사용하면, ${변수명} 을 사용해서 원하는 변수나 표현식을 문자열 중간에 삽입 가능

let isTrue = true; // boolean
let isFalse = false; // boolean

let isGreater = 4 > 1; // true

let age = null; // null
age = undefined; // undefined

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)