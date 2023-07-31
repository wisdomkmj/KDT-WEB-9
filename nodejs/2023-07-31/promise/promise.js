function promise1(flag) {
    return new Promise( function(resolve, reject){
        if(flag){
            resolve(`promise 상태는 fulfilled!!! then으로 연결됩니다.\n 이때의 flag가 true입니다.`);
        } else{
            reject(`promise 상태는 reject!!! catch로 연결됩니다.\n 이때의 flag가 false입니다.`);
        }
    });
};

    promise1(true)
    .then(function(result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    });

    promise1(false)
    .then(function(result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    });

    //promise 사용.
    function goMart() {
        console.log("마트가서 어떤 음료 먹을까?")
    }
    
    function pickDrink() {
        return new Promise(function (resolve, reject){
            setTimeout(function () {
                console.log("고민 끝~");
                product = "제로 콜라";
                price = 2000;
                resolve();
            }, 2000);
        });
    };

    // function pay() {
    //     console.log(`상품명: ${product}, 가격: ${price}`);
    // }

    let product;
    let price;
    goMart();
    pickDrink().then(function () {
        console.log(`상품명: ${product}, 가격:${price}`);
    });

    // async/await
    // async function exec() {
    // goMart();
    // await pickDrink();
    // pay();
    // }
    // exec();