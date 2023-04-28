//console.log();, alert();,  prompt();
// console.log('console log Test');
// alert('alert');
// prompt('請輸入年齡（最少18）', '20');
// window.alert('window alert');

//var, let , const
// var a = 10;

// console.log('a', a);

// let b = 12;
// let b = 13;

// const c = 14;
// const c = 15;

//整合測試
// let nameA;

// while (!Number(nameA)) {
//     nameA = prompt('請輸入年齡', 13);
//     if (!Number(nameA)) {
//         alert('請輸入數字');
//     }
// }

// alert(nameA);

// let aa = 5 % 2;
// let bb = 5 ** 2;
// console.log('aa 值為 5/2 得於數', aa);
// console.log('bb 值為 5的2次方', bb);


// let cc = 3;
// cc--;
// console.log(cc--);
// console.log(cc);



// let strA = 'It\'s a good day';
// console.log(strA);


// let NumA = '2';
// let NumB = '1';

// console.log('測試字串數字相加儉會有什麼情況', NumA + NumB);
// 11
// 22
// 33
// let A = 10;
// console.log(A.toString() - 10);
// console.log(A);
// console.log(Math.PI.toString());
// console.log(Math.PI.toFixed(5).toString());

// let testLength = 'Tim is a good man';
// console.log('test 的 長度', testLength.length);
// 


// let testIndex = 'Tim';
// console.log(testIndex[1]);

// let testIndexSlice = 'Tim123';
// console.log(testIndexSlice.slice(0, 3));
// console.log(testIndexSlice.slice(1));

// let testIndexIndexOf = '12345Tim12345';
// console.log(testIndexIndexOf.indexOf('2'));
// console.log(testIndexIndexOf.indexOf('J'));
// console.log(testIndexIndexOf.lastIndexOf('2'));
// console.log(testIndexIndexOf.lastIndexOf('B'));

// let testCase = 'Tim AAA';

// console.log(testCase.toLowerCase());
// console.log(testCase.toUpperCase());

// let testSplit = 'Tim AAA';

// console.log(testSplit.split(''));
// console.log(testSplit.split(' '));
// console.log(testSplit.split('i'));
// console.log(testSplit.split('K'));


// let testTypeOf1 = 'Tim AAA';
// let testTypeOf2 = 1;
// let testTypeOf3 = false;
// let testTypeOf4;
// let testTypeOf5 = NaN;
// let testTypeOf6 = null;
// console.log(typeof testTypeOf1);
// console.log(typeof testTypeOf2);
// console.log(typeof testTypeOf3);
// console.log(typeof testTypeOf4);
// console.log(typeof testTypeOf5);
// console.log(typeof testTypeOf6);

// let aWord = 'ABCDEFG';
// console.log('slice Method:', aWord.slice(0, 1));
// console.log('slice Method:', aWord.slice(1, 1));
// console.log('slice Method:', aWord.slice(1, 0));
// console.log('slice Method:', aWord.slice(1, -1));
// console.log('subSting Method:', aWord.substring(0, 1));
// console.log('subSting Method:', aWord.substring(1, 1));
// console.log('subSting Method:', aWord.substring(1, 0));
// console.log('subSting Method:', aWord.substring(2, -2));

// let A = 32;
// let B = '32';

// console.log('計算 ==', A == B);
// console.log('計算 ===', A === B);
// console.log('計算 !=', A != B);
// console.log('計算 !==', A !== B);

function promptCal() {
    let promptA = prompt('請輸入年齡且數字(最少18)', 18);
    if (promptA != null && promptA !== '') {
        if (!isNaN(Number(promptA))) {

            console.log(Number(promptA));
            if (promptA >= 18) {
                alert('您輸入的年齡為：' + promptA);
            }
            else {
                console.log(promptA);
                promptCal();
            }
        }
        else {
            console.log('非數字型態字串轉 Number 會 NaN');
            promptCal();
        }
    }
    else {
        if (promptA == null) {
            console.log('Prompt Cancel');
        }
        else {
            console.log('空值');
        }

        promptCal();
    }
}


// promptCal();


function promptSwithCal(numberA) {
    switch (true) {
        case (numberA >= 18 && numberA < 30):
            alert('>18 and <30 票價為 200');
            break;
        case (numberA >= 30 && numberA < 60):
            alert('30 and <60 票價為 300');
            break;
        default:
            alert('>60 票價為 150');
            break;
    }
}

// let A = prompt();
// promptSwithCal(Number(A));

