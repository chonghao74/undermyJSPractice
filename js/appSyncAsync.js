//basic Async
//e.g.1
//setInterval and clearInterval
// const timeData = 1000;
// let count = 0;
// let autoShow10Log;

// autoShow10Log = setInterval(() => {
//     count++;
//     console.log("setInterval " + count);
//     if (count === 10) {
//         clearInterval(autoShow10Log)
//     }


// }, timeData);

//e.g.2 
//setTmeout()
// console.log("1 " + getTime1());
// setTimeout(() => {
//     console.log("2 " + getTime1());
// },
//     2000);
// console.log("3 " + getTime1());

function getTime1() {
    let time = new Date();
    return `${time.getFullYear()}/${time.getMonth(0) + 1}/${time.getDate(0)} ${time.getHours()}:${time.getMinutes(0)}:${time.getSeconds()}`;
}

//e.g.2 
//callback
// function testCallback(callback) {
//     setTimeout(() => {
//         callback("2 " + getTime1());
//     }, 2000);
// }

// console.log("3 " + getTime1());

//e.g.3
//callback hell
// function testCallback(callback) {
//     setTimeout(() => {
//         callback("2 " + getTime1());
//     }, 2000);
// }

// function testCallback2(callback) {
//     setTimeout(() => {
//         callback("22 " + getTime1());
//     }, 2000);
// }

// function testCallback3(callback) {
//     setTimeout(() => {
//         callback("222 " + getTime1());
//     }, 2000);
// }

// function testCallback4(callback) {
//     setTimeout(() => {
//         callback("2222 " + getTime1());
//     }, 2000);
// }

// console.log("1 " + getTime1());
// testCallback((data) => {
//     if (data != null) {
//         console.log(data);
//         testCallback2((data2) => {
//             if (data2 != null) {
//                 console.log(data2);
//                 testCallback3((data3) => {
//                     if (data3 != null) {
//                         console.log(data3);
//                         testCallback4(data4 => {
//                             if (data4 != null) {
//                                 console.log(data4);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }

// })

// console.log("3 " + getTime1());



//Promise
//e.g.1
let testPromise = new Promise((resolve, reject) => {
    //resolve({ name: "Tim" });
    reject({ msg: "test Error" });
}
);

testPromise
    .then(d => {
        console.log(d.name);
    })
    .catch(e => {
        console.log(e.msg);
    });

//async await try catch
// async function getDataByES67() {
//     await a();
//     await b();
//     const timData = await getTime();

//     return (new Promise((resolve, reject) => {

//     }));
// }

// function a() {
//     setTimeout(() => {
//         console.log("2s -> a");
//     }, 2000);
// }

// function b() {
//     setTimeout(() => {
//         console.log("2s -> b");
//     }, 2000);
// }

// function getTime() {
//     setTimeout(() => {
//         return { name: "Tim", age: 18 };
//     }, 2000);
// }

let labTest = document.querySelector("#testJSFontBigger");
let countt = 1;
let size = 18;
let getInterval;

function testMousemove() {
    console.log("ddd");
    labTest.addEventListener("click", () => {
        console.log("ddddddd");
        countt = 1;
        size = 18;
        labTest.style.fontSize = `${size.toFixed(0)}px`;

        getInterval = setInterval(() => {
            console.log(size.toFixed(0));
            labTest.style.fontSize = `${size.toFixed(0)}px`;
            if (countt === 10) {
                clearInterval(getInterval);
            }
            else {
                size = size + (countt * 5);
            }
            countt++;
        }, 800);

    });
}

labTest.addEventListener('mouseenter', () => {
    // iniProperty();
    getInterval = setInterval(() => {
        console.log(size.toFixed(0));
        labTest.style.fontSize = `${size.toFixed(0)}px`;
        if (countt === 10) {
            clearInterval(getInterval);
        }
        else {
            size = size + (countt * 1.1);
        }
        countt++;
    }, 500);
});

labTest.addEventListener('mouseleave', () => {
    clearInterval(getInterval);
    iniProperty();
});

labTest.addEventListener('click', () => {
    console.log(testAxiosAPI());
});

function iniProperty() {
    console.log("ddddddd");
    countt = 1;
    size = 18;
    labTest.style.fontSize = `${size.toFixed(0)}px`;
}



