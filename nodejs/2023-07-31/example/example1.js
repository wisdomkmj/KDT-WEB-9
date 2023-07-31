// Callback -> Promise 코드 변경하기.

function call(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("name");
            resolve("name");
        }, 1000);
    });
};
function back(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("back");
            resolve("back");
        }, 1000);
    }, 1000);
};

// Promise로 실행.
call("kim")
    .then((res) => {
    console.log(`${res} 반가워.`);
    return back();
    })
    .then((res) => {
        console.log(`${res} back.`);
        // return back();
    })
    .then((res) => {
        console.log(`${res} 실행했구나.`);
        // return back();
    })
    .then((res) => {
        console.log(`${res} 여기는 콜백지옥.`);
    })