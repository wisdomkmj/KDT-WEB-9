const DB = [];

// 회원 가입 API 함수.
function register(user) { // 콜백이 3중으로 중첩.
    return saveDB(user, function (user) { // 콜백.
        return sendEmail(user, function (user) { // 콜백.
            return getResult(user); // 콜백.
        });
    });
}

// DB에 저장 후 콜백 실행.
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);  
    return callback(user);
}

// 이메일 발송 로그만 남기는 코드 실행 후 콜백 실행.
function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    return callback(user);
}

// 결과를 반환하는 함수.
function getResult(user) {
    return `success register ${user.name}`;
}

const result = register({ email: "kim@test.com", password: "1234", name: "kim"});
console.log(result);



// 콜백 연습 
// 요리 완성 시 호출되는 콜백 함수
// function eatFood(food) {
//     console.log("맛있게 " + food + "를 먹었습니다!");
// }

// // 요리 함수
// function cookMeal(ingredient1, ingredient2, callback) {
//     const meal = ingredient1 + "와 " + ingredient2 + "으로 만든 요리";
//     console.log(meal + "가 완성되었습니다!");
//     callback(meal); // 완성된 요리를 콜백 함수로 전달하여 먹기
// }

// // 요리 시작
// cookMeal("김치", "밥", eatFood);
