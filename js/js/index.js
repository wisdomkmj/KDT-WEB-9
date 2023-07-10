// alert("Hello world")
// console.log("Hello world!")

// 키워드 변수이름 = 값
// 키워드 : var, let, const

//var number1 = 5; //동시에 변수의 선언과 할당 

//var number2; //변수만 선언
// number2 = 5; //변수에 값을 할당
// number2 = 6;

// let string1 = "apple";
// string1 = "tomato";
// let string2 ="banana";

// const string3 = "melon"
// string3 ="melon";
// console.log(string3)

//var let const
//var: 재선언, 재할당
//let: 재선언 불가능, 재할당 가능
//const: 재선언 불가능, 재할당 불가능

//var 보다는 let 권장.

//let 111;
//console.log(111);

//'', "", `` 으로 문자열 선언 가능!


let name = 'asd';
console.log(`안녕하세요 ${name} 입니다`);

let names = ["홍길돋", "성춘향"]

names.push() // 배열의 마지막에 값을 추가하는 기능.
//names =["홍길동", "성춘향", "짱구", "짱아"];
console.log("push", name);

names.pop() //배열의 가장 마지막 값을 삭제.
console.log("pop", names);

names.unshift("신형만"); // 배열의 제일 앞의 값을 추가하는 기능.
console.log("unshift", names);

names.shift() // 배열의 제일 앞의 값을 삭제.
console.log("shift", names);

let index = names.indexOf("짱구"); // 배열 안에 "짱구" 몇번 인덱스에 위치해 있는지 확인 
//만약 값이 없을 경우엔 -1 반환
console.log(index);

let isIncludes = includes(); // 값이 포함되어 있는지 판별하는 기능
