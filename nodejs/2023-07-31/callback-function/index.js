function mainFunc(param1, param2, callback){
    let result = 0;
    callback(result);
}

function callbackFunc(param){
    console.log("콜백함수 입니다.");
}

mainFunc(1, 2, callbackFunc);
