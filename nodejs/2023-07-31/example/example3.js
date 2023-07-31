function red () {
    return new Promise(function (resolve, reject){
    
    setTimeout(function () {
        // document.body.style.backgroundColor = newColor;
        document.body.style.backgroundColor = "red";
        resolve()
    }, 1000)
    })
}
function orange () {
    return new Promise(function (resolve, reject){
    
    setTimeout(function () {
        document.body.style.backgroundColor = "orange";
        resolve()
    }, 900)
    })
}
function yellow () {
    return new Promise(function (resolve, reject){
    
    setTimeout(function () {
        document.body.style.backgroundColor = "yellow";
        resolve()
    }, 800)
    })
}
function green () {
    return new Promise(function (resolve, reject){
    
    setTimeout(function () {
        document.body.style.backgroundColor = "green";
        resolve()
    }, 700)
    })
}
function blue () {
    return new Promise(function (resolve, reject){
    
    setTimeout(function () {
        document.body.style.backgroundColor = "blue";
        resolve()
    }, 600)
    })
}

red()
.then(function(){
    return orange();
})
.then(function(){
    return yellow();
})
.then(function(){
    return green();
})
.then(function(){
    return blue();
})

// async/await

// setTimeout(function (){
//     document.body.style.backgroundColor = "red";
//     setTimeout(function(){
//         document.body.style.backgroundColor = "orange";
//         setTimeout(function(){
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(function(){
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(function(){
//                     document.body.style.backgroundColor = "blue";
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);