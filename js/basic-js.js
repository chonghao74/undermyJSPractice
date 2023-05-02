//console.log();, alert();,  prompt();
function showConsoleLog() {
    console.log('console log Test');
    // window.console.log('console log Test');
}

function showAlter() {
    alert('Show Alter');
    //window.alert('Show Alter');
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

//-- 
function testNamedFunction() {
    alert('testNamedFunction');
}