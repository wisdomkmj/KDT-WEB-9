function call(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(name);
            resolve(name);
        }, 1000);
    });
}
function back() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('back');
            resolve('back');
        }, 1000);
    });
}
function hell() {
    return new Promise((resolve) => {
        setTimeout(() => {
            //console.log('callback hell');
            resolve('callback hell');
        }, 1000);
    });
}

//promise로 실행
call('KIM')
    .then((res) => {
        console.log(`${res} 반가워`);
        return back();
    })
    .then((res) => {
        console.log(`${res}을 실행했구나`);
        return hell();
    })
    .then((res) => {
        console.log(`여기는 ${res}`);
    });

    
//async/await
// async function exec() {
//     let name = await call('martin');
//     console.log(`${res} 반가워`);
//     let res = await back();
//     console.log(`${res}을 실행했구나`);
//     let result = await hell();
//     console.log(`여기는 ${result}`);
// }
// exec();
