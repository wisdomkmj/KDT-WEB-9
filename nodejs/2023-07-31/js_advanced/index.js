// 배열 구조 분해.
const lists = ["apple", "grape", "peach"];
// 기존 방식.
console.log(lists[0], lists[1], lists[2]);
// 구조 분해.
[item1, item2, item3] = lists;
console.log("item1 -> ", item1, "  item2 -> ", item2, "  item3 -> ", item3 );
// 교환.
let x = 1, y = 3;
[x, y] = [y, x];

console.log(x, y);

// 객체.
const Person = {
    // key: value
    name: "KIM",
    age: 28,
    gender: "M",
    friends: ["LEE", "CHOI", "PARK"],
    hello: function() { // 함수도 객체로 만들수 있다.
        console.log("hello");
    },
    "KDT-WEB-9": "Posco x Codingon",
    city: "Seoul",
};
console.log(Person.name);
Person.age = 29;
console.log(Person.age);
console.log(Person.friends[1]);
Person.hello();
console.log(Person["name"]);
console.log(Person["KDT-WEB-9"]);
Person.city = "Seoul"

// 객체 구조 분해.
const {name, gender = "Hi", age: myAge = 30} = Person;
console.log(name, city, gender, key, anAge);