// console.log(true && 'dog');
// console.log(new Object() && 13);

// console.log(false && 'dog');
// console.log(null && 12);

// console.log(true || 'dog');
// console.log(new Object() || 12);

// console.log(false || 'dog');
// console.log(NaN || 13);


// let aa-aa ='dd';
// let -aaaa = 5;
// let aaaa- = 5;

// let 1AA ='DS';

// let obj = {
//     //propertis setting
//     0: 'a',
//     1: 'b',
//     length: 3,
//     gogo: true,
//     2: 'c',
//     true: 4,

//     //method setting

//     sayHi(name) {
//         console.log(name + ' Saies Hi!')
//     },
//     myName: function setName(inputName) {
//         return inputName + '!';
//     }
// }

// obj.sayHi('Tim');

// console.log(obj.myName('Tim'));



// let objThis = {
//     name: 'NoN',
//     Age: 18,
//     showAge() {
//         console.log('My Age is ' + this.Age);
//     }
// }


// objThis.showAge();
// objThis.Age = 20;
// objThis.showAge();


// let objThis2 = {
//     yearWest: 2022,
//     makeYearChinese() {
//         this.yearChinese = this.yearWest - 1911;
//     }

// }

// console.log(objThis2);
// objThis2.makeYearChinese();
// console.log(objThis2);


// let objThis3 = {
//     gender: 'male',
//     showThis() {
//         console.log(this);
//     }

// }

// objThis3.showThis();

// let a = 5;

// while (a > 2) {
//     console.log(a);
//     a--;
// }

// for (let i = 1; i < 5; i++) {
//     if (i == 3) {
//         continue;
//     }

//     console.log(i);
// }

// for (let i = 1; i < 5; i++) {
//     if (i == 3) {
//         break;
//     }

//     console.log(i);
// }


// let arrayLoop = [1, 10, 20];
// for (let i = 0; i < arrayLoop.length; i++) {
//     console.log(i, arrayLoop[i]);
// }


// console.log(Math.PI);
// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-10));
// console.log(Math.random());

//practice1 Reservse Array
// const friendsArray = ['A', 'B', 'C'];
// let reverseFriendsArray = [];

// for (let i = 0; i < friendsArray.length; i++) {
//     reverseFriendsArray.push(friendsArray[(friendsArray.length - 1) - i]);
// }

// console.log(reverseFriendsArray);

//practice2 Maximum of an array

// function maxValue(inputArray) {
//     let biggestNumber;

//     if (inputArray.length === 0) {
//         biggestNumber = undefined;
//     }
//     else {

//         for (let i = 0; i < inputArray.length; i++) {
//             if (i === 0) {
//                 biggestNumber = inputArray[i];
//             }
//             else {
//                 if (inputArray[i] > biggestNumber) {
//                     biggestNumber = inputArray[i];
//                 }
//             }
//         }
//     }

//     return biggestNumber;
// }


// let array1 = [15, 20, 22, 16, 7];
// let array2 = [1, 2, 3, 4, 5, 999];
// let array3 = [-11, 0, -3, -4, -5, -999];
// let array4 = [];


// console.log(maxValue(array1));
// console.log(maxValue(array2));
// console.log(maxValue(array3));
// console.log(maxValue(array4));

//practice3 Add up to array
// function addUpTo(n) {
//     let showData = 0;
//     for (i = 1; i <= n; i++) {
//         showData += i;
//     }

//     return showData;
// }

// console.log('1+...10', addUpTo(10));
// console.log('1+...2542', addUpTo(2542));
// console.log('1+...1000', addUpTo(1000));
// console.log('1+...10000', addUpTo(10000));



//Split
// let AString = 'a bb ccc ddd eee ! ?';
// let AArray = AString.split(" ", 4);
// console.log(AArray);

//splice
// let A = ['a', 'b', 'c'];
// let B = ['a', 'b', 'c'];
// let C = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(A.splice(0));
// console.log(A);

// console.log(B.splice(1, 2));
// console.log(B);


// console.log(C.splice(0, 3, '1', '2'));
// console.log(C);

// function printMany(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }

// function printMany4(n) {
//     for (let i = 1; i <= n; i += 3) {
//         console.log(i)
//     }
// }

// function printStart(n) {
//     let start = '';
//     for (let i = 1; i <= n; i++) {
//         start += '*';
//     }

//     console.log(start);
// }

// printMany(3);
// console.log('');
// printMany4(10);
// console.log('');
// printStart(10);
// console.log('');










