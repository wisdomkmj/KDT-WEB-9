class Cat {
    constructor(name, age){
        // 속성.
        this.name = name;
        this.age = age;
    }
    
    // 메서드.
    mew(){
        console.log("냥");
    }
    eat(){
        console.log("먹이를 먹습니다.")
    }
}
let cat1 = new Cat("고영희", 1);
let cat2 = new Cat("냥이", 2);

cat1.mew();
cat1.eat();

cat2.mew();
cat2.eat();