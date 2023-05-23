//console;, alert();, confirm();, prompt(); 
function showConsoleLog() {
    console.log('console log Test');
    // window.console.log('console log Test');
}

function showConsoleError() {
    console.error('console error Test');
    // window.console.error('console error Test');
}

function showConsoleWarn() {
    console.warn('console warn Test');
    // window.console.warn('console warn Test');
}

function showAlter() {
    alert('Show Alter');
    //window.alert('Show Alter');
}

function showConfirmAlter() {
    confirm('Show ConfirmAlter');
    //window.confirm('Show ConfirmAlte');
}

function showBasicPromt() {
    prompt('請輸入 tel');
}

function showAdvanedPromt() {
    prompt('請輸入年齡（最少18）', '20');
}

function showPromtAndAlter() {
    let inputData = prompt('請輸入年齡（最少18）', '20');
    if (inputData != null)
        window.alert(inputData);
}

//-- Primitive Data Type ，NaN，typeof 用法
function testPrimitive_DataType_NaN_typeof() {
    let aStr = 'AAA';
    let bStr = 'BBB';
    let aStrNum = '2';
    let bStrNum = '1';
    let Num1 = 10;
    let Num2 = 20;
    let cStr = 'Tim';
    let Num3 = 30;
    let Num4 = 40;

    console.log("'AAA' + 'BBB' = " + (aStr + bStr));
    console.log("'AAA' - 'BBB' = " + (aStr - bStr));
    console.log("'2' + '1' = " + (aStrNum + bStrNum));
    console.log("'2' - '1' = " + (aStrNum - bStrNum));
    console.log("'2' - 'AAA' = " + (aStrNum - aStr));
}

//-- test Number
function testNumber() {
    let aaa;
    let bbb = '1';
    window.alert(' let aaa;\nNumber(aaa) = ' + Number(aaa));
    window.alert(' let bbb = \'1\';\nNumber(bbb) = ' + Number(bbb));
}

//-- test String
function testStringSliceAndSplit() {
    let inputData = 'Tim AAA';
    //Slice
    window.console.log("Tim AAA slice(1) " + inputData.slice(1));
    window.console.log("Tim AAA substring(1) " + inputData.substring(1));
    window.console.log("Tim AAA slice(1, 4) " + inputData.slice(1, 4));
    window.console.log("Tim AAA substring(1, 4) " + inputData.slice(1, 4));

    //Split
    window.console.log("Tim AAA split('') " + inputData.split(''));
    window.console.log("Tim AAA split(' ') " + inputData.split(' '));
    window.console.log("Tim AAA split('i') " + inputData.split('i'));
    window.console.log("Tim AAA split('K') " + inputData.split('K'));
}

//-- Function
//-- Named Fuction
function testNamedFunction() {
    alert('testNamedFunction');
}

//-- Anonymous、 Arrow Function、Lambda expression
function testAnonymous_ArrowFunction_Lambda() {
    //Anonymous Function
    const anonymousBasicNoInputNoReturn = function () {
        const testArray = ['111', '222'];
        window.console.log(testArray.length);
    }

    //Arrow Function
    const arrowBasicNoInputNoReturn = () => {
        const testArray = ['111', '222'];
        window.console.log(testArray.length);
    };

    //Anonymous Function
    const anonymousBasicOneInputHadReturn = function (input) {
        const testArray = ['111', '222'];
        testArray.push(input);
        return testArray.length;
    }

    const arrowBasicOneInputHadReturn = (input) => {
        const testArray = ['111', '222'];
        testArray.push(input);
        return testArray.length;
    };

    // 一個參數就可以不用寫 ()
    const arrowBasicTwoInputHadReturn = input => {
        const testArray = ['111', '222'];
        testArray.push(input);
        testArray.forEach
        return testArray.length;
    };

    // 陳述式內只有一行 return 可以不用寫 {} 與 return
    const arrowBasicNoInputHadOneReturn = () => "ddd".length;

    // 一個參數就可以不用寫 ()，且陳述式內只有一行 return 可以不用寫 {} 與 return
    const arrowBasicOneInputHadOneReturn = input => input.length;

    anonymousBasicNoInputNoReturn();
    arrowBasicNoInputNoReturn();

    console.log(anonymousBasicOneInputHadReturn(33));
    console.log(arrowBasicOneInputHadReturn(33));
    console.log(arrowBasicNoInputHadOneReturn());
    console.log(arrowBasicNoInputHadOneReturn(444));
}

//Rest paramater
function restParamater(...list) {
    window.console.log("...list");
    for (const data of list) {
        window.console.log(data);
    }
}

function restParamater2(input, ...list) {
    window.console.log("input,...list");
    for (const data of list) {
        if (input > data) {
            window.console.log(input + " > " + data);
        }
        else {
            window.console.log(input + " <= " + data);
        }
    }
}

//Default Parameters 
function testDefaultParameter1(input1, input2 = 1) {
    console.log('input1 = ' + input1);
    console.log('input2 = ' + input2);
}

function testDefaultParameter2(input1, input2 = '3') {
    console.log('input1 = ' + input1);
    console.log('input2 = ' + input2);
}

function testDefaultParameter3(input1, input2 = function () {
    console.log('Show Log Default')
}) {
    console.log('input1 = ' + input1);
    input2();
}

//Statement and condition 
function testIfElseAndSwitch() {
    let inputData = window.prompt('輸入輸字', 1);
    if (inputData != null) {
        if (isNaN(inputData)) {
            window.alert('輸入資料非為輸字');
        }
        else {
            switch (true) {
                case (Number(inputData) > 0):
                    window.alert(inputData + ' > 0');
                    break;
                default:
                    window.alert(inputData + ' < 0');
                    break;

            }
        }
    }
}

