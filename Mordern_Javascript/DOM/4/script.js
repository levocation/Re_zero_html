alert(document.documentElement);
alert(document.body);
alert(document.head);

for (let node of document.body.childNodes) {
    console.log(node);
}

alert(document.body.childNodes.filter); // undefined (filter 메소드 없음)

alert(Array.from(document.body.childNodes).filter) // function



//console.log( document.body.parentNode === document.documentElement ); // true
// <body>의 부모 노드는 <html>

//console.log( document.head.nextSibling ); // HTMLBodyElement
// <head>의 다음 형제 노드는 <body>입니다.

//console.log( document.body.previousSibling ); // HTMLHeadElement
// <body>의 이전 형제 노드는 <head>입니다.

console.log("=========================");

for (let elem of document.body.children) {
    console.log(elem);
}

let td = table.rows[0].cells[1];
td.style.backgroundColor = "red";