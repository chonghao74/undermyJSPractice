//console.log();, alert();, confirm();, prompt(); 
function showConsoleLog() {
    console.log('console log Test');
    // window.console.log('console log Test');
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