//Loop
function testForLoop1() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    alert('look at Log');
}

function testForLoop2() {
    let arrayTest = [1, 2, 3, '4'];
    for (let data of arrayTest) {
        console.log(data);
    }

    alert('look at Log');
}

function testForEachByAnonymous() {
    let arrayData = [1, 2, '3', 4, 5, '6'];
    arrayData.forEach((value) => {
        console.log(value);
    });

    alert('look at Log');
}

function testForEachByArrowOrLambda() {
    let arrayData = [1, 2, '3', 4, 5, '6'];
    arrayData.forEach((value, index) => {
        console.log('value: ' + value + ' index: ' + index);
    });

    alert('look at Log');
}

// setInterval()、clearInterval()、setTimeout()
let testsetInterval;
function testSetInterval() {
    testsetInterval = setInterval(() => {
        let date = new Date();
        console.log(date.toLocaleTimeString());

    }, 1500);
}

function testClearInterval() {
    clearInterval(testsetInterval);
}

let testsetIntervalandClearInterval;
function testSetIntervalAndClearInterval() {
    let count = 4000;

    testsetIntervalandClearInterval = setInterval(() => {

        if (count <= 0) {
            clearInterval(testsetIntervalandClearInterval)
        }
        else {
            let date = new Date();
            console.log(date.toLocaleTimeString());
        }
        count -= 2000;
    }, 2000);
}


//Advance Practice
function arrayPlusConcat() {
    let arrayA = ["1", 2, 3];
    let arrayB = [4, 5, 6];

    console.log(arrayA + arrayB);
    console.log(arrayA.concat(arrayB));
}

function claPlusDataSpreadOperator(...objectData) {
    let result = 0;
    objectData.forEach(value => {
        if (!isNaN(value / 3) && (typeof value) != "string") {
            result += value;
        }
    })

    console.log(result);
}

function arrayPlusSpreadOperator() {
    let arrayA = ["1", 2, 3];
    let arrayB = [4, 5, 6];

    console.log([...arrayA, ...arrayB]);
}


function arrayAdvancedMap() {
    let arrayA = [1, 2, 3, 4, "5", 6];
    let arrayMap = arrayA.map(value => {
        if ((typeof value) == "string") {
            value = "String_" + value;
        }
        else if ((typeof value) == "number" && !isNaN(value)) {
            value = value ** 2;
        }

        return value;

    });

    console.log("Map -> " + arrayMap);
}

function arrayAdvancedFindFilter() {
    let arrayA = [1, 2, 3, 4, "String", 6];
    let arrayObjectB = [
        { age: 18 }, { age: 10 }, { age: 5 }];
    let arrayFind = arrayA.find(value => {
        return value > 3;
    })

    let arrayFilter = arrayA.filter(value => {
        return value > 3;
    })

    let arrayNotFind = arrayA.find(value => {
        return value > 10;
    })

    let arrayNotFilter = arrayA.filter(value => {
        return value > 10;
    })

    console.log(arrayFind);
    console.log(arrayFilter);
    console.log(arrayNotFind);
    console.log(arrayNotFilter);
}
function arrayAdvancedSomeEvery() {
    let arrayA = [1, 2, 3, 4, 5, 6];
    let arrayObjectB = [
        { age: 18 }, { age: 10 }, { age: 5 }];

    let arraySome = arrayA.some(value => {
        return value > 3;
    })

    let arrayEvery = arrayA.every(value => {
        return value > 0;
    })

    let arrayNotSome = arrayA.some(value => {
        return value > 10;
    })

    let arrayNoEvery = arrayA.every(value => {
        return value > 10;
    })

    console.log(arraySome);
    console.log(arrayEvery);
    console.log(arrayNotSome);
    console.log(arrayNoEvery);
}

function arrayAdvancedSort() {
    let a = [1, 3, 10, 9, 5];
    let b = ["banana", "grapes", "Apple", "apple", "Banana"];
    let c = [1, 3, 10, 9, 5, 44];
    let d = [1, 3, 10, 9, 5, 44];
    let e = ["1", "11", "111", "111111111", "111111111"];
    let f = ["1111", "1", "111", "11", "111111111"];
    console.log(a);
    console.log(a.sort());
    console.log(b);
    console.log(b.sort());

    console.log(c);
    console.log("小到大");
    console.log(c.sort((a, b) => {
        return a - b;
    }));
    console.log("大到小");
    console.log(d.sort((a, b) => {
        return b - a;
    }));

    console.log(" ");
    console.log(e);
    console.log("string length 小到大");
    console.log(e.sort((a, b) => {
        return a.length - b.length;
    }));
    console.log(" ");
    console.log(f);
    console.log("string length 大到小");
    console.log(f.sort((a, b) => {
        return b.length - a.length;
    }));


}

function forOfLoop() {
    let arrayA = [1, 2, 3, 4];
    for (let i = 0; i < arrayA.length; i++) {
        console.log(arrayA[i]);
    }

    for (let value of arrayA) {
        console.log(value);
    }

    arrayA.forEach(value => {
        console.log(value);
    });

}

function forInLoop() {
    let arrayA = [1, 2, 3, 4];
    let objectB = {
        id: 123,
        gender: "male",
        age: 18
    };

    for (let index in arrayA) {
        console.log(index + " : " + arrayA[index]);
    }

    for (let key in objectB) [
        console.log(key + " : " + objectB[key])
    ]
}



